import { url } from '@yurkimus/url'

import {
  FeatureNetworkOrigins,
  FeatureNetworkUrls,
  FeaturePathnames,
  Features,
  ServiceFeatures,
} from '../enumerations/features.js'
import { Networks } from '../enumerations/networks.js'
import { Services } from '../enumerations/services.js'

/**
 * @param {Partial<Record<Service, Partial<Record<Network, URL['origin']>>>>} origins
 *
 * @returns {void}
 */
export var setFeatureNetworkOrigins = origins => {
  for (let service in origins) {
    if (!(service in Services))
      throw TypeError(
        `Service '${service}' must be listed in 'Services'.`,
      )

    for (let feature of ServiceFeatures[service]) {
      if (!(feature in Features))
        throw TypeError(
          `Feature '${feature}' must be listed in 'Features'.`,
        )

      if (!(feature in FeaturePathnames))
        throw TypeError(
          `Feature '${feature}' must be listed in 'FeaturePathnames'.`,
        )

      for (let network in origins[service]) {
        if (!(network in Networks))
          throw TypeError(
            `Network '${network}' must be listed in 'Networks'.`,
          )

        var origin = origins[service][network]
        var pathname = FeaturePathnames[feature]

        FeatureNetworkOrigins
          .get(feature)
          .set(network, origin)

        FeatureNetworkUrls
          .get(feature)
          .set(network, url.bind(undefined, origin, pathname))
      }
    }
  }
}
