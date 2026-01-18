import { RouteParameter } from '../entities/route-parameter.js'
import { RoutePathname } from '../entities/route-pathname.js'
import { Route } from '../entities/route.js'

import { access } from './access.js'

export const hydrateRoutePathname = Object.freeze(
  /**
   * @template {keyof typeof import('../system/route.js').Route} RouteTemplate
   *
   * @param {RouteTemplate} maybeRoute
   * @param {any[]} maybeParams
   */
  (maybeRoute, maybeParams) => {
    if (!Array.isArray(maybeParams))
      throw TypeError(`Parameter 'params' must be 'Array'.`)

    var route = access(Route, maybeRoute)

    var pathname = access(RoutePathname, route)

    var params = access(RouteParameter, route)

    return params
      .split('/')
      .reduce((pathname, param, index) => pathname.replace(param, maybeParams[index]), pathname)
  },
)
