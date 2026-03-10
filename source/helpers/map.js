/**
 * @param {Map} collection
 */
export const set = (collection, key, value) => {
  var result = new Map(collection)

  result.set(key, value)

  return result
}

/**
 * @param {Map} collection
 */
export const remove = (collection, key) => {
  var result = new Map(collection)

  result.delete(key)

  return result
}

export const clear = collection => {
  var result = new Map(collection)

  result.clear()

  return result
}
