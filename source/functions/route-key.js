import { Method } from '../enumerations/method.js'

import { hydrateRoutePathname } from './hydrate-route-pathname.js'
import { inferKey } from './infer-key.js'

/**
 * @param {any} maybeMethod
 * @param {any} maybeRoute
 * @param {any[]} maybeParameters
 */
export var routeKey = (maybeMethod, maybeRoute, maybeParameters) =>
  ''
  + inferKey(Method, maybeMethod)
  + '/'
  + hydrateRoutePathname(maybeRoute, maybeParameters)
