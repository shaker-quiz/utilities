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
    Domains.User,
    Domains.Role,
    Domains.City,
    Domains.Venue,
    Domains.Theme,
    Domains.Game,
    Domains.Registration,
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
    Domains.Role,
    Procedures.Checkin,
  ],

  [Backends.Integrations]: [
    Domains.Mailing,
    Procedures.Redirect,
  ],
}
