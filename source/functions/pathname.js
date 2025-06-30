import { is } from '@yurkimus/types'

import { FeatureKindPathname } from '../enumerations/core/features.js'
import { Scopes } from '../enumerations/core/scopes.js'

/**
 * @param {Scope} scope
 */
export var scopePathname = scope => {
  if (!Scopes.includes(scope))
    throw TypeError(
      `[scopePathname] Unknown scope '${scope}': not present in 'Scopes'.`,
    )

  var [method, feature, kind] = scope.split('/')

  if (!(feature in FeatureKindPathname))
    throw TypeError(
      `[scopePathname] Feature '${feature}' is not defined in 'FeatureKindPathname'.`,
    )

  if (!(kind in FeatureKindPathname[feature]))
    throw TypeError(
      `[scopePathname] Kind '${kind}' is not defined under Feature '${feature}' in 'FeatureKindPathname'.`,
    )

  if (!is('String', FeatureKindPathname[feature][kind]))
    throw TypeError(
      `[scopePathname] Invalid value at FeatureKindPathname['${feature}']['${kind}']: expected a string, got '${typeof FeatureKindPathname[
        feature
      ][kind]}'.`,
    )

  return FeatureKindPathname[feature][kind]
}
