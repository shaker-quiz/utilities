export var CityTimezoneMode = /** @type {const} */ ({
  'Any': 'Any',
  'Known': 'Known',
  'Unknown': 'Unknown',
})

export var CityTimezoneModes = [
  CityTimezoneMode['Any'],
  CityTimezoneMode['Known'],
  CityTimezoneMode['Unknown'],
]

export var CityTimezoneModeTitle = {
  [CityTimezoneMode['Any']]: 'Любой',
  [CityTimezoneMode['Known']]: 'Назначено',
  [CityTimezoneMode['Unknown']]: 'Неизвестно',
}

export var CityTimezoneModeIcon = {
  [CityTimezoneMode['Any']]: 'hero/outline/square-2-stack',
  [CityTimezoneMode['Known']]: 'hero/outline/check',
  [CityTimezoneMode['Unknown']]: 'hero/outline/no-symbol',
}

/**
 * @returns {keyof typeof CityTimezoneMode} value
 */
var inferString = value =>
  value in CityTimezoneMode
    ? value
    : CityTimezoneMode['Unknown']

export var inferCityTimezoneMode = value => {
  switch (typeof value) {
    case 'string':
      return inferString(value)

    case 'object':
      return inferString(value?.mode)

    default:
      return CityTimezoneMode['Unknown']
  }
}
