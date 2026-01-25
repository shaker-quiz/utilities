import { Method } from '../entities/method.js'

import { access } from './access.js'
import { hydrateRoutePathname, parametrizeRoutePathname } from './route-pathname.js'

/**
 * @template {keyof typeof  import('@shakerquiz/utilities').Method} M
 * @template {keyof typeof  import('@shakerquiz/utilities').Route} R
 *
 * @param {M} maybeMethod
 * @param {R} maybeRoute
 * @param {any[]} maybeParams
 *
 * @returns {`${M}/${ReturnType<typeof hydrateRoutePathname<R>>}`}
 *
 * @example
 * tag('GET', 'cities', []) // => 'GET/cities'
 *
 * tag('GET', 'game/theme/cover', ['<g>']) // => 'GET/game/<g>/theme/:theme/:cover'
 *
 * tag('POST', 'city', []) // => 'POST/city/:city'
 */
export const tag = (maybeMethod, maybeRoute, maybeParams) => {
  var method = access(Method, maybeMethod)

  return method + '/' + hydrateRoutePathname(maybeRoute, maybeParams)
}

/**
 * @template {keyof typeof  import('@shakerquiz/utilities').Method} M
 * @template {keyof typeof  import('@shakerquiz/utilities').Route} R
 *
 * @param {M} maybeMethod
 * @param {R} maybeRoute
 * @param {any[]} maybeParams
 *
 * @returns {`${M}/${ReturnType<typeof parametrizeRoutePathname<R>>}`}
 *
 * @example
 * tagplate('GET', 'cities', []) // => 'GET/cities'
 *
 * tagplate('GET', 'game/theme/cover', ['<g>']) // => 'GET/game/<g>/theme/<related pattern>/<related pattern>'
 *
 * tagplate('POST', 'city', []) // => 'POST/city/<related pattern>'
 */
export const tagplate = (maybeMethod, maybeRoute, maybeParams) => {
  var method = access(Method, maybeMethod)

  return method + '/' + parametrizeRoutePathname(maybeRoute, maybeParams)
}

/**
 * @template {keyof typeof  import('@shakerquiz/utilities').Method} M
 * @template {keyof typeof  import('@shakerquiz/utilities').Route} R
 *
 * @param {M} maybeMethod
 * @param {R} maybeRoute
 * @param {any[]} maybeParams
 */
export const tagexp = (maybeMethod, maybeRoute, maybeParams) =>
  new RegExp(`^${tagplate(maybeMethod, maybeRoute, maybeParams)}$`)
