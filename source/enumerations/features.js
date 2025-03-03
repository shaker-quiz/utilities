import { Kinds } from './kinds.js'
import { Networks } from './networks.js'

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

export var FeatureNetworkOrigins = /** @type {const} */ ({
  [Features.Checkin]: {
    [Networks.Private]: 'http://users/',
    [Networks.Public]: 'https://users.backend.shakerquiz.ru/',
  },
  [Features.Cities]: {
    [Networks.Private]: 'http://locations/',
    [Networks.Public]: 'https://locations.backend.shakerquiz.ru/',
  },
  [Features.City]: {
    [Networks.Private]: 'http://locations/',
    [Networks.Public]: 'https://locations.backend.shakerquiz.ru/',
  },
  [Features.Game]: {
    [Networks.Private]: 'http://games/',
    [Networks.Public]: 'https://games.backend.shakerquiz.ru/',
  },
  [Features.Games]: {
    [Networks.Private]: 'http://games/',
    [Networks.Public]: 'https://games.backend.shakerquiz.ru/',
  },
  [Features.Location]: {
    [Networks.Private]: 'http://locations/',
    [Networks.Public]: 'https://locations.backend.shakerquiz.ru/',
  },
  [Features.Locations]: {
    [Networks.Private]: 'http://locations/',
    [Networks.Public]: 'https://locations.backend.shakerquiz.ru/',
  },
  [Features.Registration]: {
    [Networks.Private]: 'http://games/',
    [Networks.Public]: 'https://games.backend.shakerquiz.ru/',
  },
  [Features.Registrations]: {
    [Networks.Private]: 'http://games/',
    [Networks.Public]: 'https://games.backend.shakerquiz.ru/',
  },
  [Features.Theme]: {
    [Networks.Private]: 'http://games/',
    [Networks.Public]: 'https://games.backend.shakerquiz.ru/',
  },
  [Features.Themes]: {
    [Networks.Private]: 'http://games/',
    [Networks.Public]: 'https://games.backend.shakerquiz.ru/',
  },
  [Features.User]: {
    [Networks.Private]: 'http://users/',
    [Networks.Public]: 'https://users.backend.shakerquiz.ru/',
  },
  [Features.Users]: {
    [Networks.Private]: 'http://users/',
    [Networks.Public]: 'https://users.backend.shakerquiz.ru/',
  },
})
