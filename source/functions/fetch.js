import * as cookies from '@yurkimus/cookies'
import { MessageError } from '@yurkimus/errors'
import * as message from '@yurkimus/message'
import { ResponseStatus } from '@yurkimus/response-status'
import { type } from '@yurkimus/types'
import { url } from '@yurkimus/url'

import { Cookies } from '../enumerations/cookies.js'
import { Features, FeatureServiceDefaults } from '../enumerations/features.js'
import { Kinds } from '../enumerations/kinds.js'
import { Methods } from '../enumerations/methods.js'
import { Networks } from '../enumerations/networks.js'
import { ServiceFeatures, Services } from '../enumerations/services.js'
import { getFeatureOrigin } from './origin.js'
import { getFeaturePathname } from './pathname.js'

var fulfillment = (kind, [response, body]) => {
  switch (response.status) {
    case 200:
    case 201:
      return body

    case 204:
      switch (kind) {
        case Kinds.Unit:
          return null

        case Kinds.Set:
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
 * @template {Feature} F
 * @template {Service} S
 * @template {Network} N
 * @template {Kind} K
 *
 * @param {F | { feature: F, kind?: K, service?: S, network?: N }} configuration
 */
export var getFeatureFetch = configuration => {
  var feature,
    kind = Kinds.Unit,
    service = FeatureServiceDefaults[feature],
    network = Networks.Public

  switch (type(configuration)) {
    case 'String':
      feature = configuration
      break

    case 'Object':
      feature = configuration.feature
      kind = configuration.kind ?? kind
      service = configuration.service ?? service
      network = configuration.network ?? network
      break

    default:
      throw TypeError(
        `Parameter configuration '${configuration}' must be either 'String' or 'Object'.`,
      )
  }

  if (!(feature in Features))
    throw TypeError(
      `Feature '${feature}' must be a member of 'Features'.`,
    )

  if (!(kind in Kinds))
    throw TypeError(
      `Kind '${kind}' must be a member of 'Kinds'.`,
    )

  if (!(service in Services))
    throw TypeError(
      `Service '${service}' must be a member of 'Services'.`,
    )

  if (!(network in Networks))
    throw TypeError(
      `Network '${network}' must be a member of 'Networks'.`,
    )

  if (!ServiceFeatures[service].includes(feature))
    throw TypeError(
      `Feature '${feature}' must be a member of 'ServiceFeatures[${service}]'.`,
    )

  /**
   * @param {import('@yurkimus/url').URLOptions} input
   * @param {RequestInit} init
   *
   * @returns {Promise<any>}
   */
  // @template {Method} [M='GET']
  // FeatureFetchResponses[F][S][M][R][K]
  // FeatureFetchResponses[F][S][M][R][K]
  return (input, init) => {
    if (!(init.method in Methods))
      throw TypeError(
        `Method '${init.method}' is not listed in 'Methods'.`,
      )

    var request = new Request(
      url(
        getFeatureOrigin(feature, service, network),
        getFeaturePathname(feature, kind),
        input,
      ),
      init,
    )

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

    return globalThis
      .fetch(request)
      .then(message.read)
      .then(fulfillment.bind(undefined, kind))
  }
}
