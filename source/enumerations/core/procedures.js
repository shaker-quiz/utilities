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

/**
 * @type {Record<Procedure, Record<Method, Set<Requirement>>>}
 */
export var ProcedureMethodRequirements = {
  'Checkin': {
    'DELETE': new Set([]),
    'GET': new Set([]),
    'OPTIONS': new Set([]),
    'PATCH': new Set([]),
    'POST': new Set(['Body']),
    'PUT': new Set([]),
  },

  'Redirect': {
    'GET': new Set([]),
  },
}
