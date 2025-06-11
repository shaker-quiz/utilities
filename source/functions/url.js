import { Features, FeatureServiceDefaults } from '../enumerations/features.js'
import { Kinds } from '../enumerations/kinds.js'
import { Networks } from '../enumerations/networks.js'
import { Services } from '../enumerations/services.js'

import { getFeatureOrigin } from './origin.js'
import { getFeaturePathname } from './pathname.js'

/**
 * @param {Feature} feature
 * @param {Service} service
 * @param {Network} [network]
 * @param {Kind} [kind]
 */
export var getFeatureUrl = (
  feature,
  service = FeatureServiceDefaults[feature],
  network = Networks.Public,
  kind = Kinds.Unit,
) => {
  if (!(feature in Features))
    throw TypeError(
      `[getFeatureUrl] Parameter 'feature' must be a member of 'Features'.`,
    )

  if (!(service in Services))
    throw TypeError(
      `[getFeatureUrl] Parameter 'service' must be a member of 'Services'.`,
    )

  if (!(network in Networks))
    throw TypeError(
      `[getFeatureUrl] Parameter 'network' must be a member of 'Networks'.`,
    )

  if (!(kind in Kinds))
    throw TypeError(
      `[getFeatureUrl] Parameter 'kind' must be a member of 'Kinds'.`,
    )

  return new URL(
    getFeaturePathname(feature, kind),
    getFeatureOrigin(feature, service, network),
  )
}
