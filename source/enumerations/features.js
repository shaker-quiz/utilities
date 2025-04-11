import { Backends } from './backends.js'
import { DomainKindPathnames, Domains } from './domains.js'
import { Frontends } from './frontends.js'
import { Networks } from './networks.js'
import { ProcedureKindPathnames, Procedures } from './procedures.js'

export var Features = {
  ...Domains,
  ...Procedures,
}

/**
 * @type {Record<Feature, Record<Kind, string>>}
 */
export var FeatureKindPathnames = {
  ...DomainKindPathnames,
  ...ProcedureKindPathnames,
}

/**
 * @type {Record<Domain, Service>}
 */
export var DomainServiceDefaults = {
  [Domains.City]: Backends.Locations,
  [Domains.Game]: Backends.Games,
  [Domains.Registration]: Backends.Games,
  [Domains.Theme]: Backends.Games,
  [Domains.User]: Backends.Users,
  [Domains.Venue]: Backends.Locations,
}

/**
 * @type {Record<Procedure, Service>}
 */
export var ProcedureServiceDefaults = {
  [Procedures.Checkin]: Backends.Users,
}

/**
 * @type {Record<Feature, Service>}
 */
export var FeatureServiceDefaults = {
  ...DomainServiceDefaults,
  ...ProcedureServiceDefaults,
}

/**
 * @type {Record<Domain, Record<Service, Record<Network, string>>>}
 */
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

/**
 * @type {Record<Procedure, Record<Service, Record<Network, string>>>}
 */
export var ProcedureServiceNetworkOrigins = {
  [Procedures.Checkin]: ({
    [Backends.Backend]: ({
      [Networks.Docker]: '',
      [Networks.Public]: '',
    }),

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
  }),
}

/**
 * @type {Record<Feature, Record<Service, Record<Network, string>>>}
 */
export var FeatureServiceNetworkOrigins = {
  ...DomainServiceNetworkOrigins,
  ...ProcedureServiceNetworkOrigins,
}
