import { inferMethod } from '../enumerations/method.js'

import { hydrateRoutePathname } from './hydrate-route-pathname.js'

export const tag = Object.freeze(
  /**
   * @param {any} maybeMethod
   * @param {any} maybeRoute
   * @param {any[]} maybeParameters
   */
  (maybeMethod, maybeRoute, maybeParameters) => {
    var method = inferMethod(maybeMethod)

    if (method === 'Unknown')
      throw TypeError(`Could not infer method of: '${maybeMethod}'.`)

    return method + '/' + hydrateRoutePathname(maybeRoute, maybeParameters)
  },
)

export const tagexp = Object.freeze((maybeMethod, maybeRoute, maybeParameters) =>
  new RegExp(tag(maybeMethod, maybeRoute, maybeParameters))
)
