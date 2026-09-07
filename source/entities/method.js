/**
 * Related specifications:
 *  - HTTP/1.1 (Core Methods): {@link https://datatracker.ietf.org/doc/html/rfc7231#section-4.3}
 *  - PATCH: {@link https://datatracker.ietf.org/doc/html/rfc5789}
 */
export const Method = /** @type {const} */ ({
  'DELETE': 'DELETE',
  'GET': 'GET',
  'OPTIONS': 'OPTIONS',
  'PATCH': 'PATCH',
  'POST': 'POST',
  'PUT': 'PUT',
  'HEAD': 'HEAD',
})

export const Methods = Object.values(Method)
