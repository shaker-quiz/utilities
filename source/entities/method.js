/**
 * Related specifications:
 *  - HTTP/1.1 (Core Methods): {@link https://datatracker.ietf.org/doc/html/rfc7231#section-4.3}
 *  - PATCH: {@link https://datatracker.ietf.org/doc/html/rfc5789}
 */
export const Methods = Object.freeze(
  /** @type {const} */ ([
    'DELETE',
    'GET',
    'OPTIONS',
    'PATCH',
    'POST',
    'PUT',
  ]),
)

export const Method = Object.freeze(
  /** @type {{ [x in typeof Methods[number]]: x }} */ (
    Methods.reduce(
      (o, x) => (o[x] = x, o),
      {},
    )
  ),
)
