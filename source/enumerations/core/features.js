import { Kinds } from './kinds.js'

export var Domains = /** @type {const} */ ([
  // 'Asset',
  'User',
  'Role',
  'Country',
  'City',
  'Venue',
  'Theme',
  // 'ThemeAsset',
  'Game',
  // 'GameAsset',
  'Registration',
  // 'Mailing',
])

/**
 * @type {Record<Domain, Icon>}
 */
export var DomainIcon = {
  'User': 'users',
  'Role': 'identification',
  'Country': 'no-symbol',
  'City': 'building-office',
  'Venue': 'map-pin',
  'Theme': 'document-text',
  'Game': 'newspaper',
  'Registration': 'user-group',
  'Mailing': 'envelope',
}

/**
 * @type {Record<Domain, Record<Kind, string>>}
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

  'Country': {
    'Unit': '/country/:country?',
    'Set': '/countries',
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
    /**
     * Parameter "game" can be one of:
     * - UUID of a Game,
     * - Game alias combined with City (UUID, alias or VK group ID),
     * - UUID of a Registration
     */
    'Unit': '/game/:game?',
    'Set': '/games',
  },

  'Registration': {
    /**
     * Parameter "registration" can be one of:
     * - UUID of a Registration,
     * - VK identifier of a Registration
     */
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
 * @type {Record<Procedure, Record<Kind, string>>}
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
 * @type {Record<Feature, Record<Kind, string>>}
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
 */
export var getPathname = (feature, kind) => {
  if (!Features.includes(feature))
    throw TypeError(
      `[getPathname] Feature '${feature}' must be listed in 'Features'.`,
    )

  if (!Kinds.includes(kind))
    throw TypeError(
      `[getPathname] Kind '${kind}' must be listed in 'Kinds'.`,
    )

  return FeatureKindPathname[feature][kind]
}

/**
 * @param {Feature} feature
 * @param {Kind} kind
 */
export var getPattern = (feature, kind) => {
  if (!Features.includes(feature))
    throw TypeError(
      `[getPattern] Feature '${feature}' must be listed in 'Features'.`,
    )

  if (!Kinds.includes(kind))
    throw TypeError(
      `[getPattern] Kind '${kind}' must be listed in 'Kinds'.`,
    )

  return FeatureKindPatterns.find(([f, k]) => f == feature && k == kind)[2]
}
