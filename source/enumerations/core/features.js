import { Kinds } from './kinds.js'

export var Domains = /** @type {const} */ ([
  'Asset',
  'User',
  'Role',
  'City',
  'Venue',
  'Theme',
  'ThemeAsset',
  'Game',
  'GameAsset',
  'Registration',
  'Mailing',
])

/**
 * @type {Record<Domain, Icon>}
 */
export var DomainIcon = {
  'User': 'users',
  'Role': 'identification',
  'City': 'building-office',
  'Venue': 'map-pin',
  'Theme': 'document-text',
  'Game': 'newspaper',
  'Registration': 'user-group',
  'Mailing': 'envelope',
}

/**
 * @satisfies {Record<Domain, Record<Kind, string>>}
 */
export var DomainKindPathname = /** @type {const} */ ({
  'User': {
    'Unit': '/user/:user?',
    'Set': '/users',
  },

  'Role': {
    'Unit': '/role/:role?',
    'Set': '/roles',
  },

  'City': {
    'Unit': '/city/:city?',
    'Set': '/cities',
  },

  'Venue': {
    'Unit': '/venue/:venue?',
    'Set': '/venues',
  },

  'Theme': {
    'Unit': '/theme/:theme?',
    'Set': '/themes',
  },

  'Game': {
    'Unit': '/game/:game?',
    'Set': '/games',
  },

  'Registration': {
    'Unit': '/registration/:registration?',
    'Set': '/registrations',
  },

  'Mailing': {
    'Unit': '/mailing/:mailing?',
    'Set': '/mailings',
  },
})

export var Procedures = /** @type {const} */ ([
  'Checkin',
  'Redirect',
])

/**
 * @type {Record<Procedure, Icon>}
 */
export var ProcedureIcon = {
  'Checkin': 'arrow-right-end-on-rectangle',
  'Redirect': 'no-symbol',
}

/**
 * @satisfies {Record<Procedure, Record<Kind, string>>}
 */
export var ProcedureKindPathname = /** @type {const} */ ({
  'Checkin': {
    'Unit': '/checkin',
    'Set': '/checkins',
  },

  'Redirect': {
    'Unit': '/redirect',
    'Set': '/redirects',
  },
})

/**
 * @type {Array<Domain | Procedure>}
 */
export var Features = Domains.concat(Procedures)

/**
 * @type {Record<Feature, Icon>}
 */
export var FeatureIcon = {
  ...DomainIcon,
  ...ProcedureIcon,
}

/**
 * @satisfies {Record<Feature, Record<Kind, string>>}
 */
export var FeatureKindPathname = {
  ...DomainKindPathname,
  ...ProcedureKindPathname,
}

/**
 * @type {Array<[feature: Feature, kind: Kind, pathname: string]>}
 */
export var FeatureKindPathnames = Object
  .keys(FeatureKindPathname)
  .flatMap(feature =>
    Object
      .keys(FeatureKindPathname[feature])
      .map(kind => [feature, kind, FeatureKindPathname[feature][kind]])
  )

/**
 * @type {Array<[feature: Feature, kind: Kind, pattern: URLPattern]>}
 */
export var FeatureKindPatterns = FeatureKindPathnames
  .map(([feature, kind, pathname]) => [
    feature,
    kind,
    new URLPattern({ pathname }),
  ])

/**
 * @param {Feature} feature
 * @param {Kind} kind
 *
 * @returns {URLPattern}
 */
export let resolvePattern = (feature, kind) => {
  if (!Features.includes(feature))
    throw TypeError(
      `Feature '${feature}' must be listed in 'Features'.`,
    )

  if (!Kinds.includes(kind))
    throw TypeError(
      `Kind '${kind}' must be listed in 'Kinds'.`,
    )

  return FeatureKindPatterns
    .find(([f, k]) => f == feature && k == kind)
    ?.at(2)
}
