import { Kinds } from './kinds.js'
import { Networks } from './networks.js'
import { RequestMethods } from './request-methods.js'
import { Requirements } from './requirements.js'
import { Services } from './services.js'

export var Features = /** @type {const} */ ({
  Checkin: 'Checkin',
  Cities: 'Cities',
  City: 'City',
  Countries: 'Countries',
  Country: 'Country',
  Game: 'Game',
  Games: 'Games',
  Home: 'Home',
  Region: 'Region',
  Regions: 'Regions',
  Registration: 'Registration',
  Registrations: 'Registrations',
  Theme: 'Theme',
  Themes: 'Themes',
  User: 'User',
  Users: 'Users',
  Venue: 'Venue',
  Venues: 'Venues',
})

export var ServiceFeatures = {
  [Services.Games]: [
    Features.Game,
    Features.Games,
    Features.Home,
    Features.Registration,
    Features.Registrations,
    Features.Theme,
    Features.Themes,
  ],
  [Services.Landing]: [
    Features.Game,
    Features.Games,
    Features.Home,
    Features.Registration,
  ],
  [Services.Locations]: [
    Features.Cities,
    Features.City,
    Features.Countries,
    Features.Country,
    Features.Home,
    Features.Region,
    Features.Regions,
    Features.Venue,
    Features.Venues,
  ],
  [Services.Studio]: [
    Features.Checkin,
    Features.Cities,
    Features.City,
    Features.Countries,
    Features.Country,
    Features.Game,
    Features.Games,
    Features.Home,
    Features.Region,
    Features.Regions,
    Features.Registration,
    Features.Registrations,
    Features.Theme,
    Features.Themes,
    Features.User,
    Features.Users,
    Features.Venue,
    Features.Venues,
  ],
  [Services.Users]: [
    Features.Checkin,
    Features.User,
    Features.Users,
  ],
  [Services.MiniApp]: [
    Features.Game,
    Features.Games,
    Features.Home,
    Features.Registration,
  ],
}

export var FeatureKinds = {
  [Features.Checkin]: Kinds.Item,
  [Features.Cities]: Kinds.List,
  [Features.City]: Kinds.Item,
  [Features.Countries]: Kinds.List,
  [Features.Country]: Kinds.Item,
  [Features.Game]: Kinds.Item,
  [Features.Games]: Kinds.List,
  [Features.Home]: Kinds.Item,
  [Features.Region]: Kinds.Item,
  [Features.Regions]: Kinds.List,
  [Features.Registration]: Kinds.Item,
  [Features.Registrations]: Kinds.List,
  [Features.Theme]: Kinds.Item,
  [Features.Themes]: Kinds.List,
  [Features.User]: Kinds.Item,
  [Features.Users]: Kinds.List,
  [Features.Venue]: Kinds.Item,
  [Features.Venues]: Kinds.List,
}

export var FeaturePathnames = /** @type {const} */ ({
  [Features.Checkin]: '/checkin',
  [Features.Cities]: '/cities',
  [Features.City]: `/city/:city?`,
  [Features.Countries]: '/countries',
  [Features.Country]: '/country/:country?',
  [Features.Game]: `/game/:game?`,
  [Features.Games]: '/games',
  [Features.Home]: '/',
  [Features.Region]: '/region/:region?',
  [Features.Regions]: '/regions',
  [Features.Registration]: `/registration/:registration?`,
  [Features.Registrations]: '/registrations',
  [Features.Theme]: `/theme/:theme?`,
  [Features.Themes]: '/themes',
  [Features.User]: `/user/:user?`,
  [Features.Users]: '/users',
  [Features.Venue]: `/venue/:venue?`,
  [Features.Venues]: '/venues',
})

/**
 * @satisfies {Record<Feature, Record<RequestMethod, Set<Requirement>>}
 */
export var FeatureMethodRequirements = {
  [Features.Checkin]: {
    [RequestMethods.DELETE]: new Set([]),
    [RequestMethods.GET]: new Set([]),
    [RequestMethods.OPTIONS]: new Set([]),
    [RequestMethods.PATCH]: new Set([]),
    [RequestMethods.POST]: new Set([Requirements.Body]),
    [RequestMethods.PUT]: new Set([]),
  },
  [Features.Cities]: {
    [RequestMethods.DELETE]: new Set([Requirements.Checkin]),
    [RequestMethods.GET]: new Set([Requirements.Checkin]),
    [RequestMethods.OPTIONS]: new Set([]),
    [RequestMethods.PATCH]: new Set([Requirements.Checkin, Requirements.Body]),
    [RequestMethods.POST]: new Set([Requirements.Checkin, Requirements.Body]),
    [RequestMethods.PUT]: new Set([Requirements.Checkin, Requirements.Body]),
  },
  [Features.City]: {
    [RequestMethods.DELETE]: new Set([Requirements.Checkin]),
    [RequestMethods.GET]: new Set([Requirements.Checkin]),
    [RequestMethods.OPTIONS]: new Set([]),
    [RequestMethods.PATCH]: new Set([Requirements.Checkin, Requirements.Body]),
    [RequestMethods.POST]: new Set([Requirements.Checkin, Requirements.Body]),
    [RequestMethods.PUT]: new Set([Requirements.Checkin, Requirements.Body]),
  },
  [Features.Countries]: {
    [RequestMethods.DELETE]: new Set([Requirements.Checkin]),
    [RequestMethods.GET]: new Set([Requirements.Checkin]),
    [RequestMethods.OPTIONS]: new Set([]),
    [RequestMethods.PATCH]: new Set([Requirements.Checkin, Requirements.Body]),
    [RequestMethods.POST]: new Set([Requirements.Checkin, Requirements.Body]),
    [RequestMethods.PUT]: new Set([Requirements.Checkin, Requirements.Body]),
  },
  [Features.Country]: {
    [RequestMethods.DELETE]: new Set([Requirements.Checkin]),
    [RequestMethods.GET]: new Set([Requirements.Checkin]),
    [RequestMethods.OPTIONS]: new Set([]),
    [RequestMethods.PATCH]: new Set([Requirements.Checkin, Requirements.Body]),
    [RequestMethods.POST]: new Set([Requirements.Checkin, Requirements.Body]),
    [RequestMethods.PUT]: new Set([Requirements.Checkin, Requirements.Body]),
  },
  [Features.Game]: {
    [RequestMethods.DELETE]: new Set([Requirements.Checkin]),
    [RequestMethods.GET]: new Set([Requirements.Checkin]),
    [RequestMethods.OPTIONS]: new Set([]),
    [RequestMethods.PATCH]: new Set([Requirements.Checkin, Requirements.Body]),
    [RequestMethods.POST]: new Set([Requirements.Checkin, Requirements.Body]),
    [RequestMethods.PUT]: new Set([Requirements.Checkin, Requirements.Body]),
  },
  [Features.Games]: {
    [RequestMethods.DELETE]: new Set([Requirements.Checkin]),
    [RequestMethods.GET]: new Set([Requirements.Checkin]),
    [RequestMethods.OPTIONS]: new Set([]),
    [RequestMethods.PATCH]: new Set([Requirements.Checkin, Requirements.Body]),
    [RequestMethods.POST]: new Set([Requirements.Checkin, Requirements.Body]),
    [RequestMethods.PUT]: new Set([Requirements.Checkin, Requirements.Body]),
  },
  [Features.Home]: {
    [RequestMethods.DELETE]: new Set([]),
    [RequestMethods.GET]: new Set([]),
    [RequestMethods.OPTIONS]: new Set([]),
    [RequestMethods.PATCH]: new Set([]),
    [RequestMethods.POST]: new Set([]),
    [RequestMethods.PUT]: new Set([]),
  },
  [Features.Region]: {
    [RequestMethods.DELETE]: new Set([Requirements.Checkin]),
    [RequestMethods.GET]: new Set([Requirements.Checkin]),
    [RequestMethods.OPTIONS]: new Set([]),
    [RequestMethods.PATCH]: new Set([Requirements.Checkin, Requirements.Body]),
    [RequestMethods.POST]: new Set([Requirements.Checkin, Requirements.Body]),
    [RequestMethods.PUT]: new Set([Requirements.Checkin, Requirements.Body]),
  },
  [Features.Regions]: {
    [RequestMethods.DELETE]: new Set([Requirements.Checkin]),
    [RequestMethods.GET]: new Set([Requirements.Checkin]),
    [RequestMethods.OPTIONS]: new Set([]),
    [RequestMethods.PATCH]: new Set([Requirements.Checkin, Requirements.Body]),
    [RequestMethods.POST]: new Set([Requirements.Checkin, Requirements.Body]),
    [RequestMethods.PUT]: new Set([Requirements.Checkin, Requirements.Body]),
  },
  [Features.Registration]: {
    [RequestMethods.DELETE]: new Set([Requirements.Checkin]),
    [RequestMethods.GET]: new Set([Requirements.Checkin]),
    [RequestMethods.OPTIONS]: new Set([]),
    [RequestMethods.PATCH]: new Set([Requirements.Checkin, Requirements.Body]),
    [RequestMethods.POST]: new Set([Requirements.Checkin, Requirements.Body]),
    [RequestMethods.PUT]: new Set([Requirements.Checkin, Requirements.Body]),
  },
  [Features.Registrations]: {
    [RequestMethods.DELETE]: new Set([Requirements.Checkin]),
    [RequestMethods.GET]: new Set([Requirements.Checkin]),
    [RequestMethods.OPTIONS]: new Set([]),
    [RequestMethods.PATCH]: new Set([Requirements.Checkin, Requirements.Body]),
    [RequestMethods.POST]: new Set([Requirements.Checkin, Requirements.Body]),
    [RequestMethods.PUT]: new Set([Requirements.Checkin, Requirements.Body]),
  },
  [Features.Theme]: {
    [RequestMethods.DELETE]: new Set([Requirements.Checkin]),
    [RequestMethods.GET]: new Set([Requirements.Checkin]),
    [RequestMethods.OPTIONS]: new Set([]),
    [RequestMethods.PATCH]: new Set([Requirements.Checkin, Requirements.Body]),
    [RequestMethods.POST]: new Set([Requirements.Checkin, Requirements.Body]),
    [RequestMethods.PUT]: new Set([Requirements.Checkin, Requirements.Body]),
  },
  [Features.Themes]: {
    [RequestMethods.DELETE]: new Set([Requirements.Checkin]),
    [RequestMethods.GET]: new Set([Requirements.Checkin]),
    [RequestMethods.OPTIONS]: new Set([]),
    [RequestMethods.PATCH]: new Set([Requirements.Checkin, Requirements.Body]),
    [RequestMethods.POST]: new Set([Requirements.Checkin, Requirements.Body]),
    [RequestMethods.PUT]: new Set([Requirements.Checkin, Requirements.Body]),
  },
  [Features.User]: {
    [RequestMethods.DELETE]: new Set([Requirements.Checkin]),
    [RequestMethods.GET]: new Set([Requirements.Checkin]),
    [RequestMethods.OPTIONS]: new Set([]),
    [RequestMethods.PATCH]: new Set([Requirements.Checkin, Requirements.Body]),
    [RequestMethods.POST]: new Set([Requirements.Checkin, Requirements.Body]),
    [RequestMethods.PUT]: new Set([Requirements.Checkin, Requirements.Body]),
  },
  [Features.Users]: {
    [RequestMethods.DELETE]: new Set([Requirements.Checkin]),
    [RequestMethods.GET]: new Set([Requirements.Checkin]),
    [RequestMethods.OPTIONS]: new Set([]),
    [RequestMethods.PATCH]: new Set([Requirements.Checkin, Requirements.Body]),
    [RequestMethods.POST]: new Set([Requirements.Checkin, Requirements.Body]),
    [RequestMethods.PUT]: new Set([Requirements.Checkin, Requirements.Body]),
  },
  [Features.Venue]: {
    [RequestMethods.DELETE]: new Set([Requirements.Checkin]),
    [RequestMethods.GET]: new Set([Requirements.Checkin]),
    [RequestMethods.OPTIONS]: new Set([]),
    [RequestMethods.PATCH]: new Set([Requirements.Checkin, Requirements.Body]),
    [RequestMethods.POST]: new Set([Requirements.Checkin, Requirements.Body]),
    [RequestMethods.PUT]: new Set([Requirements.Checkin, Requirements.Body]),
  },
  [Features.Venues]: {
    [RequestMethods.DELETE]: new Set([Requirements.Checkin]),
    [RequestMethods.GET]: new Set([Requirements.Checkin]),
    [RequestMethods.OPTIONS]: new Set([]),
    [RequestMethods.PATCH]: new Set([Requirements.Checkin, Requirements.Body]),
    [RequestMethods.POST]: new Set([Requirements.Checkin, Requirements.Body]),
    [RequestMethods.PUT]: new Set([Requirements.Checkin, Requirements.Body]),
  },
}

/**
 * @satisfies {Map<Feature, Map<Network, string>>}
 */
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
    Features.Countries,
    new Map([
      [Networks.Docker, ''],
      [Networks.Local, ''],
      [Networks.Public, ''],
    ]),
  ],
  [
    Features.Country,
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
    Features.Home,
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
  [
    Features.Venue,
    new Map([
      [Networks.Docker, ''],
      [Networks.Local, ''],
      [Networks.Public, ''],
    ]),
  ],
  [
    Features.Venues,
    new Map([
      [Networks.Docker, ''],
      [Networks.Local, ''],
      [Networks.Public, ''],
    ]),
  ],
])

/**
 * @type {Map<Feature, Map<Network, Nullable<(options?: import('@yurkimus/url').URLOptions) => URL>>>}
 */
export var FeatureNetworkUrls = new Map([
  [
    Features.Checkin,
    new Map([
      [Networks.Docker, null],
      [Networks.Local, null],
      [Networks.Public, null],
    ]),
  ],
  [
    Features.Cities,
    new Map([
      [Networks.Docker, null],
      [Networks.Local, null],
      [Networks.Public, null],
    ]),
  ],
  [
    Features.City,
    new Map([
      [Networks.Docker, null],
      [Networks.Local, null],
      [Networks.Public, null],
    ]),
  ],
  [
    Features.Countries,
    new Map([
      [Networks.Docker, null],
      [Networks.Local, null],
      [Networks.Public, null],
    ]),
  ],
  [
    Features.Country,
    new Map([
      [Networks.Docker, null],
      [Networks.Local, null],
      [Networks.Public, null],
    ]),
  ],
  [
    Features.Game,
    new Map([
      [Networks.Docker, null],
      [Networks.Local, null],
      [Networks.Public, null],
    ]),
  ],
  [
    Features.Games,
    new Map([
      [Networks.Docker, null],
      [Networks.Local, null],
      [Networks.Public, null],
    ]),
  ],
  [
    Features.Home,
    new Map([
      [Networks.Docker, null],
      [Networks.Local, null],
      [Networks.Public, null],
    ]),
  ],
  [
    Features.Registration,
    new Map([
      [Networks.Docker, null],
      [Networks.Local, null],
      [Networks.Public, null],
    ]),
  ],
  [
    Features.Registrations,
    new Map([
      [Networks.Docker, null],
      [Networks.Local, null],
      [Networks.Public, null],
    ]),
  ],
  [
    Features.Theme,
    new Map([
      [Networks.Docker, null],
      [Networks.Local, null],
      [Networks.Public, null],
    ]),
  ],
  [
    Features.Themes,
    new Map([
      [Networks.Docker, null],
      [Networks.Local, null],
      [Networks.Public, null],
    ]),
  ],
  [
    Features.User,
    new Map([
      [Networks.Docker, null],
      [Networks.Local, null],
      [Networks.Public, null],
    ]),
  ],
  [
    Features.Users,
    new Map([
      [Networks.Docker, null],
      [Networks.Local, null],
      [Networks.Public, null],
    ]),
  ],
  [
    Features.Venue,
    new Map([
      [Networks.Docker, null],
      [Networks.Local, null],
      [Networks.Public, null],
    ]),
  ],
  [
    Features.Venues,
    new Map([
      [Networks.Docker, null],
      [Networks.Local, null],
      [Networks.Public, null],
    ]),
  ],
])
