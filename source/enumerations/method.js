/**
 * Related specifications:
 *  - HTTP/1.1 (Core Methods): {@link https://datatracker.ietf.org/doc/html/rfc7231#section-4.3}
 *  - PATCH: {@link https://datatracker.ietf.org/doc/html/rfc5789}
 */
export const Method = Object.freeze({
  'OPTIONS': 'OPTIONS',
  'GET': 'GET',
  'POST': 'POST',
  'PUT': 'PUT',
  'PATCH': 'PATCH',
  'DELETE': 'DELETE',
})

export const Methods = Object.freeze(Object.values(Method))

export const inferMethod = Object.freeze(
  /** @returns {keyof typeof Method | 'Unknown'} */
  x => Method[x] ?? 'Unknown',
)
