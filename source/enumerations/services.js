import { Features } from './features.js'

export var Services = /** @type {const} */ ({
  Games: 'Games',
  Locations: 'Locations',
  Users: 'Users',
})

export var ServiceFeatures = {
  [Services.Games]: [
    Features.Game,
    Features.Games,
    Features.Theme,
    Features.Themes,
    Features.Registration,
    Features.Registrations,
  ],
  [Services.Locations]: [
    Features.Cities,
    Features.City,
    Features.Location,
    Features.Locations,
  ],
  [Services.Users]: [
    Features.Checkin,
    Features.User,
    Features.Users,
  ],
}
