import { Mode } from './mode.js'

/**
 * Related specifications:
 *  - HTTP/1.1 (Core Methods): {@link https://datatracker.ietf.org/doc/html/rfc7231#section-4.3}
 *  - PATCH: {@link https://datatracker.ietf.org/doc/html/rfc5789}
 */
export var Method = /** @type {const} */ ({
  'OPTIONS': 'OPTIONS',
  'GET': 'GET',
  'POST': 'POST',
  'PUT': 'PUT',
  'PATCH': 'PATCH',
  'DELETE': 'DELETE',
})

export var Methods = [
  Method['OPTIONS'],
  Method['GET'],
  Method['POST'],
  Method['PUT'],
  Method['PATCH'],
  Method['DELETE'],
]

/**
 * @returns {typeof Method[keyof typeof Method] | typeof Mode['Unknown']}
 */
export var inferMethod = value =>
  value in Method
    ? Method[value]
    : Mode['Unknown']

/**
 * @throws {TypeError}
 */
export var guardMethod = value => {
  var method = inferMethod(value)

  if (method === Mode['Unknown'])
    throw TypeError(`Cannot infer Method for '${value}'.`)

  return method
}
