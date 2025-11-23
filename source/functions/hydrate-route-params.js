import { inferRoute, inferRouteParams } from '../enumerations/route.js'

export const hydrateRouteParams = Object.freeze((r, p) => {
  if (typeof p !== 'object' || p === null)
    throw TypeError(`Parameter 'maybeParams' must be 'Object'.`)

  var route = inferRoute(r)

  if (route === 'Unknown')
    throw TypeError(`Could not infer route of: '${r}'.`)

  var routeParams = inferRouteParams(route)

  if (routeParams === 'Unknown')
    throw TypeError(`Could not infer route params of: '${route}'.`)

  return routeParams.map(key => p[key.replace(':', '')] ?? key)
})
