import { Segment } from '../entities/segment.js'

/**
 * @param {string} segment
 *
 * @example
 * routeSegment('user') // 'user/:user'
 * routeSegment('roles') // 'roles'
 */
export const routeSegment = segment => {
  if (!Object.hasOwn(Segment, segment))
    throw TypeError(`Could not access Segment['${segment}'].`)

  if (Segment[segment].pattern === null)
    return segment
  else if (Segment[segment].cardinality === '1')
    return `${segment}/:${segment}`
  else
    return segment
}

/**
 * @param {string} maybeRoute
 *
 * @example
 * routePathname('user/role') // 'user/:user/role/:role'
 * routePathname('game/registrations') // 'game/:game/registrations'
 */
export const routePathname = maybeRoute => {
  if (typeof maybeRoute !== 'string')
    throw TypeError(`Parameter 'route' must be String.`)

  const segments = maybeRoute.split('/')

  if (segments.length < 1)
    throw TypeError(`Parameter 'route' must contain at least one segment.`)

  return segments
    .map(routeSegment)
    .join('/')
}

/**
 * @param {string} maybeRoute
 */
export const routeParameters = maybeRoute =>
  routePathname(maybeRoute)
    .split('/')
    .filter(x => x.includes(':'))

/**
 * @param {string} maybeRoute
 * @param {object} object
 */
export const routeParametersFromObject = (maybeRoute, object) =>
  routeParameters(maybeRoute)
    .map(prop => object[prop])
    .filter(Boolean)

/**
 * @param {string} maybeRoute
 *
 * @example
 * routeProperties('user/role') // ['user_id', 'role_id']
 * routeProperties('game/registrations') // ['game_id']
 */
export const routeProperties = maybeRoute =>
  routeParameters(maybeRoute)
    .map(parameter => parameter.replace(':', '') + '_id')

/**
 * @param {string} maybeRoute
 * @param {object} object
 */
export const routePropertiesFromObject = (maybeRoute, object) =>
  routeProperties(maybeRoute)
    .map(prop => object[prop])
    .filter(Boolean)

/**
 * @param {string} maybeRoute
 * @param {any[]} maybeParams
 */
export const hydrateRoutePathname = (maybeRoute, maybeParams) => {
  if (!Array.isArray(maybeParams))
    throw TypeError(`Parameter 'params' must be Array.`)

  const pathname = routePathname(maybeRoute)

  const parameters = routeParameters(maybeRoute)

  return parameters.reduce(
    (accumulator, parameter, index) =>
      Object.hasOwn(maybeParams, index)
        ? accumulator.replace(parameter, maybeParams[index])
        : accumulator,
    pathname,
  )
}
