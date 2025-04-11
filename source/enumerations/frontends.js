import { Domains } from './domains.js'
import { Networks } from './networks.js'
import { Pages } from './pages.js'
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
    Pages['404'],
    Pages.Exception,
    Pages.Home,
    Procedures.Checkin,
  ],

  [Frontends.Landing]: [
    Domains.Game,
    Domains.Registration,
    Pages['404'],
    Pages.Exception,
    Pages.Home,
  ],

  [Frontends.MiniApp]: [
    Domains.Game,
    Domains.Registration,
    Pages['404'],
    Pages.Exception,
    Pages.Home,
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
