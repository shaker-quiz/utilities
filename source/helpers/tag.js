import { Method } from '../entities/method.js'

import { hydrateRoutePathname } from './route-pathname.js'

/**
 * @template {keyof typeof  import('@shakerquiz/utilities').Method} M
 *
 * @param {M} maybeMethod
 * @param {string} maybeRoute
 * @param {any[]} maybeParams
 *
 * @example
 * tag('GET', 'cities', []) // => 'GET/cities'
 *
 * tag('GET', 'game/theme/cover', ['<game>']) // => 'GET/game/<game>/theme/:theme/:cover'
 *
 * tag('POST', 'city', []) // => 'POST/city/:city'
 */
export const tag = (maybeMethod, maybeRoute, maybeParams) => {
  if (!Object.hasOwn(Method, maybeMethod))
    throw TypeError(`Could not access Method['${maybeMethod}'].`)

  return ''
    + Method[maybeMethod]
    + '/'
    + hydrateRoutePathname(maybeRoute, maybeParams)
}

/**
 * @template {keyof typeof  import('@shakerquiz/utilities').Method} M
 *
 * @param {M} maybeMethod
 * @param {string} maybeRoute
 * @param {any[]} maybeParams
 */
export const tagexp = (maybeMethod, maybeRoute, maybeParams) =>
  new RegExp(`^${tag(maybeMethod, maybeRoute, maybeParams)}$`)
