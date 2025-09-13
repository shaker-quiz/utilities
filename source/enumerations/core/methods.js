/**
 * Related specifications:
 *  - HTTP/1.1 (Core Methods): {@link https://datatracker.ietf.org/doc/html/rfc7231#section-4.3}
 *  - PATCH: {@link https://datatracker.ietf.org/doc/html/rfc5789}
 *  - CONNECT: {@link https://datatracker.ietf.org/doc/html/rfc9110}
 *  - WebDAV Extensions {@link https://datatracker.ietf.org/doc/html/rfc4918}
 */
export var Method = /** @type {const} */ ({
  'DELETE': 'DELETE',
  'GET': 'GET',
  'OPTIONS': 'OPTIONS',
  'PATCH': 'PATCH',
  'POST': 'POST',
})

export var Methods = Object.values(Method)
