import { Domains } from './domains.js'
import { Networks } from './networks.js'
import { Procedures } from './procedures.js'

export var Frontends = /** @type {const} */ ({
  Admin: 'Admin',
  Landing: 'Landing',
  MiniApp: 'MiniApp',
})

export var FrontendFeatures = {
  [Frontends.Admin]: [
    Domains.City,
    Domains.Game,
    Domains.Registration,
    Domains.Theme,
    Domains.User,
    Domains.Venue,
    Procedures.Checkin,
  ],

  [Frontends.Landing]: [
    Domains.Game,
    Domains.Registration,
  ],

  [Frontends.MiniApp]: [
    Domains.Game,
    Domains.Registration,
  ],
}

export var FrontendNetworkOrigins = {
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
}
