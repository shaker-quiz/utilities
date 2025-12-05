import { inferMethod } from '../enumerations/method.js'

import { hydrateRoutePathname } from './hydrate-route-pathname.js'

export const tag = Object.freeze(
  /**
   * @template {keyof typeof import('../enumerations/method.js').Method} M
   * @template {keyof typeof import('../enumerations/route.js').Route} R
   * @template {typeof import('../enumerations/route.js').RoutePathname[R]} P
   *
   * @param {M} m
   * @param {R} r
   * @param {string[]} p
   *
   * @returns {`${M}/${P}`}
   */
  (m, r, p) => {
    var method = inferMethod(m)

    if (method === 'Unknown')
      throw TypeError(`Could not infer method of: '${m}'.`)

    return method + '/' + hydrateRoutePathname(r, p)
  },
)

export const tagexp = Object.freeze(
  /**
   * @template {keyof typeof import('../enumerations/method.js').Method} M
   * @template {keyof typeof import('../enumerations/route.js').Route} R
   *
   * @param {M} m
   * @param {R} r
   * @param {string[]} p
   */
  (m, r, p) => new RegExp(`^${tag(m, r, p)}$`),
)
