import { Method } from '../entities/method.js'

import { access } from './access.js'
import { hydrateRoutePathname } from './hydrate-route-pathname.js'

export const tag = Object.freeze(
  /**
   * @template {keyof typeof import('../system/method.js').Method} MethodTemplate
   * @template {keyof typeof import('../system/route.js').Route} RouteTemplate
   * @template {typeof import('../system/route.js').RoutePathname[RouteTemplate]} RoutePathnameTemplate
   *
   * @param {MethodTemplate} maybeMethod
   * @param {RouteTemplate} maybeRoute
   * @param {any[]} maybeParams
   *
   * @returns {`${MethodTemplate}/${RoutePathnameTemplate}`}
   */
  (maybeMethod, maybeRoute, maybeParams) => {
    var method = access(Method, maybeMethod)

    return method + '/' + hydrateRoutePathname(maybeRoute, maybeParams)
  },
)

export const tagexp = Object.freeze(
  /**
   * @template {keyof typeof import('../system/method.js').Method} MethodTemplate
   * @template {keyof typeof import('../system/route.js').Route} RouteTemplate
   *
   * @param {MethodTemplate} maybeMethod
   * @param {RouteTemplate} maybeRoute
   * @param {any[]} maybeParams
   */
  (maybeMethod, maybeRoute, maybeParams) => new RegExp(`^${tag(maybeMethod, maybeRoute, maybeParams)}$`),
)
