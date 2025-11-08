import { Method } from '../enumerations/method.js'
import { Mode } from '../enumerations/mode.js'
import { hydrateRoutePathname } from '../functions/hydrate-route-pathname.js'
import { guardKey } from '../functions/infer.js'

/**
 * @param {keyof typeof import('@shakerquiz/utilities').Method} maybeMethod
 * @param {keyof typeof import('@shakerquiz/utilities').Route} maybeRoute
 * @param {any[]} maybeParameters
 */
export var routeKey = (maybeMethod, maybeRoute, maybeParameters) => {
  var method = guardKey(Method, maybeMethod)

  if (method === Mode['Unknown'])
    throw TypeError(`Cannot infer method of '${maybeMethod}'.`)

  return method + '/' + hydrateRoutePathname(maybeRoute, maybeParameters)
}
