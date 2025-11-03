export var VenueCityMode = /** @type {const} */ ({
  'any': 'any',
  'known': 'known',
  'unknown': 'unknown',
})

export var VenueCityModes = Object.values(VenueCityMode)

export var VenueCityMode = /** @type {const} */ ({
  'any': 'Любой',
  'known': 'Назначен',
  'unknown': 'Неизвестно',
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
