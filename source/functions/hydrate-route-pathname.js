import { inferRoute, inferRouteParams, inferRoutePathname } from '../enumerations/route.js'

export const hydrateRoutePathname = Object.freeze((r, p) => {
  if (!Array.isArray(p))
    throw TypeError(`Parameter 'maybeRouteParams' must be 'Array'.`)

  var route = inferRoute(r)

  if (route === 'Unknown')
    throw TypeError(`Could not infer route of: '${r}'.`)

  var routePathname = inferRoutePathname(route)

  if (routePathname === 'Unknown')
    throw TypeError(`Could not infer route pathname of: '${route}'.`)

  var routeParams = inferRouteParams(route)

  if (routeParams === 'Unknown')
    throw TypeError(`Could not infer route params of: '${route}'.`)

  return routeParams.reduce(
    (pathname, param, index) => pathname.replace(param, p[index]),
    routePathname,
  )
})
