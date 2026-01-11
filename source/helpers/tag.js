import { Method } from '../entities/method.js'
import { hydrateRoutePathname } from './hydrate-route-pathname.js'
import { access } from '../helpers/access.js'

export const tag = Object.freeze(
  /**
   * @template {keyof typeof import('../system/method.js').Method} MethodTemplate
   * @template {keyof typeof import('../system/route.js').Route} RouteTemplate
   * @template {typeof import('../system/route.js').RoutePathname[RouteTemplate]} RoutePathnameTemplate
   *
   * @param {MethodTemplate} method
   * @param {RouteTemplate} route
   * @param {any[]} params
   *
   * @returns {`${MethodTemplate}/${RoutePathnameTemplate}`}
   */
  (method, route, params) => {
    var m = access(Method, method)

    return m + '/' + hydrateRoutePathname(route, params)
  },
)

export const tagexp = Object.freeze(
  /**
   * @template {keyof typeof import('../system/method.js').Method} MethodTemplate
   * @template {keyof typeof import('../system/route.js').Route} RouteTemplate
   *
   * @param {MethodTemplate} method
   * @param {RouteTemplate} route
   * @param {any[]} params
   */
  (method, route, params) => new RegExp(`^${tag(method, route, params)}$`),
)
