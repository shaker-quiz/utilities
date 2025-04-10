import { is } from '@yurkimus/types'

import { FeatureKindPathnames, Features } from '../enumerations/features.js'
import { Kinds } from '../enumerations/kinds.js'

/**
 * @param {Feature} feature
 * @param {Kind} [kind]
 */
export var getFeaturePathname = (
  feature,
  kind = Kinds.Unit,
) => {
  if (!(feature in Features))
    throw TypeError(
      `Parameter 'feature' must be a member of 'Features'.`,
    )

  if (!(kind in Kinds))
    throw TypeError(
      `Parameter 'kind' must be a member of 'Kinds'.`,
    )

  if (!(feature in FeatureKindPathnames))
    throw TypeError(
      `Feature '${feature}' is not defined in 'FeatureKindPathnames'.`,
    )

  if (!(kind in FeatureKindPathnames[feature]))
    throw TypeError(
      `Feature's '${feature}' Kind '${kind}' is not defined in 'FeatureKindPathnames[${feature}]'.`,
    )

  if (!is('String', FeatureKindPathnames[feature][kind]))
    throw TypeError(
      `Feature's '${feature}' Kind '${kind}' must be a 'String'.`,
    )

  return FeatureKindPathnames[feature][kind]
}
