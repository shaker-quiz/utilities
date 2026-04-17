/**
 * @param {object} o
 * @param {...PropertyKey} ks
 */
export const hasOwn = (o, ...ks) => {
  if (o === null)
    return false
  else if (o === undefined)
    return false
  else if (ks.length < 1)
    return false
  else
    return ks.every(v => Object.hasOwn(o, v))
}

/**
 * @param {object} o
 * @param {PropertyKey} k
 *
 * @returns {*}
 */
export const tryOwn = (o, k) => hasOwn(o, k) ? o[k] : undefined

/**
 * @param {object} o
 * @param {PropertyKey} k
 *
 * @throws {TypeError}
 *
 * @returns {any}
 */
export const getOwn = (o, k) => {
  if (!hasOwn(o, k))
    throw TypeError(`Property '${k}' is not assigned.`)

  var v = tryOwn(o, k)

  if (v === undefined)
    throw TypeError(`Property '${k}' is undefined.`)

  return v
}

/**
 * @param {object} o
 * @param {PropertyKey} k
 * @param {any} v
 */
export const setOwn = (o, k, v) => ({ ...o, [k]: v })

/**
 * @deprecated
 *
 * @param {object} o
 * @param {PropertyKey} k
 * @param {any} v
 */
export const set = setOwn

/**
 * @param {object} o
 * @param {...object} os
 */
export const assignOwn = (o, ...os) => Object.assign({}, o, ...os)

/**
 * @param {object} o
 * @param {PropertyKey} k
 */
export const removeOwn = (o, k) => {
  var { [k]: _, ...x } = o

  return x
}
