import { Backends } from './backends.js'
import { Frontends } from './frontends.js'
import { Icons } from './icons.js'
import { Kinds } from './kinds.js'
import { Methods } from './methods.js'
import { Networks } from './networks.js'
import { Requirements } from './requirements.js'

export var Domains = /** @type {const} */ ({
  City: 'City',
  Game: 'Game',
  Registration: 'Registration',
  Theme: 'Theme',
  User: 'User',
  Venue: 'Venue',
})

export var DomainIcons = {
  [Domains.City]: Icons['building-office'],
  [Domains.Game]: Icons['newspaper'],
  [Domains.Registration]: Icons['user-group'],
  [Domains.Theme]: Icons['document-text'],
  [Domains.User]: Icons['users'],
  [Domains.Venue]: Icons['map-pin'],
}

export var DomainKindPathnames = /** @type {const} */ ({
  [Domains.City]: {
    [Kinds.Unit]: '/cities/:city?',
    [Kinds.Set]: '/cities',
  },

  [Domains.Game]: {
    [Kinds.Unit]: '/games/:game?',
    [Kinds.Set]: '/games',
  },

  [Domains.Registration]: {
    [Kinds.Unit]: '/registrations/:registration?',
    [Kinds.Set]: '/registrations',
  },

  [Domains.Theme]: {
    [Kinds.Unit]: '/themes/:theme?',
    [Kinds.Set]: '/theme',
  },

  [Domains.User]: {
    [Kinds.Unit]: '/users/:user?',
    [Kinds.Set]: '/users',
  },

  [Domains.Venue]: {
    [Kinds.Unit]: '/venues/:venue?',
    [Kinds.Set]: '/venues',
  },
})

export var DomainServiceDefaults = {
  [Domains.City]: Backends.Locations,
  [Domains.Game]: Backends.Games,
  [Domains.Registration]: Backends.Games,
  [Domains.Theme]: Backends.Games,
  [Domains.User]: Backends.Users,
  [Domains.Venue]: Backends.Locations,
}

export var DomainServiceNetworkOrigins = {
  [Domains.City]: {
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

  [Domains.Game]: {
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

  [Domains.Registration]: {
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

  [Domains.Theme]: {
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

  [Domains.User]: {
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

  [Domains.Venue]: {
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

export var DomainMethodRequirements = {
  [Domains.City]: {
    [Methods.DELETE]: new Set([Requirements.Checkin]),
    [Methods.GET]: new Set([Requirements.Checkin]),
    [Methods.OPTIONS]: new Set([]),
    [Methods.PATCH]: new Set([Requirements.Checkin, Requirements.Body]),
    [Methods.POST]: new Set([Requirements.Checkin, Requirements.Body]),
    [Methods.PUT]: new Set([Requirements.Checkin, Requirements.Body]),
  },

  [Domains.Game]: {
    [Methods.DELETE]: new Set([Requirements.Checkin]),
    [Methods.GET]: new Set([Requirements.Checkin]),
    [Methods.OPTIONS]: new Set([]),
    [Methods.PATCH]: new Set([Requirements.Checkin, Requirements.Body]),
    [Methods.POST]: new Set([Requirements.Checkin, Requirements.Body]),
    [Methods.PUT]: new Set([Requirements.Checkin, Requirements.Body]),
  },

  [Domains.Registration]: {
    [Methods.DELETE]: new Set([Requirements.Checkin]),
    [Methods.GET]: new Set([Requirements.Checkin]),
    [Methods.OPTIONS]: new Set([]),
    [Methods.PATCH]: new Set([Requirements.Checkin, Requirements.Body]),
    [Methods.POST]: new Set([Requirements.Checkin, Requirements.Body]),
    [Methods.PUT]: new Set([Requirements.Checkin, Requirements.Body]),
  },

  [Domains.Theme]: {
    [Methods.DELETE]: new Set([Requirements.Checkin]),
    [Methods.GET]: new Set([Requirements.Checkin]),
    [Methods.OPTIONS]: new Set([]),
    [Methods.PATCH]: new Set([Requirements.Checkin, Requirements.Body]),
    [Methods.POST]: new Set([Requirements.Checkin, Requirements.Body]),
    [Methods.PUT]: new Set([Requirements.Checkin, Requirements.Body]),
  },

  [Domains.User]: {
    [Methods.DELETE]: new Set([Requirements.Checkin]),
    [Methods.GET]: new Set([Requirements.Checkin]),
    [Methods.OPTIONS]: new Set([]),
    [Methods.PATCH]: new Set([Requirements.Checkin, Requirements.Body]),
    [Methods.POST]: new Set([Requirements.Checkin, Requirements.Body]),
    [Methods.PUT]: new Set([Requirements.Checkin, Requirements.Body]),
  },

  [Domains.Venue]: {
    [Methods.DELETE]: new Set([Requirements.Checkin]),
    [Methods.GET]: new Set([Requirements.Checkin]),
    [Methods.OPTIONS]: new Set([]),
    [Methods.PATCH]: new Set([Requirements.Checkin, Requirements.Body]),
    [Methods.POST]: new Set([Requirements.Checkin, Requirements.Body]),
    [Methods.PUT]: new Set([Requirements.Checkin, Requirements.Body]),
  },
}
