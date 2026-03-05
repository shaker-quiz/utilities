/**
 * @param {URLSearchParams} collection
 */
export const set = (collection, key, value) => {
  var result = new URLSearchParams(collection)

  result.set(key, value)

  return result
}

/**
 * @param {URLSearchParams} collection
 */
export const remove = (collection, key) => {
  var result = new URLSearchParams(collection)

  result.delete(key)

  return result
}
