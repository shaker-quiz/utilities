import * as cookies from '@yurkimus/cookies'
import { MessageError } from '@yurkimus/errors'
import * as message from '@yurkimus/message'
import { ResponseStatus } from '@yurkimus/response-status'
import { url } from '@yurkimus/url'

import { Cookies } from '../enumerations/cookies.js'
import {
  FeatureKinds,
  FeatureNetworkOrigins,
  FeaturePathnames,
  Features,
} from '../enumerations/features.js'
import { Kinds } from '../enumerations/kinds.js'
import { Methods } from '../enumerations/methods.js'
import { Networks } from '../enumerations/networks.js'
import { Roles } from '../enumerations/roles.js'

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

    default:
      throw MessageError(
        body?.message ?? '',
        ResponseStatus(response.status),
      )
  }
}

/**
 * @template {keyof typeof Features} Feature
 * @template {keyof typeof Methods} Method
 * @template {keyof typeof Networks} Network
 *
 * @param {Feature} feature
 * @param {Method} method
 * @param {Network} network
 * @param {import('@yurkimus/url').URLOptions | undefined} options
 * @param {RequestInit} init
 */
let request = (feature, method, network, options, init) => {
  if (!('method' in init))
    init.method = method

  let instance = new Request(
    url(
      FeatureNetworkOrigins.get(feature).get(network),
      FeaturePathnames[feature],
      options,
    ),
    init,
  )

  if (!instance.headers.has('Content-Type'))
    instance.headers.set(
      'Content-Type',
      'application/json',
    )

  if ('cookie' in init)
    instance.headers.set(
      'Authorization',
      cookies.read(Cookies.Token, init.cookie),
    )

  return fetch(instance)
    .then(message.read)
    .then(handleMessage.bind(
      undefined,
      feature,
    ))
}

/**
 * @type {WeakMap<Function, Map<'onbefore' | 'onfulfilled' | 'onrejected', Set<Function>>>}
 */
export let Extensions = new WeakMap()

/**
 * @template {keyof typeof Features} Feature
 * @template {keyof typeof Methods} Method
 * @template {keyof typeof Networks} Network
 *
 * @param {Feature} feature
 * @param {Method} method
 * @param {Network} network
 */
export let useFetch = (feature, method, network) => {
  if (!(feature in Features))
    throw TypeError(
      `Feature '${feature}' must be listed in 'Features'.`,
    )

  if (!(method in Methods))
    throw TypeError(
      `Method '${method}' must be listed in 'Methods'.`,
    )

  if (!(feature in FeaturePathnames))
    throw TypeError(
      `Feature '${feature}' must be listed in 'FeaturePathnames'.`,
    )

  if (!FeatureNetworkOrigins.has(feature))
    throw TypeError(
      `Feature '${feature}' must be listed in 'FeatureNetworkOrigins'.`,
    )

  if (!FeatureNetworkOrigins.get(feature).has(network))
    throw TypeError(
      `Feature Network '${feature}' '${network}' must be listed in 'FeatureNetworkOrigins'.`,
    )

  if (!URL.canParse(FeatureNetworkOrigins.get(feature).get(network)))
    throw TypeError(
      `Value of 'FeatureNetworkOrigins' '${feature}' '${network}' cannot be parsed as URL.`,
    )

  /**
   * @template {keyof typeof Roles} Role
   *
   * @param {import('@yurkimus/url').URLOptions} options
   * @param {RequestInit} init
   *
   * @returns {Promise<FetchResults[Feature][Method][Role]>}
   */
  let fetch = (options, init) => {
    let onbefore = parameters => {
      let predicates = Extensions
        .get(fetch)
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
        .get(fetch)
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
        .get(fetch)
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
        request(
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
    fetch,
    new Map([
      ['onbefore', new Set([])],
      ['onfulfilled', new Set([])],
      ['onrejected', new Set([])],
    ]),
  )

  return fetch
}
