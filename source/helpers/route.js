import { Segment } from '../entities/segment.js'

/**
 * @param {string} maybeString
 *
 * @example
 * route('user/role') // 'user/role'
 * route('game/registrations') // 'game/registrations'
 */
export const route = maybeString => {
  if (typeof maybeString !== 'string')
    throw TypeError(`Parameter 'maybeString' must be String.`)

  const segments = maybeString.split('/')

  if (segments.length < 1)
    throw TypeError(`Parameter 'maybeString' must contain at least one segment.`)

  for (const segment of segments)
    if (!Object.hasOwn(Segment, segment))
      throw TypeError(`Could not access segment Segment['${segment}'].`)

  return segments.join('/')
}

/**
 * @param {string} maybeRoute
 *
 * @example
 * routeBreakdown('users/role/search') // ['user/role']
 * routeBreakdown('games/search') // ['game']
 */
export const routeBreakdown = maybeRoute =>
  route(maybeRoute)
    .split('/')
    .filter(segment => ['Entity', 'Property', 'Aggregation', 'Operation'].includes(Segment[segment].kind))
    .map(segment => Segment[segment].singular)
    .join('/')

/**
 * @param {string} maybeRoute
 *
 * @example
 * routeCardinality('users/role/search') // 'n/1/1'
 * routeCardinality('games/search') // 'n/1'
 * routeCardinality('city/venues') // '1/n'
 * routeCardinality('cities/venues') // 'n/n'
 * routeCardinality('game') // '1'
 * routeCardinality('game/summary') // '1/1'
 */
export const routeCardinality = maybeRoute =>
  route(maybeRoute)
    .split('/')
    .map(segment => Segment[segment].cardinality)
    .join('/')

/**
 * @param {string} segment
 *
 * @example
 * segment('user') // 'user/:user'
 * segment('roles') // 'roles'
 */
export const segment = segment => {
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
export const routePathname = maybeRoute =>
  route(maybeRoute)
    .split('/')
    .map(segment)
    .join('/')

/**
 * @param {string} maybeRoute
 *
 * @example
 * routeParameters('user/role') // [':user', ':role']
 * routeParameters('game/registrations') // [':game']
 */
export const routeParameters = maybeRoute =>
  routePathname(maybeRoute)
    .split('/')
    .filter(x => x.includes(':'))

/**
 * @param {string} maybeRoute
 * @param {object} object
 *
 * @example
 * routeParametersFromObject('user/role', { ':user': 1, ':role': 2 }) // [1, 2]
 * routeParametersFromObject('game/registrations', { ':game': 1 }) // [1]
 */
export const takeRouteParametersFromObject = (maybeRoute, object) =>
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
 *
 * @example
 * routePropertiesFromObject('user/role', { user_id: 1, role_id: 2 }) // [1, 2]
 * routePropertiesFromObject('game/registrations', { game_id: 1 }) // [1]
 */
export const takeRoutePropertiesFromObject = (maybeRoute, object) =>
  routeProperties(maybeRoute)
    .map(prop => object[prop])
    .filter(Boolean)

/**
 * @param {string} maybeRoute
 * @param {any[]} maybeParams
 *
 * @example
 * hydrateRoutePathname('user/role', [1, 2]) // 'user/1/role/2'
 * hydrateRoutePathname('game/registrations', [1]) // 'game/1/registrations'
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

/**
 * @param {string} maybeRoute
 *
 * @example
 * routeService('user/role') // 'Users'
 * routeService('game/registrations') // 'Games'
 */
export const routeService = maybeRoute => {
  let [head] = route(maybeRoute).split('/')

  if (!Object.hasOwn(Segment, head))
    throw TypeError(`Could not access Segment['${head}'].`)

  if (Segment[head].service === null)
    throw TypeError(`Segment['${head}'] does not have a service.`)

  return Segment[head].service
}
