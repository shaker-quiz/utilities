import { Kinds } from './kinds.js'

export let Features = /** @type {const} */ ({
  Checkin: 'Checkin',

  User: 'User',
  Users: 'Users',

  Theme: 'Theme',
  Themes: 'Themes',

  Game: 'Game',
  Games: 'Games',

  Registration: 'Registration',
  Registrations: 'Registrations',

  City: 'City',
  Cities: 'Cities',

  Location: 'Location',
  Locations: 'Locations',
})

export let FeatureKinds = {
  [Features.Checkin]: Kinds.Item,

  [Features.User]: Kinds.Item,
  [Features.Users]: Kinds.List,

  [Features.Theme]: Kinds.Item,
  [Features.Themes]: Kinds.List,

  [Features.Game]: Kinds.Item,
  [Features.Games]: Kinds.List,

  [Features.Registration]: Kinds.Item,
  [Features.Registrations]: Kinds.List,

  [Features.City]: Kinds.Item,
  [Features.Cities]: Kinds.List,

  [Features.Location]: Kinds.Item,
  [Features.Locations]: Kinds.List,
}

export let FeatureUrls = new Map()
