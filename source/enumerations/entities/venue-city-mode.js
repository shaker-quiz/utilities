export var VenueCityMode = /** @type {const} */ ({
  'known': 'known',
  'unknown': 'unknown',
})

/**
 * @returns {keyof typeof VenueCityMode}
 */
var get = value =>
  value in VenueCityMode
    ? value
    : VenueCityMode['unknown']

export var getVenueCityMode = value => {
  switch (typeof value) {
    case 'string':
      return get(value)

    case 'object':
      return get(value?.mode)

    default:
      return get(undefined)
  }
}
