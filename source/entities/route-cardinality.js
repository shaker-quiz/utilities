import { Cardinality } from './cardinality.js'
import { Route } from './route.js'

export const RouteCardinality = Object.freeze({
  [Route['checkin']]: Cardinality['1'],
  [Route['cities']]: Cardinality['N'],
  [Route['cities/country']]: Cardinality['N-1'],
  [Route['cities/currency']]: Cardinality['N-1'],
  [Route['cities/timezone']]: Cardinality['N-1'],
  [Route['cities/venues']]: Cardinality['N-N'],
  [Route['city']]: Cardinality['1'],
  [Route['city/country']]: Cardinality['1-1'],
  [Route['city/currency']]: Cardinality['1-1'],
  [Route['city/timezone']]: Cardinality['1-1'],
  [Route['city/venue']]: Cardinality['1-1'],
  [Route['city/venues']]: Cardinality['1-N'],
  [Route['countries']]: Cardinality['N'],
  [Route['country']]: Cardinality['1'],
  [Route['currencies']]: Cardinality['N'],
  [Route['currency']]: Cardinality['1'],
  [Route['game']]: Cardinality['1'],
  [Route['game/city']]: Cardinality['1-1'],
  [Route['game/registration']]: Cardinality['1-1'],
  [Route['game/registrations']]: Cardinality['1-N'],
  [Route['game/registrations/export']]: Cardinality['1'],
  [Route['game/summary']]: Cardinality['1-1'],
  [Route['game/theme']]: Cardinality['1-1'],
  [Route['game/venue']]: Cardinality['1-1'],
  [Route['games']]: Cardinality['N'],
  [Route['games/city']]: Cardinality['N-1'],
  [Route['games/registrations']]: Cardinality['N-N'],
  [Route['games/registrations/export']]: Cardinality['1'],
  [Route['games/summary']]: Cardinality['N-1'],
  [Route['games/theme']]: Cardinality['N-1'],
  [Route['games/venue']]: Cardinality['N-1'],
  [Route['registration']]: Cardinality['1'],
  [Route['registration/city']]: Cardinality['1-1'],
  [Route['registration/game/theme']]: Cardinality['1-1'],
  [Route['registration/export']]: Cardinality['1'],
  [Route['registrations']]: Cardinality['N'],
  [Route['registrations/city']]: Cardinality['N-1'],
  [Route['registrations/game']]: Cardinality['N-1'],
  [Route['registrations/game/theme']]: Cardinality['N-1'],
  [Route['registrations/export']]: Cardinality['1'],
  [Route['role']]: Cardinality['1'],
  [Route['roles']]: Cardinality['N'],
  [Route['theme']]: Cardinality['1'],
  [Route['theme/cover']]: Cardinality['1-1'],
  [Route['themes']]: Cardinality['N'],
  [Route['themes/cover']]: Cardinality['N-1'],
  [Route['timezone']]: Cardinality['1'],
  [Route['timezones']]: Cardinality['N'],
  [Route['user']]: Cardinality['1'],
  [Route['user/cities']]: Cardinality['1-N'],
  [Route['user/city']]: Cardinality['1-1'],
  [Route['user/password']]: Cardinality['1-1'],
  [Route['user/role']]: Cardinality['1-1'],
  [Route['users']]: Cardinality['N'],
  [Route['users/cities']]: Cardinality['N-N'],
  [Route['users/role']]: Cardinality['N-1'],
  [Route['venue']]: Cardinality['1'],
  [Route['venue/city']]: Cardinality['1-1'],
  [Route['venues']]: Cardinality['N'],
  [Route['venues/city']]: Cardinality['N-1'],
})

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
    [Cardinality['1']]: Route['game/registrations'],
  },

  [Route['games/summary']]: {
    [Cardinality['1']]: Route['game/summary'],
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
    [Cardinality['1']]: Route['theme/cover'],
  },

  [Route['timezones']]: {
    [Cardinality['1']]: Route['timezone'],
  },

  [Route['user/cities']]: {
    [Cardinality['1']]: Route['user/cities'],
  },

  [Route['users']]: {
    [Cardinality['1']]: Route['user'],
  },

  [Route['users/cities']]: {
    [Cardinality['1']]: Route['user/cities'],
  },

  [Route['users/role']]: {
    [Cardinality['1']]: Route['user/role'],
  },

  [Route['venues']]: {
    [Cardinality['1']]: Route['venue'],
  },

  [Route['venues/city']]: {
    [Cardinality['1']]: Route['venue/city'],
  },
})
