import { Cardinality } from './cardinality.js'
import { Route } from './route.js'

export const CardinalityRoutes = Object.freeze({
  [Cardinality['1']]: Object.freeze([
    Route['checkin'],
    Route['city'],
    Route['country'],
    Route['currency'],
    Route['game'],
    Route['game/registrations/export'],
    Route['games/registrations/export'],
    Route['registration'],
    Route['registration/export'],
    Route['registrations/export'],
    Route['role'],
    Route['theme'],
    Route['timezone'],
    Route['user'],
    Route['venue'],
  ]),

  [Cardinality['1-1']]: Object.freeze([
    Route['city/country'],
    Route['city/currency'],
    Route['city/timezone'],
    Route['city/venue'],
    Route['game/city'],
    Route['game/registration'],
    Route['game/summary'],
    Route['game/theme'],
    Route['game/venue'],
    Route['registration/city'],
    Route['registration/game/theme'],
    Route['theme/cover'],
    Route['user/city'],
    Route['user/password'],
    Route['user/role'],
    Route['venue/city'],
  ]),

  [Cardinality['1-N']]: Object.freeze([
    Route['city/venues'],
    Route['game/registrations'],
    Route['user/cities'],
  ]),

  [Cardinality['N']]: Object.freeze([
    Route['cities'],
    Route['countries'],
    Route['currencies'],
    Route['games'],
    Route['registrations'],
    Route['roles'],
    Route['themes'],
    Route['timezones'],
    Route['users'],
    Route['venues'],
  ]),

  [Cardinality['N-1']]: Object.freeze([
    Route['cities/country'],
    Route['cities/currency'],
    Route['cities/timezone'],
    Route['games/city'],
    Route['games/summary'],
    Route['games/theme'],
    Route['games/venue'],
    Route['registrations/city'],
    Route['registrations/game'],
    Route['registrations/game/theme'],
    Route['themes/cover'],
    Route['users/role'],
    Route['venues/city'],
  ]),

  [Cardinality['N-N']]: Object.freeze([
    Route['cities/venues'],
    Route['games/registrations'],
    Route['users/cities'],
  ]),
})
