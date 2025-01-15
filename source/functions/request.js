import * as cookies from '@yurkimus/cookies'
import { MessageError } from '@yurkimus/errors'
import * as message from '@yurkimus/message'
import { ResponseStatus } from '@yurkimus/response-status'

import {
  FeatureKinds,
  FeatureRequests,
  FeatureUrls,
} from '../enumerations/features.js'
import { Kinds } from '../enumerations/kinds.js'

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

  let url = FeatureUrls
    .get(feature)
    .get(network)

  let request = new Request(url(options), init)

  if (!request.headers.has('Content-Type'))
    request.headers.set(
      'Content-Type',
      'application/json',
    )

  if ('cookie' in init)
    request.headers.set(
      'Authorization',
      cookies.read('shaker-quiz-token', init.cookie),
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
  if (
    !FeatureRequests
      .has(feature)
  )
    throw TypeError(`Feature '${feature}' must be listed in 'FeatureRequests'.`)

  if (
    !FeatureRequests
      .get(feature)
      .has(method)
  )
    throw TypeError(`Method '${method}' must be listed in 'FeatureRequests'.`)

  if (
    !FeatureUrls
      .has(feature)
  )
    throw TypeError(`Feature '${feature}' must be listed in 'FeatureUrls'.`)

  if (
    !FeatureUrls
      .get(feature)
      .has(network)
  )
    throw TypeError(`Network '${network}' must be listed in 'FeatureUrls'.`)

  /**
   * @param {import('@yurkimus/url').URLOptions} options
   * @param {RequestInit} init
   */
  let request = (options, init) => {
    let onbefore = () => {
      let predicates = Extensions
        .get(request)
        .get('onbefore')

      return predicates.size
        ? Array
          .from(predicates)
          .reduce(
            (value, onbefore) => onbefore(value),
            [options, init],
          )
        : [options, init]
    }

    let onfulfilled = contract => {
      let predicates = Extensions
        .get(request)
        .get('onfulfilled')

      return predicates.size
        ? Array
          .from(predicates)
          .reduce((value, onfulfilled) => onfulfilled(value), contract)
        : contract
    }

    let onrejected = reason => {
      let predicates = Extensions
        .get(request)
        .get('onrejected')

      if (predicates.size)
        return Array
          .from(predicates)
          .reduce((value, onrejected) => onrejected(value), reason)

      throw reason
    }

    return new Promise((resolve, reject) => {
      try {
        resolve(onbefore(options, init))
      } catch (reason) {
        reject(reason)
      }
    })
      .then(parameters =>
        makeRequest(
          feature,
          method,
          network,
          ...parameters,
        )
      )
      .then(onfulfilled)
      .catch(onrejected)
  }

  Extensions.set(
    request,
    new Map([
      ['onbefore', new Set()],
      ['onfulfilled', new Set()],
      ['onrejected', new Set()],
    ]),
  )

  return request
}
