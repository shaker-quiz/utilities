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
 * @type {Record<Domains[number], Icon>}
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
 * @type {Record<Domains[number], Record<Kind, string>>}
 */
export var DomainKindPathname = {
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
}

export var Procedures = /** @type {const} */ ([
  'Checkin',
  'Redirect',
])

/**
 * @type {Record<Procedures[number], Icon>}
 */
export var ProcedureIcon = {
  'Checkin': 'arrow-right-end-on-rectangle',
  'Redirect': 'no-symbol',
}

/**
 * @type {Record<Procedures[number], Record<Kind, string>>}
 */
export var ProcedureKindPathname = {
  'Checkin': {
    'Unit': '/checkin',
    'Set': '/checkins',
  },

  'Redirect': {
    'Unit': '/redirect',
    'Set': '/redirects',
  },
}

export var Features = Domains.concat(Procedures)

/**
 * @type {Record<Features[number], Icon>}
 */
export var FeatureIcon = {
  ...DomainIcon,
  ...ProcedureIcon,
}

/**
 * @type {Record<Features[number], Record<Kind, string>>}
 */
export var FeatureKindPathname = {
  ...DomainKindPathname,
  ...ProcedureKindPathname,
}
