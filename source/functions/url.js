import { DomainServiceDefaults } from '../enumerations/domains.js'
import { Features } from '../enumerations/features.js'
import { Kinds } from '../enumerations/kinds.js'
import { Networks } from '../enumerations/networks.js'
import { ProcedureServiceDefaults } from '../enumerations/procedures.js'
import { Services } from '../enumerations/services.js'

import { getFeatureOrigin } from './origin.js'
import { getFeaturePathname } from './pathname.js'

/**
 * @param {Domain | Procedure} feature
 * @param {Backend | Frontend} service
 * @param {Network} [network]
 * @param {Kind} [kind]
 */
export var getFeatureUrl = (
  feature,
  service = DomainServiceDefaults[feature]
    ?? ProcedureServiceDefaults[feature],
  network = Networks.Public,
  kind = Kinds.Unit,
) => {
  if (!(feature in Features))
    throw TypeError(
      `Parameter 'feature' must be a member of 'Features'.`,
    )

  if (!(service in Services))
    throw TypeError(
      `Parameter 'service' must be a member of 'Services'.`,
    )

  if (!(network in Networks))
    throw TypeError(
      `Parameter 'network' must be a member of 'Networks'.`,
    )

  if (!(kind in Kinds))
    throw TypeError(
      `Parameter 'kind' must be a member of 'Kinds'.`,
    )

  return new URL(
    getFeaturePathname(feature, kind),
    getFeatureOrigin(feature, service, network),
  )
}
