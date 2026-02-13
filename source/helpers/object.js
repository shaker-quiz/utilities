/**
 * @type {typeof Object.hasOwn}
 */
export const hasOwn = Object.hasOwn

/**
 * @param {object} o
 * @param {PropertyKey} v
 *
 * @returns {any}
 */
export const tryOwn = (o, v) => hasOwn(o, v) ? o[v] : undefined

/**
 * @param {object} o
 * @param {PropertyKey} v
 *
 * @throws {TypeError}
 *
 * @returns {any}
 */
export const getOwn = (o, v) => {
  if (!hasOwn(o, v))
    throw TypeError(`Property '${v}' is not assigned.`)

  if (tryOwn(o, v) === undefined)
    throw TypeError(`Property '${v}' is not undefined.`)

  return o[v]
}
