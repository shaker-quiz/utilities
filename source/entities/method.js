/**
 * Related specifications:
 *  - HTTP/1.1 (Core Methods): {@link https://datatracker.ietf.org/doc/html/rfc7231#section-4.3}
 *  - PATCH: {@link https://datatracker.ietf.org/doc/html/rfc5789}
 *  - QUERY: {@link https://datatracker.ietf.org/doc/draft-ietf-httpbis-safe-method-w-body/}
 */
export const Method = /** @type {const} */ ({
  'DELETE': 'DELETE',
  'GET': 'GET',
  'OPTIONS': 'OPTIONS',
  'PATCH': 'PATCH',
  'POST': 'POST',
  'PUT': 'PUT',
  'QUERY': 'QUERY',
  'HEAD': 'HEAD',
})

export const Methods = Object.values(Method)
