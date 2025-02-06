import { URLOptions } from '@yurkimus/url'

import { Kinds } from './kinds'
import { Networks } from './networks'

// export let Features: {
//   Checkin: 'Checkin'

//   User: 'User'
//   Users: 'Users'

//   Theme: 'Theme'
//   Themes: 'Themes'

//   Game: 'Game'
//   Games: 'Games'

//   Registration: 'Registration'
//   Registrations: 'Registrations'

//   City: 'City'
//   Cities: 'Cities'

//   CityPublic: 'CityPublic'
//   CitiesPublic: 'CitiesPublic'

//   Location: 'Location'
//   Locations: 'Locations'
// }

// export let FeatureKinds: {
//   [Features.Checkin]: Kinds.Item

//   [Features.User]: Kinds.Item
//   [Features.Users]: Kinds.List

//   [Features.Theme]: Kinds.Item
//   [Features.Themes]: Kinds.List

//   [Features.Game]: Kinds.Item
//   [Features.Games]: Kinds.List

//   [Features.Registration]: Kinds.Item
//   [Features.Registrations]: Kinds.List

//   [Features.City]: Kinds.Item
//   [Features.Cities]: Kinds.List

//   [Features.CityPublic]: Kinds.Item
//   [Features.CitiesPublic]: Kinds.List

//   [Features.Location]: Kinds.Item
//   [Features.Locations]: Kinds.List
// }

export let FeatureUrls: Map<
  keyof typeof Features,
  Map<keyof typeof Networks, (options: URLOptions) => URL>
>

type Features = typeof Features

type FeaturesUnion = Features[keyof Features]
