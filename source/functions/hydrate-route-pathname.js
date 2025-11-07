import { guardRoute, guardRouteParams, guardRoutePathname } from '../enumerations/route.js'
import { isTag } from '../functions/tag.js'

export var hydrateRoutePathname = (maybeRoute, maybeRouteParams) => {
  if (isTag('Array', maybeRouteParams))
    throw TypeError(`Parameter 'maybeRouteParams' must be 'Array'.`)

  var route = guardRoute(maybeRoute)

  var pathname = guardRoutePathname(route)

  var params = guardRouteParams(route)

  return params.reduce(
    (pathname, param, index) => pathname.replace(param, maybeRouteParams[index]),
    pathname,
  )
}
