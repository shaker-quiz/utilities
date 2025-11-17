import { inferMethod } from '../enumerations/method.js'

import { hydrateRoutePathname } from './hydrate-route-pathname.js'

/**
 * @param {any} maybeMethod
 * @param {any} maybeRoute
 * @param {any[]} maybeParameters
 */
export var routeKey = (maybeMethod, maybeRoute, maybeParameters) =>
  inferMethod(maybeMethod)
  + '/'
  + hydrateRoutePathname(maybeRoute, maybeParameters)
