import { Kinds } from './kinds.js'

/**
 * @deprecated
 */
export var Domains = /** @type {const} */ ([
  // 'Asset',
  'User',
  'Role',
  'Country',
  'Currency',
  'City',
  'Venue',
  'Theme',
  // 'ThemeAsset',
  'Game',
  // 'GameAsset',
  'Registration',
  'Mailing',
])

/**
 * @type {Record<Domain, Icon>}
 *
 * @deprecated
 */
export var DomainIcon = {
  'User': 'users',
  'Role': 'identification',
  'Country': 'no-symbol',
  'Currency': 'no-symbol',
  'City': 'building-office',
  'Venue': 'map-pin',
  'Theme': 'document-text',
  'Game': 'newspaper',
  'Registration': 'user-group',
  'Mailing': 'envelope',
}

/**
 * @type {Record<Domain, Record<Kind, string>>}
 *
 * @deprecated
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

  'Currency': {
    'Unit': '/currency/:currency?',
    'Set': '/currencies',
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

/**
 * @deprecated
 */
export var Procedures = /** @type {const} */ ([
  'Checkin',
  'Redirect',
])

/**
 * @type {Record<Procedure, Icon>}
 *
 * @deprecated
 */
export var ProcedureIcon = {
  'Checkin': 'arrow-right-end-on-rectangle',
  'Redirect': 'no-symbol',
}

/**
 * @type {Record<Procedure, Record<Kind, string>>}
 *
 * @deprecated
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
 *
 * @deprecated
 */
export var Features = Domains.concat(Procedures)

/**
 * @type {Record<Feature, Icon>}
 *
 * @deprecated
 */
export var FeatureIcon = {
  ...DomainIcon,
  ...ProcedureIcon,
}

/**
 * @type {Record<Feature, Record<Kind, string>>}
 *
 * @deprecated
 */
export var FeatureKindPathname = {
  ...DomainKindPathname,
  ...ProcedureKindPathname,
}

/**
 * @type {Array<[feature: Feature, kind: Kind, pathname: string]>}
 *
 * @deprecated
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
 *
 * @deprecated
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
 * @deprecated
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
 *
 * @deprecated
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

export var Feature = /** @type {const} */ ({
  'Users': 'Users',
  'User': 'User',
  'Roles': 'Roles',
  'Role': 'Role',
  'Checkins': 'Checkins',
  'Checkin': 'Checkin',
  'Countries': 'Countries',
  'Country': 'Country',
  'Currencies': 'Currencies',
  'Currency': 'Currency',
  'Cities': 'Cities',
  'City': 'City',
  'Venues': 'Venues',
  'Venue': 'Venue',
  'Games': 'Games',
  'Game': 'Game',
  'Themes': 'Themes',
  'Theme': 'Theme',
  'Registrations': 'Registrations',
  'Registration': 'Registration',
  'Mailings': 'Mailings',
  'Mailing': 'Mailing',
})

/** @type {Record<Feature, Icon>} */
export var FeatureIcon = {
  [Feature.Users]: 'hero/solid/users',
  [Feature.User]: 'hero/solid/users',
  [Feature.Roles]: 'hero/solid/identification',
  [Feature.Role]: 'hero/solid/identification',
  [Feature.Checkins]: 'arrow-right-end-on-rectangle',
  [Feature.Checkin]: 'arrow-right-end-on-rectangle',
  [Feature.Countries]: 'hero/outline/no-symbol',
  [Feature.Country]: 'hero/outline/no-symbol',
  [Feature.Currencies]: 'hero/outline/banknotes',
  [Feature.Currency]: 'hero/outline/banknotes',
  [Feature.Cities]: 'hero/outline/building-office',
  [Feature.City]: 'hero/outline/building-office',
  [Feature.Venues]: 'hero/outline/map-pin',
  [Feature.Venue]: 'hero/outline/map-pin',
  [Feature.Games]: 'hero/outline/newspaper',
  [Feature.Game]: 'hero/outline/newspaper',
  [Feature.Themes]: 'hero/outline/document-text',
  [Feature.Theme]: 'hero/outline/document-text',
  [Feature.Registrations]: 'hero/outline/user-group',
  [Feature.Registration]: 'hero/outline/user-group',
  [Feature.Mailings]: 'hero/outline/envelope',
  [Feature.Mailing]: 'hero/outline/envelope',
}

export var RoutePathname = /** @type {const} */ ({
  Users: '/users',
  User: '/users/:user?',

  Roles: '/roles',
  Role: '/roles/:role?',

  Checkins: '/checkins',
  Checkin: '/checkins/:checkin?',

  Countries: '/countries',
  Country: '/countries/:country?',

  Currencies: '/currencies',
  Currency: '/currencies/:currency?',

  Cities: '/cities',
  City: '/cities/:city?',

  Venues: '/venues',
  Venue: '/venues/:venue?',

  Games: '/games',
  GamesAttendance: '/games/attendance',
  GamesAmounts: '/games/amounts',
  Game: '/games/:game?',
  GameAttendance: '/games/:game/attendance',

  Themes: '/themes',
  Theme: '/themes/:theme?',

  Registrations: '/registrations',
  Registration: '/registrations/:registration?',

  Mailings: '/mailings',
  Mailing: '/mailings/:mailing?',
})

export var RoutePathnameParams = /** @type {const} */ ({
  Users: [],
  User: [':user?'],

  Roles: [],
  Role: [':role?'],

  Checkins: [],
  Checkin: [':checkin?'],

  Countries: [],
  Country: [':country?'],

  Currencies: [],
  Currency: [':currency?'],

  Cities: [],
  City: [':city?'],

  Venues: [],
  Venue: [':venue?'],

  Games: [],
  GamesAttendance: [],
  GamesAmounts: [],
  Game: [':game?'],
  GameAttendance: [],

  Themes: [],
  Theme: [':theme?'],

  Registrations: [],
  Registration: [':registration?'],

  Mailings: [],
  Mailing: [':mailing?'],
})

export var RouteSearchParams = /** @type {const} */ ({
  Users: [],
  User: [],

  Roles: [],
  Role: [],

  Checkins: [],
  Checkin: [],

  Countries: [],
  Country: [],

  Currencies: [],
  Currency: [],

  Cities: [],
  City: [],

  Venues: [],
  Venue: [],

  Games: ['city', 'status'],
  GamesAttendance: [],
  GamesAmounts: [],
  Game: ['city'],
  GameAttendance: [],

  Themes: [],
  Theme: [],

  Registrations: ['game', 'city'],
  Registration: [],

  Mailings: [],
  Mailing: [],
})
