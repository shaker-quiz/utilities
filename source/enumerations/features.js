import { Kinds } from 'source/enumerations/kinds.js'

export let Features = {
  Checkin: 'Checkin',

  City: 'City',
  Cities: 'Cities',

  CityPublic: 'CityPublic',
  CitiesPublic: 'CitiesPublic',

  Game: 'Game',
  Games: 'Games',

  GamePublic: 'GamePublic',
  GamesPublic: 'GamesPublic',

  Theme: 'Theme',
  Themes: 'Themes',

  User: 'User',
  Users: 'Users',
}

export let FeatureKinds = {
  [Features.Checkin]: Kinds.Item,

  [Features.City]: Kinds.Item,
  [Features.Cities]: Kinds.List,

  [Features.CityPublic]: Kinds.Item,
  [Features.CitiesPublic]: Kinds.List,

  [Features.Game]: Kinds.Item,
  [Features.Games]: Kinds.List,

  [Features.GamePublic]: Kinds.Item,
  [Features.GamesPublic]: Kinds.List,

  [Features.Theme]: Kinds.Item,
  [Features.Themes]: Kinds.List,

  [Features.User]: Kinds.Item,
  [Features.Users]: Kinds.List,
}

export let FeatureRequests = new Map()

export let FeatureUrls = new Map()
