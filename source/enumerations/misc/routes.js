export var Route = /** @type {const} */ ({
  'role': 'role',
  'roles': 'roles',
  'user': 'user',
  'users': 'users',
  'user/cities': 'user/cities',
  'users/cities': 'users/cities',
  'city': 'city',
  'city/venues': 'city/venues',
  'venue': 'venue',
  'theme': 'theme',
  'themes': 'themes',
  'theme/cover': 'theme/cover',
  'themes/covers': 'themes/covers',
  'game': 'game',
  'games': 'games',
  'registration': 'registration',
  'registrations': 'registrations',
})

export var Routes = Object.values(Route)

export var RoutePathname = /** @type {const} */ ({
  [Route['role']]: 'role/:role',
  [Route['roles']]: 'roles',
  [Route['user']]: 'user/:user',
  [Route['users']]: 'users',
  [Route['user/cities']]: 'user/:user/cities',
  [Route['users/cities']]: 'users/cities',
  [Route['city']]: 'city/:city',
  [Route['city/venues']]: 'city/:city/venues',
  [Route['venue']]: 'venue/:venue',
  [Route['theme']]: 'theme/:theme',
  [Route['themes']]: 'themes',
  [Route['theme/cover']]: 'theme/:theme/cover',
  [Route['themes/covers']]: 'themes/covers',
  [Route['game']]: 'game/:game',
  [Route['games']]: 'games',
  [Route['registration']]: 'registration/:registration',
  [Route['registrations']]: 'registrations',
})

export var RoutePathnames = Object.values(RoutePathname)
