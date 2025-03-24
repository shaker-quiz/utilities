import * as cookies from '@yurkimus/cookies'
import { MessageError } from '@yurkimus/errors'
import * as message from '@yurkimus/message'
import { ResponseStatus } from '@yurkimus/response-status'

import { Cookies } from '../enumerations/cookies.js'
import {
  FeatureKinds,
  FeatureNetworkUrls,
  FeaturePathnames,
  Features,
} from '../enumerations/features.js'
import { Kinds } from '../enumerations/kinds.js'
import { Networks } from '../enumerations/networks.js'
import { RequestMethods } from '../enumerations/request-methods.js'
import { Roles } from '../enumerations/roles.js'

/**
 * @typedef {'onbefore' | 'onfulfilled' | 'onrejected'} ExtensionHooks
 */

/**
 * @typedef {WeakMap<Function, Map<ExtensionHooks, Set<Function>>>} Extensions
 */

/**
 * @type {Extensions}
 */
export var extensions = new WeakMap()

var handleMessage = (feature, [response, body]) => {
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
 * @template {keyof typeof Networks} Network
 *
 * @param {Feature} feature
 * @param {Network} network
 */
export var useFetch = (feature, network) =>
  /**
   * @template {keyof typeof Roles} Role
   *
   * @param {import('@yurkimus/url').URLOptions | undefined} options
   * @param {RequestInit} init
   *
   * @returns {Promise<FetchResults[Feature][RequestMethod][Role]>}
   */
  function fetcher(options, init) {
    if (!(feature in Features))
      throw TypeError(
        `Feature '${feature}' must be listed in 'Features'.`,
      )

    if (!(init.method in RequestMethods))
      throw TypeError(
        `Method '${init.method}' must be listed in 'RequestMethods'.`,
      )

    if (!(network in Networks))
      throw TypeError(
        `Network '${network}' must be listed in 'Networks'.`,
      )

    if (!(feature in FeaturePathnames))
      throw TypeError(
        `Feature '${feature}' must be listed in 'FeaturePathnames'.`,
      )

    if (!FeatureNetworkUrls.has(feature))
      throw TypeError(
        `Feature '${feature}' must be listed in 'FeatureNetworkUrls'.`,
      )

    if (!FeatureNetworkUrls.get(feature).has(network))
      throw TypeError(
        `Feature's '${feature}' Network '${network}' must be listed in 'FeatureNetworkUrls'.`,
      )

    if (!FeatureNetworkUrls.get(feature).get(network))
      throw TypeError(
        `Feature's '${feature}' Network '${network}' in 'FeatureNetworkUrls' must have a value.`,
      )

    extensions.set(
      fetcher,
      new Map([
        ['onbefore', new Set([])],
        ['onfulfilled', new Set([])],
        ['onrejected', new Set([])],
      ]),
    )

    var url = FeatureNetworkUrls
      .get(feature)
      .get(network)
      .call(undefined, options)

    var request = new Request(url, init)

    if ('cookie' in init)
      request.headers.set(
        'Authorization',
        cookies.read(Cookies.Token, init.cookie),
      )

    if (!request.headers.has('Content-Type'))
      request.headers.set(
        'Content-Type',
        'application/json',
      )

    /**
     * @param {ExtensionHooks} name
     * @param {any} value
     */
    var hook = (name, value) =>
      Array
        .from(extensions.get(fetcher).get(name))
        .reduce((x, f) => f(x), value)

    return new Promise((resolve, reject) => {
      try {
        resolve(hook('onbefore', request))
      } catch (reason) {
        reject(reason)
      }
    })
      .then(fetch)
      .then(message.read)
      .then(handleMessage.bind(undefined, feature))
      .then(hook.bind(undefined, 'onfulfilled'))
      .catch(hook.bind(undefined, 'onrejected'))
  }
