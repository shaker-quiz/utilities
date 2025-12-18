import { inferMethod } from '../enumerations/method.js'

import { hydrateRoutePathname } from './hydrate-route-pathname.js'

export const tag = Object.freeze(
  /**
   * @template {keyof typeof import('../enumerations/method.js').Method} M
   * @template {keyof typeof import('../enumerations/route.js').Route} R
   * @template {typeof import('../enumerations/route.js').RoutePathname[R]} P
   *
   * @param {M} method
   * @param {R} route
   * @param {any[]} params
   *
   * @returns {`${M}/${P}`}
   */
  (method, route, params) => {
    var method = inferMethod(method)

    if (method === 'Unknown')
      throw TypeError(`Could not infer method of: '${method}'.`)

    return method + '/' + hydrateRoutePathname(route, params)
  },
)

export const tagexp = Object.freeze(
  /**
   * @template {keyof typeof import('../enumerations/method.js').Method} M
   * @template {keyof typeof import('../enumerations/route.js').Route} R
   *
   * @param {M} method
   * @param {R} route
   * @param {any[]} params
   */
  (method, route, params) => new RegExp(`^${tag(method, route, params)}$`),
)
