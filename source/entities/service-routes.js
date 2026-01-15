import { Route } from './route.js'
import { Service } from './service.js'

export const ServiceRoutes = Object.freeze({
  [Service['Users']]: Object.freeze([
    Route['user'],
    Route['user/cities'],
    Route['user/password'],
    Route['user/role'],
    Route['users'],
    Route['users/cities'],
    Route['users/role'],
  ]),

  [Service['Roles']]: Object.freeze([
    Route['role'],
    Route['roles'],
  ]),

  [Service['Checkin']]: Object.freeze([
    Route['checkin'],
  ]),

  [Service['Locations']]: Object.freeze([
    Route['countries'],
    Route['country'],
    Route['currencies'],
    Route['currency'],
    Route['timezone'],
    Route['timezones'],
  ]),

  [Service['Cities']]: Object.freeze([
    Route['cities'],
    Route['cities/country'],
    Route['cities/currency'],
    Route['cities/timezone'],
    Route['cities/venues'],
    Route['city'],
    Route['city/country'],
    Route['city/currency'],
    Route['city/timezone'],
    Route['city/vk_group_token'],
    Route['city/venues'],
  ]),

  [Service['Venues']]: Object.freeze([
    Route['venue'],
    Route['venue/city'],
    Route['venues'],
    Route['venues/city'],
  ]),

  [Service['Themes']]: Object.freeze([
    Route['theme'],
    Route['theme/cover'],
    Route['themes'],
    Route['themes/cover'],
  ]),

  [Service['Games']]: Object.freeze([
    Route['game'],
    Route['game/city'],
    Route['game/registrations'],
    Route['game/registrations/export'],
    Route['game/summary'],
    Route['game/theme'],
    Route['game/venue'],
    Route['games'],
    Route['games/city'],
    Route['games/registrations'],
    Route['games/registrations/export'],
    Route['games/summary'],
    Route['games/theme'],
    Route['games/venue'],
  ]),

  [Service['Registrations']]: Object.freeze([
    Route['registration'],
    Route['registration/cancellation'],
    Route['registration/channel'],
    Route['registration/confirmation'],
    Route['registration/city'],
    Route['registration/game'],
    Route['registration/game/theme'],
    Route['registration/mailing'],
    Route['registrations'],
    Route['registrations/city'],
    Route['registrations/game'],
    Route['registrations/game/theme'],
    Route['registrations/export'],
  ]),

  [Service['Files']]: Object.freeze([]),

  [Service['Procedures']]: Object.freeze([]),

  [Service['Integrations']]: Object.freeze([]),

  [Service['Updates']]: Object.freeze([]),

  [Service['Hub']]: Object.freeze([]),

  [Service['Landing']]: Object.freeze([]),

  [Service['Vkma']]: Object.freeze([]),

  [Service['Minio']]: Object.freeze([]),
})
