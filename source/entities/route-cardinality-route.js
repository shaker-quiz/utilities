import { Cardinality } from './cardinality.js'
import { Route } from './route.js'

export const RouteCardinalityRoute = Object.freeze({
  [Route['cities']]: {
    [Cardinality['1']]: Route['city'],
  },

  [Route['cities/country']]: {
    [Cardinality['1-1']]: Route['city/country'],
  },

  [Route['cities/currency']]: {
    [Cardinality['1-1']]: Route['city/currency'],
  },

  [Route['cities/timezone']]: {
    [Cardinality['1-1']]: Route['city/timezone'],
  },

  [Route['cities/venues']]: {
    [Cardinality['1-N']]: Route['city/venues'],
  },

  [Route['countries']]: {
    [Cardinality['1']]: Route['country'],
  },

  [Route['currencies']]: {
    [Cardinality['1']]: Route['currency'],
  },

  [Route['games']]: {
    [Cardinality['1']]: Route['game'],
  },

  [Route['games/city']]: {
    [Cardinality['1-1']]: Route['game/city'],
  },

  [Route['games/registrations']]: {
    [Cardinality['1-N']]: Route['game/registrations'],
  },

  [Route['games/summary']]: {
    [Cardinality['1-1']]: Route['game/summary'],
  },

  [Route['games/theme']]: {
    [Cardinality['1-1']]: Route['game/theme'],
  },

  [Route['games/venue']]: {
    [Cardinality['1-1']]: Route['game/venue'],
  },

  [Route['registrations']]: {
    [Cardinality['1']]: Route['registration'],
  },

  [Route['registrations/city']]: {
    [Cardinality['1-1']]: Route['registration/city'],
  },

  [Route['registrations/game']]: {
    [Cardinality['1-1']]: Route['registration/game'],
  },

  [Route['registrations/game/theme']]: {
    [Cardinality['1-1']]: Route['registration/game/theme'],
  },

  [Route['roles']]: {
    [Cardinality['1']]: Route['role'],
  },

  [Route['themes']]: {
    [Cardinality['1']]: Route['theme'],
  },

  [Route['themes/cover']]: {
    [Cardinality['1-1']]: Route['theme/cover'],
  },

  [Route['timezones']]: {
    [Cardinality['1']]: Route['timezone'],
  },

  [Route['user/cities']]: {
    [Cardinality['1-N']]: Route['user/cities'],
  },

  [Route['users']]: {
    [Cardinality['1']]: Route['user'],
  },

  [Route['users/cities']]: {
    [Cardinality['1-N']]: Route['user/cities'],
  },

  [Route['users/role']]: {
    [Cardinality['1-N']]: Route['user/role'],
  },

  [Route['venues']]: {
    [Cardinality['1']]: Route['venue'],
  },

  [Route['venues/city']]: {
    [Cardinality['1-1']]: Route['venue/city'],
  },
})
