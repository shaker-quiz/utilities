import { Route, RouteParams, RoutePathname } from '../enumerations/route.js'
import { guardKey } from '../functions/infer.js'
import { isTag } from '../functions/tag.js'

export var hydrateRoutePathname = (maybeRoute, maybeRouteParams) => {
  if (isTag('Array', maybeRouteParams))
    throw TypeError(`Parameter 'maybeRouteParams' must be 'Array'.`)

  var route = guardKey(Route, maybeRoute)

  var pathname = guardKey(RoutePathname, route)

  var params = guardKey(RouteParams, route)

  return params.reduce(
    (pathname, param, index) => pathname.replace(param, maybeRouteParams[index]),
    pathname,
  )
}
