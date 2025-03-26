import { url } from '@yurkimus/url'

import {
  FeaturePathnames,
  Features,
  ServiceFeatureNetworkURLs,
  ServiceFeatures,
  ServiceNetworkOrigins,
} from '../enumerations/features.js'
import { Networks } from '../enumerations/networks.js'
import { Services } from '../enumerations/services.js'

/**
 * @param {Partial<Record<Service, Partial<Record<Network, URL['origin']>>>>} origins
 *
 * @returns {void}
 */
export var setServiceNetworkOrigins = origins => {
  for (var service in origins) {
    if (!(service in Services))
      throw TypeError(
        `Service '${service}' must be listed in 'Services'.`,
      )

    for (var network in origins[service]) {
      if (!(network in Networks))
        throw TypeError(
          `Network '${network}' must be listed in 'Networks'.`,
        )

      for (var origin in origins[service][network]) {
        ServiceNetworkOrigins
          .get(service)
          .set(network, origin)

        for (var feature of ServiceFeatures[service]) {
          if (!(feature in Features))
            throw TypeError(
              `Feature '${feature}' must be listed in 'Features'.`,
            )

          if (!(feature in FeaturePathnames))
            throw TypeError(
              `Feature '${feature}' must be listed in 'FeaturePathnames'.`,
            )

          if (!ServiceFeatureNetworkURLs.has(service))
            throw TypeError(
              `Service '${service}' must be listed in 'ServiceFeatureNetworkURLs'.`,
            )

          if (!ServiceFeatureNetworkURLs.get(service).has(feature))
            throw TypeError(
              `Feature '${feature}' must be listed in 'ServiceFeatureNetworkURLs[${service}]'.`,
            )

          ServiceFeatureNetworkURLs
            .get(service)
            .get(feature)
            .set(
              network,
              url.bind(undefined, origin, FeaturePathnames[feature]),
            )
        }
      }
    }
  }
}
