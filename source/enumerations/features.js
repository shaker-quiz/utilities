import { Kinds } from './kinds.js'
import { Methods } from './methods.js'
import { Networks } from './networks.js'
import { Requirements } from './requirements.js'
import { Services } from './services.js'

export var Features = /** @type {const} */ ({
  Checkin: 'Checkin',
  Cities: 'Cities',
  City: 'City',
  Game: 'Game',
  Games: 'Games',
  Location: 'Location',
  Locations: 'Locations',
  Registration: 'Registration',
  Registrations: 'Registrations',
  Theme: 'Theme',
  Themes: 'Themes',
  User: 'User',
  Users: 'Users',
})

export var FeatureServices = {
  [Features.Game]: Services.Games,
  [Features.Games]: Services.Games,
  [Features.Theme]: Services.Games,
  [Features.Themes]: Services.Games,
  [Features.Registration]: Services.Games,
  [Features.Registrations]: Services.Games,
  [Features.Cities]: Services.Locations,
  [Features.City]: Services.Locations,
  [Features.Location]: Services.Locations,
  [Features.Locations]: Services.Locations,
  [Features.Checkin]: Services.Users,
  [Features.User]: Services.Users,
  [Features.Users]: Services.Users,
}

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

export var FeatureKinds = {
  [Features.Checkin]: Kinds.Item,
  [Features.Cities]: Kinds.List,
  [Features.City]: Kinds.Item,
  [Features.Game]: Kinds.Item,
  [Features.Games]: Kinds.List,
  [Features.Location]: Kinds.Item,
  [Features.Locations]: Kinds.List,
  [Features.Registration]: Kinds.Item,
  [Features.Registrations]: Kinds.List,
  [Features.Theme]: Kinds.Item,
  [Features.Themes]: Kinds.List,
  [Features.User]: Kinds.Item,
  [Features.Users]: Kinds.List,
}

export var FeaturePathnames = /** @type {const} */ ({
  [Features.Checkin]: '/checkin',
  [Features.Cities]: '/cities',
  [Features.City]: '/city/:city?',
  [Features.Game]: '/game/:game?',
  [Features.Games]: '/games',
  [Features.Location]: '/location/:location?',
  [Features.Locations]: '/locations',
  [Features.Registration]: '/registration/:registration?',
  [Features.Registrations]: '/registrations',
  [Features.Theme]: '/theme/:theme?',
  [Features.Themes]: '/themes',
  [Features.User]: '/user/:user?',
  [Features.Users]: '/users',
})

export var FeaturePatterns = {
  [Features.Checkin]: new URLPattern({
    pathname: FeaturePathnames[Features.Checkin],
  }),
  [Features.Cities]: new URLPattern({
    pathname: FeaturePathnames[Features.Cities],
  }),
  [Features.City]: new URLPattern({
    pathname: FeaturePathnames[Features.City],
  }),
  [Features.Game]: new URLPattern({
    pathname: FeaturePathnames[Features.Game],
  }),
  [Features.Games]: new URLPattern({
    pathname: FeaturePathnames[Features.Games],
  }),
  [Features.Location]: new URLPattern({
    pathname: FeaturePathnames[Features.Location],
  }),
  [Features.Locations]: new URLPattern({
    pathname: FeaturePathnames[Features.Locations],
  }),
  [Features.Registration]: new URLPattern({
    pathname: FeaturePathnames[Features.Registration],
  }),
  [Features.Registrations]: new URLPattern({
    pathname: FeaturePathnames[Features.Registrations],
  }),
  [Features.Theme]: new URLPattern({
    pathname: FeaturePathnames[Features.Theme],
  }),
  [Features.Themes]: new URLPattern({
    pathname: FeaturePathnames[Features.Themes],
  }),
  [Features.User]: new URLPattern({
    pathname: FeaturePathnames[Features.User],
  }),
  [Features.Users]: new URLPattern({
    pathname: FeaturePathnames[Features.Users],
  }),
}

export var FeatureMethodRequirements = {
  [Features.Checkin]: {
    [Methods.DELETE]: new Set([]),
    [Methods.GET]: new Set([]),
    [Methods.OPTIONS]: new Set([]),
    [Methods.PATCH]: new Set([]),
    [Methods.POST]: new Set([Requirements.Body]),
    [Methods.PUT]: new Set([]),
  },
  [Features.Cities]: {
    [Methods.DELETE]: new Set([Requirements.Checkin]),
    [Methods.GET]: new Set([Requirements.Checkin]),
    [Methods.OPTIONS]: new Set([]),
    [Methods.PATCH]: new Set([Requirements.Checkin, Requirements.Body]),
    [Methods.POST]: new Set([Requirements.Checkin, Requirements.Body]),
    [Methods.PUT]: new Set([Requirements.Checkin, Requirements.Body]),
  },
  [Features.City]: {
    [Methods.DELETE]: new Set([Requirements.Checkin]),
    [Methods.GET]: new Set([Requirements.Checkin]),
    [Methods.OPTIONS]: new Set([]),
    [Methods.PATCH]: new Set([Requirements.Checkin, Requirements.Body]),
    [Methods.POST]: new Set([Requirements.Checkin, Requirements.Body]),
    [Methods.PUT]: new Set([Requirements.Checkin, Requirements.Body]),
  },
  [Features.Game]: {
    [Methods.DELETE]: new Set([Requirements.Checkin]),
    [Methods.GET]: new Set([Requirements.Checkin]),
    [Methods.OPTIONS]: new Set([]),
    [Methods.PATCH]: new Set([Requirements.Checkin, Requirements.Body]),
    [Methods.POST]: new Set([Requirements.Checkin, Requirements.Body]),
    [Methods.PUT]: new Set([Requirements.Checkin, Requirements.Body]),
  },
  [Features.Games]: {
    [Methods.DELETE]: new Set([Requirements.Checkin]),
    [Methods.GET]: new Set([Requirements.Checkin]),
    [Methods.OPTIONS]: new Set([]),
    [Methods.PATCH]: new Set([Requirements.Checkin, Requirements.Body]),
    [Methods.POST]: new Set([Requirements.Checkin, Requirements.Body]),
    [Methods.PUT]: new Set([Requirements.Checkin, Requirements.Body]),
  },
  [Features.Location]: {
    [Methods.DELETE]: new Set([Requirements.Checkin]),
    [Methods.GET]: new Set([Requirements.Checkin]),
    [Methods.OPTIONS]: new Set([]),
    [Methods.PATCH]: new Set([Requirements.Checkin, Requirements.Body]),
    [Methods.POST]: new Set([Requirements.Checkin, Requirements.Body]),
    [Methods.PUT]: new Set([Requirements.Checkin, Requirements.Body]),
  },
  [Features.Locations]: {
    [Methods.DELETE]: new Set([Requirements.Checkin]),
    [Methods.GET]: new Set([Requirements.Checkin]),
    [Methods.OPTIONS]: new Set([]),
    [Methods.PATCH]: new Set([Requirements.Checkin, Requirements.Body]),
    [Methods.POST]: new Set([Requirements.Checkin, Requirements.Body]),
    [Methods.PUT]: new Set([Requirements.Checkin, Requirements.Body]),
  },
  [Features.Registration]: {
    [Methods.DELETE]: new Set([Requirements.Checkin]),
    [Methods.GET]: new Set([Requirements.Checkin]),
    [Methods.OPTIONS]: new Set([]),
    [Methods.PATCH]: new Set([Requirements.Checkin, Requirements.Body]),
    [Methods.POST]: new Set([Requirements.Checkin, Requirements.Body]),
    [Methods.PUT]: new Set([Requirements.Checkin, Requirements.Body]),
  },
  [Features.Registrations]: {
    [Methods.DELETE]: new Set([Requirements.Checkin]),
    [Methods.GET]: new Set([Requirements.Checkin]),
    [Methods.OPTIONS]: new Set([]),
    [Methods.PATCH]: new Set([Requirements.Checkin, Requirements.Body]),
    [Methods.POST]: new Set([Requirements.Checkin, Requirements.Body]),
    [Methods.PUT]: new Set([Requirements.Checkin, Requirements.Body]),
  },
  [Features.Theme]: {
    [Methods.DELETE]: new Set([Requirements.Checkin]),
    [Methods.GET]: new Set([Requirements.Checkin]),
    [Methods.OPTIONS]: new Set([]),
    [Methods.PATCH]: new Set([Requirements.Checkin, Requirements.Body]),
    [Methods.POST]: new Set([Requirements.Checkin, Requirements.Body]),
    [Methods.PUT]: new Set([Requirements.Checkin, Requirements.Body]),
  },
  [Features.Themes]: {
    [Methods.DELETE]: new Set([Requirements.Checkin]),
    [Methods.GET]: new Set([Requirements.Checkin]),
    [Methods.OPTIONS]: new Set([]),
    [Methods.PATCH]: new Set([Requirements.Checkin, Requirements.Body]),
    [Methods.POST]: new Set([Requirements.Checkin, Requirements.Body]),
    [Methods.PUT]: new Set([Requirements.Checkin, Requirements.Body]),
  },
  [Features.User]: {
    [Methods.DELETE]: new Set([Requirements.Checkin]),
    [Methods.GET]: new Set([Requirements.Checkin]),
    [Methods.OPTIONS]: new Set([]),
    [Methods.PATCH]: new Set([Requirements.Checkin, Requirements.Body]),
    [Methods.POST]: new Set([Requirements.Checkin, Requirements.Body]),
    [Methods.PUT]: new Set([Requirements.Checkin, Requirements.Body]),
  },
  [Features.Users]: {
    [Methods.DELETE]: new Set([Requirements.Checkin]),
    [Methods.GET]: new Set([Requirements.Checkin]),
    [Methods.OPTIONS]: new Set([]),
    [Methods.PATCH]: new Set([Requirements.Checkin, Requirements.Body]),
    [Methods.POST]: new Set([Requirements.Checkin, Requirements.Body]),
    [Methods.PUT]: new Set([Requirements.Checkin, Requirements.Body]),
  },
}

export var FeatureNetworkOrigins = new Map([
  [
    Features.Checkin,
    new Map([
      [Networks.Docker, ''],
      [Networks.Local, ''],
      [Networks.Public, ''],
    ]),
  ],
  [
    Features.Cities,
    new Map([
      [Networks.Docker, ''],
      [Networks.Local, ''],
      [Networks.Public, ''],
    ]),
  ],
  [
    Features.City,
    new Map([
      [Networks.Docker, ''],
      [Networks.Local, ''],
      [Networks.Public, ''],
    ]),
  ],
  [
    Features.Game,
    new Map([
      [Networks.Docker, ''],
      [Networks.Local, ''],
      [Networks.Public, ''],
    ]),
  ],
  [
    Features.Games,
    new Map([
      [Networks.Docker, ''],
      [Networks.Local, ''],
      [Networks.Public, ''],
    ]),
  ],
  [
    Features.Location,
    new Map([
      [Networks.Docker, ''],
      [Networks.Local, ''],
      [Networks.Public, ''],
    ]),
  ],
  [
    Features.Locations,
    new Map([
      [Networks.Docker, ''],
      [Networks.Local, ''],
      [Networks.Public, ''],
    ]),
  ],
  [
    Features.Registration,
    new Map([
      [Networks.Docker, ''],
      [Networks.Local, ''],
      [Networks.Public, ''],
    ]),
  ],
  [
    Features.Registrations,
    new Map([
      [Networks.Docker, ''],
      [Networks.Local, ''],
      [Networks.Public, ''],
    ]),
  ],
  [
    Features.Theme,
    new Map([
      [Networks.Docker, ''],
      [Networks.Local, ''],
      [Networks.Public, ''],
    ]),
  ],
  [
    Features.Themes,
    new Map([
      [Networks.Docker, ''],
      [Networks.Local, ''],
      [Networks.Public, ''],
    ]),
  ],
  [
    Features.User,
    new Map([
      [Networks.Docker, ''],
      [Networks.Local, ''],
      [Networks.Public, ''],
    ]),
  ],
  [
    Features.Users,
    new Map([
      [Networks.Docker, ''],
      [Networks.Local, ''],
      [Networks.Public, ''],
    ]),
  ],
])
