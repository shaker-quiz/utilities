import {
  Features,
  FeatureServiceDefaults,
  FeatureServiceNetworkOrigins,
} from '../enumerations/features.js'
import { Networks } from '../enumerations/networks.js'
import { ServiceFeatures } from '../enumerations/services.js'
import { Services } from '../enumerations/services.js'

/**
 * @param {Feature} feature
 * @param {Service} [service]
 * @param {Network} [network]
 */
export var getFeatureOrigin = (
  feature,
  service = FeatureServiceDefaults[feature],
  network = Networks.Public,
) => {
  if (!(feature in Features))
    throw TypeError(
      `[getFeatureOrigin] Parameter 'feature' must be a member of 'Features'.`,
    )

  if (!(service in Services))
    throw TypeError(
      `[getFeatureOrigin] Parameter 'service' must be a member of 'Services'.`,
    )

  if (!(network in Networks))
    throw TypeError(
      `[getFeatureOrigin] Parameter 'network' must be a member of 'Networks'.`,
    )

  if (!(feature in FeatureServiceNetworkOrigins))
    throw TypeError(
      `[getFeatureOrigin] Feature '${feature}' is not defined in 'FeatureServiceNetworkOrigins'.`,
    )

  if (!(service in FeatureServiceNetworkOrigins[feature]))
    throw TypeError(
      `[getFeatureOrigin] Feature's '${feature}' Service '${service}' is not defined in 'FeatureServiceNetworkOrigins[${feature}]'.`,
    )

  if (!(network in FeatureServiceNetworkOrigins[feature][service]))
    throw TypeError(
      `[getFeatureOrigin] Feature's '${feature}' Service '${service}' Network '${network}' is not defined in 'FeatureServiceNetworkOrigins[${feature}][${network}]'.`,
    )

  if (!URL.canParse(FeatureServiceNetworkOrigins[feature][service][network]))
    throw TypeError(
      `[getFeatureOrigin] Feature's '${feature}' Service '${service}' Network '${network}' must be URL-like.`,
    )

  return FeatureServiceNetworkOrigins[feature][service][network]
}

/**
 * @param {Partial<Record<Feature, Partial<Record<Service, Partial<Record<Network, URL['origin']>>>>>>} origins
 */
export var setFeatureOrigin = origins => {
  for (var feature in origins) {
    if (!(feature in Features))
      throw TypeError(
        `[setFeatureOrigin] Parameter 'feature' must be a member of 'Features'.`,
      )

    if (!(feature in FeatureServiceNetworkOrigins))
      throw TypeError(
        `[setFeatureOrigin] Feature '${feature}' is not defined 'FeatureServiceNetworkOrigins'.`,
      )

    for (var service in origins[feature]) {
      if (!(service in Services))
        throw TypeError(
          `[setFeatureOrigin] Parameter 'service' must be a member of 'Services'.`,
        )

      if (!(service in FeatureServiceNetworkOrigins[feature]))
        throw TypeError(
          `[setFeatureOrigin] Feature's '${feature}' Service '${service}' is not defined 'FeatureServiceNetworkOrigins[${feature}]'.`,
        )

      for (var network in origins[feature][service]) {
        if (!(network in Networks))
          throw TypeError(
            `[setFeatureOrigin] Parameter 'network' must be a member of 'Networks'.`,
          )

        if (!(network in FeatureServiceNetworkOrigins[feature][service]))
          throw TypeError(
            `[setFeatureOrigin] Feature's '${feature}' Service '${service}' Network '${network}' is not defined 'FeatureServiceNetworkOrigins[${feature}][${service}]'.`,
          )

        if (!URL.canParse(origins[feature][service][network]))
          throw TypeError(
            `[setFeatureOrigin] Feature's '${feature}' Service '${service}' Network '${network}' must be URL-like.`,
          )

        FeatureServiceNetworkOrigins[feature][service][network] =
          origins[feature][service][network]
      }
    }
  }

  return FeatureServiceNetworkOrigins
}

/**
 * @param {Partial<Record<Service, Partial<Record<Network, URL['origin']>>>>} origins
 */
export var setServiceOrigin = origins => {
  var instance = {}

  for (var service in origins) {
    if (!(service in Services))
      throw TypeError(
        `[setServiceOrigin] Service '${service}' must be a member of 'Services'.`,
      )

    for (var network in origins[service]) {
      if (!(network in Networks))
        throw TypeError(
          `[setServiceOrigin] Network '${network}' must be a member of 'Networks'.`,
        )

      for (var feature of ServiceFeatures[service]) {
        if (!(feature in instance))
          instance[feature] = {}

        if (!(service in instance[feature]))
          instance[feature][service] = {}

        instance[feature][service][network] = origins[service][network]
      }
    }
  }

  return setFeatureOrigin(instance)
}
