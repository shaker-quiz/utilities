import * as cookies from '@yurkimus/cookies'
import { MessageError } from '@yurkimus/errors'
import * as message from '@yurkimus/message'
import { ResponseStatus } from '@yurkimus/response-status'

import { Cookies } from '../enumerations/cookies.js'
import {
  FeatureKinds,
  FeatureOrigins,
  FeatureServices,
} from '../enumerations/features.js'
import { Kinds } from '../enumerations/kinds.js'
import { FeaturePatterns } from '../enumerations/patterns.js'

let handleMessage = (feature, [response, body]) => {
  switch (response.status) {
    case 200:
    case 201:
      return body

    case 204:
      switch (FeatureKinds[feature]) {
        case Kinds.Item:
          return null

        case Kinds.List:
          return []
      }

    case 400:
    case 401:
    case 403:
    case 404:
    case 409:
    case 415:
    case 500:
    case 502:
      throw MessageError(
        body.message,
        ResponseStatus(response.status),
      )

    default:
      throw body
  }
}

/**
 * @template {FeaturesUnion} Feature
 * @template {MethodsUnion} Method
 * @template {NetworksUnion} Network
 *
 * @param {Feature} feature
 * @param {Method} method
 * @param {Network} network
 * @param {import('@yurkimus/url').URLOptions | undefined} options
 * @param {RequestInit} init
 */
let makeRequest = (feature, method, network, options, init) => {
  if (!('method' in init))
    init.method = method

  let url = FeatureOrigins
    .get(FeatureServices[feature])
    .get(network)
    .call(
      undefined,
      FeaturePatterns[feature].pathname,
      options,
    )

  let request = new Request(url, init)

  if (!request.headers.has('Content-Type'))
    request.headers.set(
      'Content-Type',
      'application/json',
    )

  if ('cookie' in init)
    request.headers.set(
      'Authorization',
      cookies.read(Cookies.Token, init.cookie),
    )

  return fetch(request)
    .then(message.read)
    .then(handleMessage.bind(undefined, feature))
}

/**
 * @type {WeakMap<Function, Map<'onbefore' | 'onfulfilled' | 'onrejected', Set<Function>>>}
 */
export let Extensions = new WeakMap()

/**
 * @template {FeaturesUnion} Feature
 * @template {MethodsUnion} Method
 * @template {NetworksUnion} Network
 *
 * @param {Feature} feature
 * @param {Method} method
 * @param {Network} network
 */
export let useRequest = (feature, method, network) => {
  if (!(feature in FeatureServices))
    throw TypeError(
      `Feature '${feature}' must be listed in 'FeatureServices'.`,
    )

  if (!(feature in FeaturePatterns))
    throw TypeError(
      `Feature '${feature}' must be listed in 'FeaturePatterns'.`,
    )

  if (!FeatureOrigins.has(FeatureServices[feature]))
    throw TypeError(
      `Service '${
        FeatureServices[feature]
      }' must be listed in 'FeatureOrigins'.`,
    )

  if (!FeatureOrigins.get(FeatureServices[feature]).has(network))
    throw TypeError(
      `Network '${network}' must be listed in '${FeatureServices[feature]}'.`,
    )

  /**
   * @param {import('@yurkimus/url').URLOptions} options
   * @param {RequestInit} init
   */
  let request = (options, init) => {
    let onbefore = parameters => {
      let predicates = Extensions
        .get(request)
        .get('onbefore')

      return (predicates.size > 0)
        ? Array
          .from(predicates)
          .reduce(
            (parameters, onbefore) => onbefore(parameters),
            parameters,
          )
        : parameters
    }

    let onfulfilled = contract => {
      let predicates = Extensions
        .get(request)
        .get('onfulfilled')

      return (predicates.size > 0)
        ? Array
          .from(predicates)
          .reduce(
            (contract, onfulfilled) => onfulfilled(contract),
            contract,
          )
        : contract
    }

    let onrejected = reason => {
      let predicates = Extensions
        .get(request)
        .get('onrejected')

      Array
        .from(predicates)
        .forEach(onrejected => onrejected(reason))

      throw reason
    }

    return new Promise((resolve, reject) => {
      try {
        resolve(onbefore([options, init]))
      } catch (reason) {
        reject(reason)
      }
    })
      .then(([options, init]) =>
        makeRequest(
          feature,
          method,
          network,
          options,
          init,
        )
      )
      .then(onfulfilled)
      .catch(onrejected)
  }

  Extensions.set(
    request,
    new Map([
      ['onbefore', new Set([])],
      ['onfulfilled', new Set([])],
      ['onrejected', new Set([])],
    ]),
  )

  return request
}
