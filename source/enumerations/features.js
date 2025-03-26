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
  Exception: 'Exception',
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
  [Services.Admin]: [
    Features.Checkin,
    Features.Cities,
    Features.City,
    Features.Countries,
    Features.Country,
    Features.Exception,
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
    Features.Exception,
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

  [Services.MiniApp]: [
    Features.Exception,
    Features.Game,
    Features.Games,
    Features.Home,
    Features.Registration,
  ],

  [Services.Users]: [
    Features.Checkin,
    Features.Home,
    Features.User,
    Features.Users,
  ],
}

export var FeatureKinds = {
  [Features.Checkin]: Kinds.Item,
  [Features.Cities]: Kinds.List,
  [Features.City]: Kinds.Item,
  [Features.Countries]: Kinds.List,
  [Features.Country]: Kinds.Item,
  [Features.Exception]: Kinds.Item,
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
  [Features.Exception]: '/exception',
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
  [Features.Exception]: {
    [RequestMethods.DELETE]: new Set([]),
    [RequestMethods.GET]: new Set([]),
    [RequestMethods.OPTIONS]: new Set([]),
    [RequestMethods.PATCH]: new Set([]),
    [RequestMethods.POST]: new Set([]),
    [RequestMethods.PUT]: new Set([]),
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
 * @satisfies {Map<Service, Map<Network, string>>}
 */
export var ServiceNetworkOrigins = new Map([
  [
    Services.Admin,
    new Map([
      [Networks.Docker, ''],
      [Networks.Public, ''],
    ]),
  ],
  [
    Services.Games,
    new Map([
      [Networks.Docker, ''],
      [Networks.Public, ''],
    ]),
  ],
  [
    Services.Landing,
    new Map([
      [Networks.Docker, ''],
      [Networks.Public, ''],
    ]),
  ],
  [
    Services.Locations,
    new Map([
      [Networks.Docker, ''],
      [Networks.Public, ''],
    ]),
  ],
  [
    Services.MiniApp,
    new Map([
      [Networks.Docker, ''],
      [Networks.Public, ''],
    ]),
  ],
  [
    Services.Users,
    new Map([
      [Networks.Docker, ''],
      [Networks.Public, ''],
    ]),
  ],
])

/**
 * @type {Map<Service, Map<Feature, Map<Network, Nullable<(options?: import('@yurkimus/url').URLOptions) => URL>>>>}
 */
export var ServiceFeatureNetworkURLs = new Map([
  [
    Services.Admin,
    new Map([
      [
        Features.Checkin,
        new Map([
          [Networks.Docker, null],
          [Networks.Public, null],
        ]),
      ],
      [
        Features.Cities,
        new Map([
          [Networks.Docker, null],
          [Networks.Public, null],
        ]),
      ],
      [
        Features.City,
        new Map([
          [Networks.Docker, null],
          [Networks.Public, null],
        ]),
      ],
      [
        Features.Countries,
        new Map([
          [Networks.Docker, null],
          [Networks.Public, null],
        ]),
      ],
      [
        Features.Country,
        new Map([
          [Networks.Docker, null],
          [Networks.Public, null],
        ]),
      ],
      [
        Features.Exception,
        new Map([
          [Networks.Docker, null],
          [Networks.Public, null],
        ]),
      ],
      [
        Features.Game,
        new Map([
          [Networks.Docker, null],
          [Networks.Public, null],
        ]),
      ],
      [
        Features.Games,
        new Map([
          [Networks.Docker, null],
          [Networks.Public, null],
        ]),
      ],
      [
        Features.Home,
        new Map([
          [Networks.Docker, null],
          [Networks.Public, null],
        ]),
      ],
      [
        Features.Region,
        new Map([
          [Networks.Docker, null],
          [Networks.Public, null],
        ]),
      ],
      [
        Features.Regions,
        new Map([
          [Networks.Docker, null],
          [Networks.Public, null],
        ]),
      ],
      [
        Features.Registration,
        new Map([
          [Networks.Docker, null],
          [Networks.Public, null],
        ]),
      ],
      [
        Features.Registrations,
        new Map([
          [Networks.Docker, null],
          [Networks.Public, null],
        ]),
      ],
      [
        Features.Theme,
        new Map([
          [Networks.Docker, null],
          [Networks.Public, null],
        ]),
      ],
      [
        Features.Themes,
        new Map([
          [Networks.Docker, null],
          [Networks.Public, null],
        ]),
      ],
      [
        Features.User,
        new Map([
          [Networks.Docker, null],
          [Networks.Public, null],
        ]),
      ],
      [
        Features.Users,
        new Map([
          [Networks.Docker, null],
          [Networks.Public, null],
        ]),
      ],
      [
        Features.Venue,
        new Map([
          [Networks.Docker, null],
          [Networks.Public, null],
        ]),
      ],
      [
        Features.Venues,
        new Map([
          [Networks.Docker, null],
          [Networks.Public, null],
        ]),
      ],
    ]),
  ],

  [
    Services.Games,
    new Map([
      [
        Features.Game,
        new Map([
          [Networks.Docker, null],
          [Networks.Public, null],
        ]),
      ],
      [
        Features.Games,
        new Map([
          [Networks.Docker, null],
          [Networks.Public, null],
        ]),
      ],
      [
        Features.Home,
        new Map([
          [Networks.Docker, null],
          [Networks.Public, null],
        ]),
      ],
      [
        Features.Registration,
        new Map([
          [Networks.Docker, null],
          [Networks.Public, null],
        ]),
      ],
      [
        Features.Registrations,
        new Map([
          [Networks.Docker, null],
          [Networks.Public, null],
        ]),
      ],
      [
        Features.Theme,
        new Map([
          [Networks.Docker, null],
          [Networks.Public, null],
        ]),
      ],
      [
        Features.Themes,
        new Map([
          [Networks.Docker, null],
          [Networks.Public, null],
        ]),
      ],
    ]),
  ],

  [
    Services.Landing,
    new Map([
      [
        Features.Exception,
        new Map([
          [Networks.Docker, null],
          [Networks.Public, null],
        ]),
      ],
      [
        Features.Game,
        new Map([
          [Networks.Docker, ''],
          [Networks.Public, ''],
        ]),
      ],
      [
        Features.Games,
        new Map([
          [Networks.Docker, ''],
          [Networks.Public, ''],
        ]),
      ],
      [
        Features.Home,
        new Map([
          [Networks.Docker, ''],
          [Networks.Public, ''],
        ]),
      ],
      [
        Features.Registration,
        new Map([
          [Networks.Docker, ''],
          [Networks.Public, ''],
        ]),
      ],
    ]),
  ],

  [
    Services.Locations,
    new Map([
      [
        Features.Cities,
        new Map([
          [Networks.Docker, ''],
          [Networks.Public, ''],
        ]),
      ],
      [
        Features.City,
        new Map([
          [Networks.Docker, ''],
          [Networks.Public, ''],
        ]),
      ],
      [
        Features.Countries,
        new Map([
          [Networks.Docker, ''],
          [Networks.Public, ''],
        ]),
      ],
      [
        Features.Country,
        new Map([
          [Networks.Docker, ''],
          [Networks.Public, ''],
        ]),
      ],
      [
        Features.Home,
        new Map([
          [Networks.Docker, ''],
          [Networks.Public, ''],
        ]),
      ],
      [
        Features.Region,
        new Map([
          [Networks.Docker, ''],
          [Networks.Public, ''],
        ]),
      ],
      [
        Features.Regions,
        new Map([
          [Networks.Docker, ''],
          [Networks.Public, ''],
        ]),
      ],
      [
        Features.Venue,
        new Map([
          [Networks.Docker, ''],
          [Networks.Public, ''],
        ]),
      ],
      [
        Features.Venues,
        new Map([
          [Networks.Docker, ''],
          [Networks.Public, ''],
        ]),
      ],
    ]),
  ],

  [
    Services.MiniApp,
    new Map([
      [
        Features.Exception,
        new Map([
          [Networks.Docker, null],
          [Networks.Public, null],
        ]),
      ],
      [
        Features.Game,
        new Map([
          [Networks.Docker, ''],
          [Networks.Public, ''],
        ]),
      ],
      [
        Features.Games,
        new Map([
          [Networks.Docker, ''],
          [Networks.Public, ''],
        ]),
      ],
      [
        Features.Home,
        new Map([
          [Networks.Docker, ''],
          [Networks.Public, ''],
        ]),
      ],
      [
        Features.Registration,
        new Map([
          [Networks.Docker, ''],
          [Networks.Public, ''],
        ]),
      ],
    ]),
  ],

  [
    Services.Users,
    new Map([
      [
        Features.Checkin,
        new Map([
          [Networks.Docker, ''],
          [Networks.Public, ''],
        ]),
      ],
      [
        Features.Home,
        new Map([
          [Networks.Docker, null],
          [Networks.Public, null],
        ]),
      ],
      [
        Features.User,
        new Map([
          [Networks.Docker, ''],
          [Networks.Public, ''],
        ]),
      ],
      [
        Features.Users,
        new Map([
          [Networks.Docker, ''],
          [Networks.Public, ''],
        ]),
      ],
    ]),
  ],
])
