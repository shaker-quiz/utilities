import { Icons } from './icons.js'
import { Kinds } from './kinds.js'
import { Methods } from './methods.js'
import { Requirements } from './requirements.js'

export var Procedures = /** @type {const} */ ({
  Checkin: 'Checkin',
  Mailing: 'Mailing',
})

/**
 * @type {Record<Procedure, Icon>}
 */
export var ProcedureIcons = {
  [Procedures.Checkin]: Icons['arrow-right-end-on-rectangle'],
  [Procedures.Mailing]: Icons['envelope'],
}

/**
 * @type {Record<Procedure, Record<Kind, string>>}
 */
export var ProcedureKindPathnames = {
  [Procedures.Checkin]: {
    [Kinds.Unit]: '/checkin',
    [Kinds.Set]: '/checkins',
  },

  [Procedures.Mailing]: {
    [Kinds.Unit]: '/mailing',
    [Kinds.Set]: '/mailings',
  },
}

/**
 * @type {Record<Procedure, Record<Method, Set<Requirement>>>}
 */
export var ProcedureMethodRequirements = {
  [Procedures.Checkin]: {
    [Methods.DELETE]: new Set([]),
    [Methods.GET]: new Set([]),
    [Methods.OPTIONS]: new Set([]),
    [Methods.PATCH]: new Set([]),
    [Methods.POST]: new Set([Requirements.Body]),
    [Methods.PUT]: new Set([]),
  },

  [Procedures.Mailing]: {
    [Methods.DELETE]: new Set([]),
    [Methods.GET]: new Set([]),
    [Methods.OPTIONS]: new Set([]),
    [Methods.PATCH]: new Set([]),
    [Methods.POST]: new Set([Requirements.Body]),
    [Methods.PUT]: new Set([Requirements.Body]),
  },
}
