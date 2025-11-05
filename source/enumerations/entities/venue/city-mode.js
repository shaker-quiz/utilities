export var VenueCityMode = /** @type {const} */ ({
  'Any': 'Any',
  'Known': 'Known',
  'Unknown': 'Unknown',
})

export var VenueCityModes = [
  VenueCityMode['Any'],
  VenueCityMode['Known'],
  VenueCityMode['Unknown'],
]

export var VenueCityModeTitle = /** @type {const} */ ({
  [VenueCityMode['Any']]: 'Любой',
  [VenueCityMode['Known']]: 'Назначен',
  [VenueCityMode['Unknown']]: 'Неизвестно',
})

export var VenueCityModeIcon = {
  [VenueCityMode['Any']]: 'hero/outline/square-2-stack',
  [VenueCityMode['Known']]: 'hero/outline/check',
  [VenueCityMode['Unknown']]: 'hero/outline/no-symbol',
}

/**
 * @returns {keyof typeof VenueCityMode}
 */
var inferString = value =>
  value in VenueCityMode
    ? value
    : VenueCityMode['Unknown']

export var inferVenueCityMode = value => {
  switch (typeof value) {
    case 'string':
      return inferString(value)

    case 'object':
      return inferString(value?.mode)

    default:
      return VenueCityMode['Unknown']
  }
}
