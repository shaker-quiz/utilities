export var Route = /** @type {const} */ ({
  'role': 'role',
  'roles': 'roles',
  'user': 'user',
  'users': 'users',
  'checkin': 'checkin',
  'user/password': 'user/password',
  'user/role': 'user/role',
  'user/cities': 'user/cities',
  'users/role': 'users/role',
  'users/cities': 'users/cities',
  'countries': 'countries',
  'currencies': 'currencies',
  'city': 'city',
  'cities': 'cities',
  'city/venues': 'city/venues',
  'venue': 'venue',
  'venues': 'venues',
  'theme': 'theme',
  'themes': 'themes',
  'theme/cover': 'theme/cover',
  'themes/covers': 'themes/covers',
  'game': 'game',
  'games': 'games',
  'registration': 'registration',
  'registration/mailing': 'registration/mailing',
  'registrations': 'registrations',
  'mailing': 'mailing',
})

export var Routes = Object.values(Route)

export var RoutePathname = /** @type {const} */ ({
  [Route['role']]: 'role/:role',
  [Route['roles']]: 'roles',
  [Route['user']]: 'user/:user',
  [Route['users']]: 'users',
  [Route['checkin']]: 'checkin',
  [Route['user/password']]: 'user/:user/password',
  [Route['user/role']]: 'user/:user/role',
  [Route['user/cities']]: 'user/:user/cities',
  [Route['users/role']]: 'users/role',
  [Route['users/cities']]: 'users/cities',
  [Route['countries']]: 'countries',
  [Route['currencies']]: 'currencies',
  [Route['city']]: 'city/:city',
  [Route['cities']]: 'cities',
  [Route['city/venues']]: 'city/:city/venues',
  [Route['venue']]: 'venue/:venue',
  [Route['venues']]: 'venues',
  [Route['theme']]: 'theme/:theme',
  [Route['themes']]: 'themes',
  [Route['theme/cover']]: 'theme/:theme/cover',
  [Route['themes/covers']]: 'themes/covers',
  [Route['game']]: 'game/:game',
  [Route['games']]: 'games',
  [Route['registration']]: 'registration/:registration',
  [Route['registration/mailing']]: 'registration/:registration/mailing',
  [Route['registrations']]: 'registrations',
  [Route['mailing']]: 'mailing/:mailing',
})

export var RoutePathnames = Object.values(RoutePathname)

export var RouteParams = /** @type {const} */ ({
  [Route['role']]: [':role'],
  [Route['user']]: [':user'],
  [Route['user/password']]: [':user'],
  [Route['user/role']]: [':user'],
  [Route['user/cities']]: [':user'],
  [Route['city']]: [':city'],
  [Route['city/venues']]: [':city'],
  [Route['venue']]: [':venue'],
  [Route['theme']]: [':theme'],
  [Route['theme/cover']]: [':theme'],
  [Route['game']]: [':game'],
  [Route['registration']]: [':registration'],
  [Route['registration/mailing']]: [':registration'],
  [Route['mailing']]: [':mailing'],
})

export var RouteService = {
  [Route['role']]: 'Users',
  [Route['roles']]: 'Users',
  [Route['user']]: 'Users',
  [Route['users']]: 'Users',
  [Route['checkin']]: 'Checkin',
  [Route['user/password']]: 'Users',
  [Route['user/role']]: 'Users',
  [Route['user/cities']]: 'Users',
  [Route['users/role']]: 'Users',
  [Route['users/cities']]: 'Users',
  [Route['countries']]: 'Locations',
  [Route['currencies']]: 'Locations',
  [Route['city']]: 'Cities',
  [Route['cities']]: 'Cities',
  [Route['city/venues']]: 'Cities',
  [Route['venue']]: 'Venues',
  [Route['venues']]: 'Venues',
  [Route['theme']]: 'Themes',
  [Route['themes']]: 'Themes',
  [Route['theme/cover']]: 'Themes',
  [Route['themes/covers']]: 'Themes',
  [Route['game']]: 'Games',
  [Route['games']]: 'Games',
  [Route['registration']]: 'Games',
  [Route['registration/mailing']]: 'Games',
  [Route['registrations']]: 'Games',
  [Route['mailing']]: 'Games',
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
