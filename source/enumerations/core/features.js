import { DomainIcon, DomainKindPathname, DomainMethodRequirements, Domains } from './domains.js'

import { ProcedureIcon, ProcedureKindPathname, ProcedureMethodRequirements, Procedures } from './procedures.js'

export var Features = Domains.concat(Procedures)

/**
 * @type {Record<Feature, Icon>}
 */
export var FeatureIcon = {
  ...DomainIcon,
  ...ProcedureIcon,
}

/**
 * @type {Record<Feature, Record<Kind, string>>}
 */
export var FeatureKindPathname = {
  ...DomainKindPathname,
  ...ProcedureKindPathname,
}

/**
 * @type {Record<Feature, Record<Method, Requirement>>}
 */
export var FeatureMethodRequirements = {
  ...DomainMethodRequirements,
  ...ProcedureMethodRequirements,
}
