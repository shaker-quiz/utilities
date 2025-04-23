import { Domains } from './domains.js'
import { Procedures } from './procedures.js'

export var Backends = /** @type {const} */ ({
  Backend: 'Backend',
  Games: 'Games',
  Locations: 'Locations',
  Users: 'Users',
  Integrations: 'Integrations',
})

export var BackendFeatures = {
  [Backends.Backend]: [
    Domains.City,
    Domains.Game,
    Domains.Registration,
    Domains.Theme,
    Domains.User,
    Domains.Venue,
    Procedures.Checkin,
  ],

  [Backends.Games]: [
    Domains.Theme,
    Domains.Game,
    Domains.Registration,
  ],

  [Backends.Locations]: [
    Domains.City,
    Domains.Venue,
  ],

  [Backends.Users]: [
    Domains.User,
    Procedures.Checkin,
  ],

  [Backends.Integrations]: [
    Domains.Mailing,
    Procedures.Redirect,
  ],
}
