import { URLOptions } from '@yurkimus/url'

import { Features } from '../enumerations/features'
import { Methods } from '../enumerations/methods'
import { Networks } from '../enumerations/networks'

export let Extensions: WeakMap<Function, {
  onbefore: Set<Function>
  onfulfilled: Set<Function>
  onrejected: Set<Function>
}>

export let useRequest: <
  Feature extends keyof typeof Features,
  Method extends keyof typeof Methods,
  Network extends keyof typeof Networks,
>(
  feature: Feature,
  method: Method,
  network: Network,
) => (options: URLOptions, init: RequestInit) => {
  [Features.Checkin]: {
    [Methods.DELETE]: unknown
    [Methods.GET]: CheckinResult
    [Methods.OPTIONS]: unknown
    [Methods.PATCH]: unknown
    [Methods.POST]: unknown
  }

  [Features.City]: {
    [Methods.DELETE]: unknown
    [Methods.GET]: CityResult
    [Methods.OPTIONS]: unknown
    [Methods.PATCH]: unknown
    [Methods.POST]: unknown
  }

  [Features.Cities]: {
    [Methods.DELETE]: unknown
    [Methods.GET]: CityResult[]
    [Methods.OPTIONS]: unknown
    [Methods.PATCH]: unknown
    [Methods.POST]: unknown
  }

  [Features.CityPublic]: {
    [Methods.DELETE]: unknown
    [Methods.GET]: CityPublicResult
    [Methods.OPTIONS]: unknown
    [Methods.PATCH]: unknown
    [Methods.POST]: unknown
  }

  [Features.CitiesPublic]: {
    [Methods.DELETE]: unknown
    [Methods.GET]: CityPublicResult[]
    [Methods.OPTIONS]: unknown
    [Methods.PATCH]: unknown
    [Methods.POST]: unknown
  }

  [Features.Game]: {
    [Methods.DELETE]: unknown
    [Methods.GET]: unknown
    [Methods.OPTIONS]: GameResult
    [Methods.PATCH]: unknown
    [Methods.POST]: unknown
  }

  [Features.Games]: {
    [Methods.DELETE]: unknown
    [Methods.GET]: GameResult[]
    [Methods.OPTIONS]: unknown
    [Methods.PATCH]: unknown
    [Methods.POST]: unknown
  }

  [Features.GamePublic]: {
    [Methods.DELETE]: unknown
    [Methods.GET]: GamePublicResult
    [Methods.OPTIONS]: unknown
    [Methods.PATCH]: unknown
    [Methods.POST]: unknown
  }

  [Features.GamesPublic]: {
    [Methods.DELETE]: unknown
    [Methods.GET]: GamePublicResult[]
    [Methods.OPTIONS]: unknown
    [Methods.PATCH]: unknown
    [Methods.POST]: unknown
  }

  [Features.Theme]: {
    [Methods.DELETE]: unknown
    [Methods.GET]: unknown
    [Methods.OPTIONS]: unknown
    [Methods.PATCH]: unknown
    [Methods.POST]: unknown
  }

  [Features.Themes]: {
    [Methods.DELETE]: unknown
    [Methods.GET]: unknown
    [Methods.OPTIONS]: unknown
    [Methods.PATCH]: unknown
    [Methods.POST]: unknown
  }

  [Features.User]: {
    [Methods.DELETE]: unknown
    [Methods.GET]: unknown
    [Methods.OPTIONS]: unknown
    [Methods.PATCH]: unknown
    [Methods.POST]: unknown
  }

  [Features.Users]: {
    [Methods.DELETE]: unknown
    [Methods.GET]: unknown
    [Methods.OPTIONS]: unknown
    [Methods.PATCH]: unknown
    [Methods.POST]: unknown
  }
}[Feature][Method]
