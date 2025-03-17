import {
  FeatureNetworkOrigins,
  Features,
  ServiceFeatures,
} from '../enumerations/features.js'
import { Networks } from '../enumerations/networks.js'
import { Services } from '../enumerations/services.js'

/**
 * @param {Record<
 *  keyof typeof Services,
 *  Record<keyof typeof Networks, URL['origin']>
 * >} origins
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

      for (let network in origins[service]) {
        if (!(network in Networks))
          throw TypeError(
            `Network '${network}' must be listed in 'Networks'.`,
          )

        return void FeatureNetworkOrigins
          .get(feature)
          .set(network, origins[service][network])
      }
    }
  }
}
