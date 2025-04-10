import { Backends } from './backends.js'
import { Frontends } from './frontends.js'
import { Icons } from './icons.js'
import { Kinds } from './kinds.js'
import { Methods } from './methods.js'
import { Networks } from './networks.js'
import { Requirements } from './requirements.js'

export var Procedures = /** @type {const} */ ({
  Checkin: 'Checkin',
})

export var ProcedureIcons = {
  [Procedures.Checkin]: Icons['arrow-right-end-on-rectangle'],
}

export var ProcedureKindPathnames = /** @type {const} */ ({
  [Procedures.Checkin]: {
    [Kinds.Unit]: '/checkin',
    [Kinds.Set]: '/checkins',
  },
})

export var ProcedureServiceDefaults = {
  [Procedures.Checkin]: Backends.Users,
}

export var ProcedureServiceNetworkOrigins = {
  [Procedures.Checkin]: {
    [Backends.Backend]: {
      [Networks.Docker]: '',
      [Networks.Public]: '',
    },

    [Backends.Games]: {
      [Networks.Docker]: '',
      [Networks.Public]: '',
    },

    [Backends.Locations]: {
      [Networks.Docker]: '',
      [Networks.Public]: '',
    },

    [Backends.Users]: {
      [Networks.Docker]: '',
      [Networks.Public]: '',
    },

    [Frontends.Admin]: {
      [Networks.Docker]: '',
      [Networks.Public]: '',
    },

    [Frontends.Landing]: {
      [Networks.Docker]: '',
      [Networks.Public]: '',
    },

    [Frontends.MiniApp]: {
      [Networks.Docker]: '',
      [Networks.Public]: '',
    },
  },
}

export var ProcedureMethodRequirements = {
  [Procedures.Checkin]: {
    [Methods.DELETE]: new Set([]),
    [Methods.GET]: new Set([]),
    [Methods.OPTIONS]: new Set([]),
    [Methods.PATCH]: new Set([]),
    [Methods.POST]: new Set([Requirements.Body]),
    [Methods.PUT]: new Set([]),
  },
}
