/**
 * @description Enumeration definition related to `Request.method`
 *
 * Related specifications:
 *  - HTTP/1.1 (Core Methods): {@link https://datatracker.ietf.org/doc/html/rfc7231#section-4.3}
 *  - PATCH: {@link https://datatracker.ietf.org/doc/html/rfc5789}
 *  - CONNECT: {@link https://datatracker.ietf.org/doc/html/rfc9110}
 *  - WebDAV Extensions {@link https://datatracker.ietf.org/doc/html/rfc4918}
 */
export var Methods = /** @type {const} */ ({
  'CONNECT': 'CONNECT',
  'COPY': 'COPY',
  'DELETE': 'DELETE',
  'GET': 'GET',
  'HEAD': 'HEAD',
  'LOCK': 'LOCK',
  'MKCOL': 'MKCOL',
  'MOVE': 'MOVE',
  'OPTIONS': 'OPTIONS',
  'PATCH': 'PATCH',
  'POST': 'POST',
  'PROPFIND': 'PROPFIND',
  'PROPPATCH': 'PROPPATCH',
  'PUT': 'PUT',
  'TRACE': 'TRACE',
  'UNLOCK': 'UNLOCK',
})
