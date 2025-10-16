export var Service = /** @type {const} */ ({
  'Users': 'Users',
  'Roles': 'Roles',
  'Checkin': 'Checkin',
  'Locations': 'Locations',
  'Cities': 'Cities',
  'Venues': 'Venues',
  'Themes': 'Themes',
  'Games': 'Games',
  'Registrations': 'Registrations',
  'Procedures': 'Procedures',
  'Integrations': 'Integrations',
  'Updates': 'Updates',
})

export var Services = Object.values(Service)

export var Route = /** @type {const} */ ({
  'user': 'user',
  'user/password': 'user/password',
  'user/role': 'user/role',
  'user/cities': 'user/cities',

  'users': 'users',
  'users/role': 'users/role',
  'users/cities': 'users/cities',

  'role': 'role',

  'roles': 'roles',

  'checkin': 'checkin',

  'country': 'country',

  'countries': 'countries',

  'currency': 'currency',

  'currencies': 'currencies',

  'timezone': 'timezone',

  'timezones': 'timezones',

  'city': 'city',
  'city/venues': 'city/venues',

  'cities': 'cities',

  'venue': 'venue',
  'venue/city': 'venue/city',

  'venues': 'venues',
  'venues/city': 'venues/city',

  'theme': 'theme',
  'theme/cover': 'theme/cover',

  'themes': 'themes',
  'themes/cover': 'themes/cover',

  'game': 'game',
  'game/city': 'game/city',
  'game/venue': 'game/venue',
  'game/theme': 'game/theme',
  'game/registrations': 'game/registrations',
  'game/registrations/exports': 'game/registrations/exports',
  'game/summary': 'game/summary',

  'games': 'games',
  'games/city': 'games/city',
  'games/venue': 'games/venue',
  'games/theme': 'games/theme',
  'games/summary': 'games/summary',

  'registration': 'registration',
  'registration/game': 'registration/game',
  'registration/mailing': 'registration/mailing',
  'registration/channel': 'registration/channel',
  'registration/confirmation': 'registration/confirmation',
  'registration/cancellation': 'registration/cancellation',

  'registrations': 'registrations',
  'registrations/export': 'registrations/export',
})

export var Routes = Object.values(Route)

export var RoutePathname = /** @type {const} */ ({
  [Route['user']]: 'user/:user',
  [Route['user/password']]: 'user/:user/password',
  [Route['user/role']]: 'user/:user/role',
  [Route['user/cities']]: 'user/:user/cities',

  [Route['users']]: 'users',
  [Route['users/role']]: 'users/role',
  [Route['users/cities']]: 'users/cities',

  [Route['role']]: 'role/:role',

  [Route['roles']]: 'roles',

  [Route['checkin']]: 'checkin',

  [Route['country']]: 'country/:country',

  [Route['countries']]: 'countries',

  [Route['currency']]: 'currency/:currency',

  [Route['currencies']]: 'currencies',

  [Route['timezone']]: 'timezone/:timezone',

  [Route['timezones']]: 'timezones',

  [Route['city']]: 'city/:city',
  [Route['city/venues']]: 'city/:city/venues',

  [Route['cities']]: 'cities',

  [Route['venue']]: 'venue/:venue',
  [Route['venues/city']]: 'venues/city',

  [Route['venues']]: 'venues',
  [Route['venues/city']]: 'venues/city',

  [Route['theme']]: 'theme/:theme',
  [Route['theme/cover']]: 'theme/:theme/cover',

  [Route['themes']]: 'themes',
  [Route['themes/cover']]: 'themes/cover',

  [Route['game']]: 'game/:game',
  [Route['game/city']]: 'game/:game/city',
  [Route['game/venue']]: 'game/:game/venue',
  [Route['game/theme']]: 'game/:game/theme',
  [Route['game/registrations']]: 'game/:game/registrations',
  [Route['game/registrations/exports']]: 'game/:game/registrations/exports',
  [Route['game/summary']]: 'game/:game/summary',

  [Route['games']]: 'games',
  [Route['games/city']]: 'games/city',
  [Route['games/venue']]: 'games/venue',
  [Route['games/theme']]: 'games/theme',
  [Route['games/summary']]: 'games/summary',

  [Route['registration']]: 'registration/:registration',
  [Route['registration/game']]: 'registration/:registration/game',
  [Route['registration/mailing']]: 'registration/:registration/mailing',
  [Route['registration/channel']]: 'registration/:registration/channel',
  [Route['registration/confirmation']]: 'registration/:registration/confirmation',
  [Route['registration/cancellation']]: 'registration/:registration/cancellation',

  [Route['registrations']]: 'registrations',
  [Route['registrations/export']]: 'registrations/export',
})

export var RoutePathnames = Object.values(RoutePathname)

export var RouteParams = /** @type {const} */ ({
  [Route['user']]: [':user'],
  [Route['user/password']]: [':user'],
  [Route['user/role']]: [':user'],
  [Route['user/cities']]: [':user'],

  [Route['users']]: [],
  [Route['users/role']]: [],
  [Route['users/cities']]: [],

  [Route['role']]: [':role'],

  [Route['roles']]: [],

  [Route['checkin']]: [],

  [Route['country']]: [':country'],

  [Route['countries']]: [],

  [Route['currency']]: [':currency'],

  [Route['currencies']]: [],

  [Route['timezone']]: [':timezone'],

  [Route['timezones']]: [],

  [Route['city']]: [':city'],
  [Route['city/venues']]: [':city'],

  [Route['cities']]: [],

  [Route['venue']]: [':venue'],
  [Route['venue/city']]: [':venue'],

  [Route['venues']]: [],
  [Route['venues/city']]: [':venue'],

  [Route['theme']]: [':theme'],
  [Route['theme/cover']]: [':theme'],

  [Route['themes']]: [],
  [Route['themes/cover']]: [],

  [Route['game']]: [':game'],
  [Route['game/city']]: [':game'],
  [Route['game/venue']]: [':game'],
  [Route['game/theme']]: [':game'],
  [Route['game/registrations']]: [':game'],
  [Route['game/registrations/exports']]: [':game'],
  [Route['game/summary']]: [':game'],

  [Route['games']]: [],
  [Route['games/city']]: [],
  [Route['games/venue']]: [],
  [Route['games/theme']]: [],
  [Route['games/summary']]: [],

  [Route['registration']]: [':registration'],
  [Route['registration/game']]: [':registration'],
  [Route['registration/mailing']]: [':registration'],
  [Route['registration/channel']]: [':registration'],
  [Route['registration/confirmation']]: [':registration'],
  [Route['registration/cancellation']]: [':registration'],

  [Route['registrations']]: [],
  [Route['registrations/export']]: [],
})

export var RouteService = {
  [Route['user']]: Service.Users,
  [Route['user/password']]: Service.Users,
  [Route['user/role']]: Service.Users,
  [Route['user/cities']]: Service.Users,

  [Route['users']]: Service.Users,
  [Route['users/role']]: Service.Users,
  [Route['users/cities']]: Service.Users,

  [Route['role']]: Service.Roles,

  [Route['roles']]: Service.Roles,

  [Route['checkin']]: Service.Checkin,

  [Route['country']]: Service.Locations,

  [Route['countries']]: Service.Locations,

  [Route['currency']]: Service.Locations,

  [Route['currencies']]: Service.Locations,

  [Route['timezone']]: Service.Locations,

  [Route['timezones']]: Service.Locations,

  [Route['city']]: Service.Cities,
  [Route['city/venues']]: Service.Cities,

  [Route['cities']]: Service.Cities,

  [Route['venue']]: Service.Venues,
  [Route['venue/city']]: Service.Venues,

  [Route['venues']]: Service.Venues,
  [Route['venues/city']]: Service.Venues,

  [Route['theme']]: Service.Themes,
  [Route['theme/cover']]: Service.Themes,

  [Route['themes']]: Service.Themes,
  [Route['themes/cover']]: Service.Themes,

  [Route['game']]: Service.Games,
  [Route['game/city']]: Service.Games,
  [Route['game/venue']]: Service.Games,
  [Route['game/theme']]: Service.Games,
  [Route['game/registrations']]: Service.Games,
  [Route['game/registrations/exports']]: Service.Games,
  [Route['game/summary']]: Service.Games,

  [Route['games']]: Service.Games,
  [Route['games/city']]: Service.Games,
  [Route['games/venue']]: Service.Games,
  [Route['games/theme']]: Service.Games,
  [Route['games/summary']]: Service.Games,

  [Route['registration']]: Service.Registrations,
  [Route['registration/game']]: Service.Registrations,
  [Route['registration/mailing']]: Service.Registrations,
  [Route['registration/channel']]: Service.Registrations,
  [Route['registration/confirmation']]: Service.Registrations,
  [Route['registration/cancellation']]: Service.Registrations,

  [Route['registrations']]: Service.Registrations,
  [Route['registrations/export']]: Service.Registrations,
}

export var ServiceRoutes = {
  [Service.Users]: [
    Route['user'],
    Route['user/password'],
    Route['user/role'],
    Route['user/cities'],
    Route['users'],
    Route['users/role'],
    Route['users/cities'],
  ],

  [Service.Roles]: [
    Route['role'],
    Route['roles'],
  ],

  [Service.Checkin]: [
    Route['checkin'],
  ],

  [Service.Locations]: [
    Route['country'],
    Route['countries'],
    Route['currency'],
    Route['currencies'],
    Route['timezone'],
    Route['timezones'],
  ],

  [Service.Cities]: [
    Route['city'],
    Route['city/venues'],
    Route['cities'],
  ],

  [Service.Venues]: [
    Route['venue'],
    Route['venue/city'],
    Route['venues'],
    Route['venues/city'],
  ],

  [Service.Themes]: [
    Route['theme'],
    Route['theme/cover'],
    Route['themes'],
    Route['themes/cover'],
  ],

  [Service.Games]: [
    Route['game'],
    Route['game/city'],
    Route['game/venue'],
    Route['game/theme'],
    Route['game/registrations'],
    Route['game/registrations/exports'],
    Route['game/summary'],
    Route['games'],
    Route['games/city'],
    Route['games/venue'],
    Route['games/theme'],
    Route['games/summary'],
  ],

  [Service.Registrations]: [
    Route['registration'],
    Route['registration/game'],
    Route['registration/mailing'],
    Route['registration/channel'],
    Route['registration/confirmation'],
    Route['registration/cancellation'],
    Route['registrations'],
    Route['registrations/export'],
  ],

  [Service.Procedures]: [],

  [Service.Integrations]: [],

  [Service.Updates]: [],
}

/**
 * @template {Route} R
 * @template {typeof RouteParams[R]} P
 *
 * @param {R} route
 * @param {Record<P[number] extends `:${infer Name}` ? Name : P[number], string>} params
 */
export var hydrateRoutePathname = (route, params) =>
  RouteParams[route].reduce(
    (pathname, param) => pathname.replace(param, params[param.replace(':', '')]),
    RoutePathname[route],
  )
