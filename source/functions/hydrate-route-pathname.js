import { inferRoute, inferRouteParams, inferRoutePathname } from '../enumerations/route.js'

export const hydrateRoutePathname = Object.freeze(
  /**
   * @param {*} maybeRoute
   * @param {any[]} maybeRouteParams
   */
  (maybeRoute, maybeRouteParams) => {
    if (!Array.isArray(maybeRouteParams))
      throw TypeError(`Parameter 'maybeRouteParams' must be 'Array'.`)

    var route = inferRoute(maybeRoute)

    if (route === 'Unknown')
      throw TypeError(`Could not infer route of: '${maybeRoute}'.`)

    var routePathname = inferRoutePathname(route)

    if (routePathname === 'Unknown')
      throw TypeError(`Could not infer route pathname of: '${route}'.`)

    var routeParams = inferRouteParams(route)

    if (routeParams === 'Unknown')
      throw TypeError(`Could not infer route params of: '${route}'.`)

    return routeParams.reduce(
      (pathname, param, index) => pathname.replace(param, maybeRouteParams[index]),
      routePathname,
    )
  },
)
