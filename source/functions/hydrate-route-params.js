import { inferRoute, inferRouteParams } from '../enumerations/route.js'

export const hydrateRouteParams = Object.freeze(
  /**
   * @param {*} maybeRoute
   * @param {object} maybeParams
   */
  (maybeRoute, maybeParams) => {
    if (typeof maybeParams !== 'object' || maybeParams === null)
      throw TypeError(`Parameter 'maybeParams' must be 'Object'.`)

    var route = inferRoute(maybeRoute)

    if (route === 'Unknown')
      throw TypeError(`Could not infer route of: '${maybeRoute}'.`)

    var routeParams = inferRouteParams(route)

    if (routeParams === 'Unknown')
      throw TypeError(`Could not infer route params of: '${route}'.`)

    return routeParams.map(key => maybeParams[key.replace(':', '')] ?? key)
  },
)
