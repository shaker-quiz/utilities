export var Service = /** @type {const} */ ({
  'Users': 'Users',
  'Roles': 'Roles',
  'Locations': 'Locations',
  'Cities': 'Cities',
  'Venues': 'Venues',
  'Themes': 'Themes',
  'Games': 'Games',
  'Registrations': 'Registrations',
  'Files': 'Files',
  'Checkin': 'Checkin',
  'Procedures': 'Procedures',
  'Integrations': 'Integrations',
  'Updates': 'Updates',
  'Hub': 'Hub',
  'Landing': 'Landing',
  'Vkma': 'Vkma',
})

export var Services = Object.values(Service)

export var SingularRoute = /** @type {const} */ ({
  'role': 'role',
  'user': 'user',
  'user/password': 'user/password',
  'user/role': 'user/role',
  'user/cities': 'user/cities',
  'checkin': 'checkin',
  'country': 'country',
  'currency': 'currency',
  'timezone': 'timezone',
  'city': 'city',
  'city/country': 'city/country',
  'city/currency': 'city/currency',
  'city/timezone': 'city/timezone',
  'city/venues': 'city/venues',
  'venue': 'venue',
  'venue/city': 'venue/city',
  'theme': 'theme',
  'theme/cover': 'theme/cover',
  'game': 'game',
  'game/city': 'game/city',
  'game/venue': 'game/venue',
  'game/theme': 'game/theme',
  'game/registrations': 'game/registrations',
  'game/registrations/export': 'game/registrations/export',
  'game/summary': 'game/summary',
  'registration': 'registration',
  'registration/game': 'registration/game',
  'registration/mailing': 'registration/mailing',
  'registration/channel': 'registration/channel',
  'registration/confirmation': 'registration/confirmation',
  'registration/cancellation': 'registration/cancellation',
  'registration/export': 'registration/export',
})

export var SingularRoutes = Object.values(SingularRoute)

export var PluralRoute = /** @type {const} */ ({
  'roles': 'roles',
  'users': 'users',
  'users/password': 'users/password',
  'users/role': 'users/role',
  'users/cities': 'users/cities',
  'checkins': 'checkins',
  'countries': 'countries',
  'currencies': 'currencies',
  'timezones': 'timezones',
  'cities': 'cities',
  'cities/country': 'cities/country',
  'cities/currency': 'cities/currency',
  'cities/timezone': 'cities/timezone',
  'cities/venues': 'cities/venues',
  'venues': 'venues',
  'venues/city': 'venues/city',
  'themes': 'themes',
  'themes/cover': 'themes/cover',
  'games': 'games',
  'games/city': 'games/city',
  'games/venue': 'games/venue',
  'games/theme': 'games/theme',
  'games/registrations': 'games/registrations',
  'games/registrations/export': 'games/registrations/export',
  'games/summary': 'games/summary',
  'registrations': 'registrations',
  'registrations/export': 'registrations/export',
})

export var PluralRoutes = Object.values(PluralRoute)

export var Route = {
  ...SingularRoute,
  ...PluralRoute,
}

export var SingularPluralRouteRelation = {
  [Route['role']]: Route['roles'],
  [Route['user']]: Route['users'],
  [Route['user/password']]: Route['users/password'],
  [Route['user/role']]: Route['users/role'],
  [Route['user/cities']]: Route['users/cities'],
  [Route['checkin']]: Route['checkins'],
  [Route['country']]: Route['countries'],
  [Route['currency']]: Route['currencies'],
  [Route['timezone']]: Route['timezones'],
  [Route['city']]: Route['cities'],
  [Route['city/country']]: Route['cities/country'],
  [Route['city/currency']]: Route['cities/currency'],
  [Route['city/timezone']]: Route['cities/timezone'],
  [Route['city/venues']]: Route['cities/venues'],
  [Route['venue']]: Route['venues'],
  [Route['venue/city']]: Route['venues/city'],
  [Route['theme']]: Route['themes'],
  [Route['theme/cover']]: Route['themes/cover'],
  [Route['game']]: Route['games'],
  [Route['game/city']]: Route['games/city'],
  [Route['game/venue']]: Route['games/venue'],
  [Route['game/theme']]: Route['games/theme'],
  [Route['game/registrations']]: Route['games/registrations'],
  [Route['game/registrations/export']]: Route['games/registrations/export'],
  [Route['game/summary']]: Route['games/summary'],
  [Route['registration']]: Route['registrations'],
  [Route['registration/export']]: Route['registrations/export'],
}

export var PluralSingularRouteRelation = {
  [Route['roles']]: Route['role'],
  [Route['users']]: Route['user'],
  [Route['users/role']]: Route['user/role'],
  [Route['users/cities']]: Route['user/cities'],
  [Route['checkins']]: Route['checkin'],
  [Route['countries']]: Route['country'],
  [Route['currencies']]: Route['currency'],
  [Route['timezones']]: Route['timezone'],
  [Route['cities']]: Route['city'],
  [Route['cities/country']]: Route['city/country'],
  [Route['cities/currency']]: Route['city/currency'],
  [Route['cities/timezone']]: Route['city/timezone'],
  [Route['cities/venues']]: Route['city/venues'],
  [Route['venues']]: Route['venue'],
  [Route['venues/city']]: Route['venue/city'],
  [Route['themes']]: Route['theme'],
  [Route['themes/cover']]: Route['theme/cover'],
  [Route['games']]: Route['game'],
  [Route['games/city']]: Route['game/city'],
  [Route['games/venue']]: Route['game/venue'],
  [Route['games/theme']]: Route['game/theme'],
  [Route['games/registrations']]: Route['game/registrations'],
  [Route['games/registrations/export']]: Route['game/registrations/export'],
  [Route['games/summary']]: Route['game/summary'],
  [Route['registrations']]: Route['registration'],
  [Route['registrations/export']]: Route['registration/export'],
}

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

  [Route['checkins']]: 'checkins',

  [Route['country']]: 'country/:country',

  [Route['countries']]: 'countries',

  [Route['currency']]: 'currency/:currency',

  [Route['currencies']]: 'currencies',

  [Route['timezone']]: 'timezone/:timezone',

  [Route['timezones']]: 'timezones',

  [Route['city']]: 'city/:city',
  [Route['city/country']]: 'city/:city/country',
  [Route['city/currency']]: 'city/:city/currency',
  [Route['city/timezone']]: 'city/:city/timezone',
  [Route['city/venues']]: 'city/:city/venues',

  [Route['cities']]: 'cities',
  [Route['cities/country']]: 'cities/country',
  [Route['cities/currency']]: 'cities/currency',
  [Route['cities/timezone']]: 'cities/timezone',
  [Route['cities/venues']]: 'cities/venues',

  [Route['venue']]: 'venue/:venue',
  [Route['venue/city']]: 'venues/city',

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
  [Route['game/registrations/export']]: 'game/:game/registrations/export',
  [Route['game/summary']]: 'game/:game/summary',

  [Route['games']]: 'games',
  [Route['games/city']]: 'games/city',
  [Route['games/venue']]: 'games/venue',
  [Route['games/theme']]: 'games/theme',
  [Route['games/registrations']]: 'games/registrations',
  [Route['games/registrations/export']]: 'games/registrations/export',
  [Route['games/summary']]: 'games/summary',

  [Route['registration']]: 'registration/:registration',
  [Route['registration/game']]: 'registration/:registration/game',
  [Route['registration/mailing']]: 'registration/:registration/mailing',
  [Route['registration/channel']]: 'registration/:registration/channel',
  [Route['registration/confirmation']]: 'registration/:registration/confirmation',
  [Route['registration/cancellation']]: 'registration/:registration/cancellation',
  [Route['registration/export']]: 'registration/:registration/export',

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

  [Route['checkins']]: [],

  [Route['country']]: [':country'],

  [Route['countries']]: [],

  [Route['currency']]: [':currency'],

  [Route['currencies']]: [],

  [Route['timezone']]: [':timezone'],

  [Route['timezones']]: [],

  [Route['city']]: [':city'],
  [Route['city/country']]: [':city'],
  [Route['city/currency']]: [':city'],
  [Route['city/timezone']]: [':city'],
  [Route['city/venues']]: [':city'],

  [Route['cities']]: [],
  [Route['cities/country']]: [],
  [Route['cities/currency']]: [],
  [Route['cities/timezone']]: [],
  [Route['cities/venues']]: [],

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
  [Route['game/registrations/export']]: [':game'],
  [Route['game/summary']]: [':game'],

  [Route['games']]: [],
  [Route['games/city']]: [],
  [Route['games/venue']]: [],
  [Route['games/theme']]: [],
  [Route['games/registrations']]: [],
  [Route['games/registrations/export']]: [],
  [Route['games/summary']]: [],

  [Route['registration']]: [':registration'],
  [Route['registration/game']]: [':registration'],
  [Route['registration/mailing']]: [':registration'],
  [Route['registration/channel']]: [':registration'],
  [Route['registration/confirmation']]: [':registration'],
  [Route['registration/cancellation']]: [':registration'],
  [Route['registration/export']]: [':registration'],

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
  [Route['city/country']]: Service.Cities,
  [Route['city/currency']]: Service.Cities,
  [Route['city/timezone']]: Service.Cities,
  [Route['city/venues']]: Service.Cities,

  [Route['cities']]: Service.Cities,
  [Route['cities/country']]: Service.Cities,
  [Route['cities/currency']]: Service.Cities,
  [Route['cities/timezone']]: Service.Cities,

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
  [Route['game/registrations/export']]: Service.Games,
  [Route['game/summary']]: Service.Games,

  [Route['games']]: Service.Games,
  [Route['games/city']]: Service.Games,
  [Route['games/venue']]: Service.Games,
  [Route['games/theme']]: Service.Games,
  [Route['games/registrations']]: Service.Games,
  [Route['games/registrations/export']]: Service.Games,
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
    Route['city/country'],
    Route['city/currency'],
    Route['city/timezone'],
    Route['city/venues'],
    Route['cities'],
    Route['cities/country'],
    Route['cities/currency'],
    Route['cities/timezone'],
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
    Route['game/registrations/export'],
    Route['game/summary'],
    Route['games'],
    Route['games/city'],
    Route['games/venue'],
    Route['games/theme'],
    Route['games/registrations'],
    Route['games/registrations/export'],
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

  [Service.Checkin]: [
    Route['checkin'],
  ],

  [Service.Procedures]: [],

  [Service.Integrations]: [],

  [Service.Updates]: [],

  [Service.Hub]: [],

  [Service.Landing]: [],

  [Service.Vkma]: [],
}

/**
 * @param {keyof Route} value
 */
export var getRoute = value => {
  if (!(value in Route))
    throw TypeError(`[getRoute] Route '${value}' must be a member of Route.`)

  return Route[value]
}

/**
 * @param {keyof Route} value
 */
export var getRouteKind = value => {
  var route = getRoute(value)

  if (SingularRoutes.includes(route))
    return 'Singular'
  else if (PluralRoutes.includes(route))
    return 'Plural'
  else
    return 'Unknown'
}

/**
 * @param {keyof typeof Route} value
 *
 * @returns {keyof typeof Service}
 */
export var getRouteService = value => {
  var route = getRoute(value)

  if (!(route in RouteService))
    throw TypeError(
      `[getRouteService] Route '${route}' must be a member of RouteService.`,
    )

  return RouteService[route]
}

/**
 * @param {keyof Route} value
 */
export var getSingularPluralRouteRelation = value => {
  var route = getRoute(value)

  if (!(route in SingularPluralRouteRelation))
    throw TypeError(
      `[getSingularPluralRouteRelation] Route '${route}' must be a member of SingularPluralRouteRelation.`,
    )

  return SingularPluralRouteRelation[route]
}

export var getPluralSingularRouteRelation = value => {
  var route = getRoute(value)

  if (!(route in PluralSingularRouteRelation))
    throw TypeError(
      `[getPluralSingularRouteRelation] Route '${route}' must be a member of PluralSingularRouteRelation.`,
    )

  return PluralSingularRouteRelation[route]
}

/**
 * @param {keyof Route} value
 */
export var getRoutePathname = value => {
  var route = getRoute(value)

  if (!(route in RoutePathname))
    throw TypeError(`[getRoutePathname] Route '${route}' must be a member of RoutePathname.`)

  return RoutePathname[route]
}

/**
 * @param {keyof Route} value
 */
export var getRoutePathnamePattern = value => {
  var route = getRoute(value)

  if (!(route in RoutePathname))
    throw TypeError(`[getRoutePathname] Route '${route}' must be a member of RoutePathname.`)

  return new URLPattern({ pathname: '/' + RoutePathname[route] })
}

export var hydrateRoutePathname = (value, parameters) => {
  var route = getRoute(value)
  var pathname = getRoutePathname(route)
  var params = getRouteParams(route)

  return params.reduce(
    (pathname, param, index) => pathname.replace(param, parameters[index]),
    pathname,
  )
}

/**
 * @param {keyof Route} value
 * @returns
 */
export var getRouteParams = value => {
  var route = getRoute(value)

  if (!(route in RouteParams))
    throw TypeError(`[getRouteParams] Route '${route}' must be a member of RouteParams.`)

  return RouteParams[route]
}
