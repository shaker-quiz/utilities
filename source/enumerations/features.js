import { Services } from 'source/enumerations/services.js'
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

export let FeatureServices = {
  [Features.Checkin]: Services.Users,

  [Features.User]: Services.Users,
  [Features.Users]: Services.Users,

  [Features.Theme]: Services.Games,
  [Features.Themes]: Services.Games,

  [Features.Game]: Services.Games,
  [Features.Games]: Services.Games,

  [Features.Registration]: Services.Games,
  [Features.Registrations]: Services.Games,

  [Features.City]: Services.Locations,
  [Features.Cities]: Services.Locations,

  [Features.Location]: Services.Locations,
  [Features.Locations]: Services.Locations,
}

export let FeatureOrigins = new Map()
