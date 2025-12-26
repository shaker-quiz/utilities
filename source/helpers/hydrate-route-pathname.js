import { checkRoute } from '../application/route.js'
import { inferRouteParams, inferRoutePathname } from '../system/route.js'

export const hydrateRoutePathname = Object.freeze(
  /**
   * @template {keyof typeof import('../system/route.js').Route} RouteTemplate
   *
   * @param {RouteTemplate} route
   * @param {any[]} params
   */
  (route, params) => {
    if (!Array.isArray(params))
      throw TypeError(`Parameter 'params' must be 'Array'.`)

    var $route = checkRoute(route)

    var $routePathname = inferRoutePathname($route)

    if ($routePathname === 'Unknown')
      throw TypeError(`Could not infer route pathname of: '${$route}'.`)

    var rpm = inferRouteParams($route)

    if (rpm === 'Unknown')
      throw TypeError(`Could not infer route params of: '${$route}'.`)

    return rpm.reduce(
      (pathname, param, index) => pathname.replace(param, params[index]),
      $routePathname,
    )
  },
)
