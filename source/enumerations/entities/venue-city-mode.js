export var VenueCityMode = /** @type {const} */ ({
  'any': 'any',
  'known': 'known',
  'unknown': 'unknown',
})

export var VenueCityModes = [
  VenueCityMode['any'],
  VenueCityMode['known'],
  VenueCityMode['unknown'],
]

export var DerivedVenueCityModes = [
  VenueCityMode['known'],
  VenueCityMode['unknown'],
]

export var VenueCityModeTitle = /** @type {const} */ ({
  [VenueCityMode['any']]: 'Любой',
  [VenueCityMode['known']]: 'Назначен',
  [VenueCityMode['unknown']]: 'Неизвестно',
})

export var VenueCityModeIcon = {
  [VenueCityMode['any']]: 'hero/outline/square-2-stack',
  [VenueCityMode['known']]: 'hero/outline/check',
  [VenueCityMode['unknown']]: 'hero/outline/no-symbol',
}

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
