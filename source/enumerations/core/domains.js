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
 * @type {Record<Domain, Record<Kind, string>>}
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

/**
 * @type {Record<Domain, Record<Method, Set<Requirement>>>}
 */
export var DomainMethodRequirements = {
  'User': {
    'DELETE': new Set(['Checkin']),
    'GET': new Set(['Checkin']),
    'OPTIONS': new Set([]),
    'PATCH': new Set(['Checkin', 'Body']),
    'POST': new Set(['Checkin', 'Body']),
    'PUT': new Set(['Checkin', 'Body']),
  },

  'Role': {
    'DELETE': new Set(['Checkin']),
    'GET': new Set(['Checkin']),
    'OPTIONS': new Set([]),
    'PATCH': new Set(['Checkin', 'Body']),
    'POST': new Set(['Checkin', 'Body']),
    'PUT': new Set(['Checkin', 'Body']),
  },

  'City': {
    'DELETE': new Set(['Checkin']),
    'GET': new Set(['Checkin']),
    'OPTIONS': new Set([]),
    'PATCH': new Set(['Checkin', 'Body']),
    'POST': new Set(['Checkin', 'Body']),
    'PUT': new Set(['Checkin', 'Body']),
  },

  'Venue': {
    'DELETE': new Set(['Checkin']),
    'GET': new Set(['Checkin']),
    'OPTIONS': new Set([]),
    'PATCH': new Set(['Checkin', 'Body']),
    'POST': new Set(['Checkin', 'Body']),
    'PUT': new Set(['Checkin', 'Body']),
  },

  'Theme': {
    'DELETE': new Set(['Checkin']),
    'GET': new Set(['Checkin']),
    'OPTIONS': new Set([]),
    'PATCH': new Set(['Checkin', 'Body']),
    'POST': new Set(['Checkin', 'Body']),
    'PUT': new Set(['Checkin', 'Body']),
  },

  'Game': {
    'DELETE': new Set(['Checkin']),
    'GET': new Set(['Checkin']),
    'OPTIONS': new Set([]),
    'PATCH': new Set(['Checkin', 'Body']),
    'POST': new Set(['Checkin', 'Body']),
    'PUT': new Set(['Checkin', 'Body']),
  },

  'Registration': {
    'DELETE': new Set(['Checkin']),
    'GET': new Set(['Checkin']),
    'OPTIONS': new Set([]),
    'PATCH': new Set(['Checkin', 'Body']),
    'POST': new Set(['Checkin', 'Body']),
    'PUT': new Set(['Checkin', 'Body']),
  },

  'Mailing': {
    'DELETE': new Set(['Checkin']),
    'GET': new Set(['Checkin']),
    'OPTIONS': new Set([]),
    'PATCH': new Set(['Checkin', 'Body']),
    'POST': new Set(['Checkin', 'Body']),
    'PUT': new Set(['Checkin', 'Body']),
  },
}
