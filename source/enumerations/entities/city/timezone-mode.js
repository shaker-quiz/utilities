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
var fromString = value =>
  value in CityTimezoneMode
    ? value
    : CityTimezoneMode['Unknown']

/**
 * @returns {keyof typeof CityTimezoneMode} value
 */
var fromObject = value =>
  value?.mode in CityTimezoneMode
    ? value.mode
    : CityTimezoneMode['Unknown']

export var inferCityTimezoneMode = value => {
  switch (typeof value) {
    case 'string':
      return fromString(value)

    case 'object':
      return fromObject(value)

    default:
      return CityTimezoneMode['Unknown']
  }
}
