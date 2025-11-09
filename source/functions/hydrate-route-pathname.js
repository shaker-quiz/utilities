import { Route, RouteParams, RoutePathname } from '../enumerations/route.js'

import { inferKey } from './infer-key.js'
import { isTag } from './tag.js'

/**
 * @param {*} maybeRoute
 * @param {any[]} maybeRouteParams
 */
export var hydrateRoutePathname = (maybeRoute, maybeRouteParams) => {
  if (!isTag('Array', maybeRouteParams))
    throw TypeError(`Parameter 'maybeRouteParams' must be 'Array'.`)

  var route = inferKey(Route, maybeRoute)

  var pathname = inferKey(RoutePathname, route)

  var params = inferKey(RouteParams, route)

  return params.reduce(
    (pathname, param, index) => pathname.replace(param, maybeRouteParams[index]),
    pathname,
  )
}
