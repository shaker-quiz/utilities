export var CityVenuesMode = /** @type {const} */ ({
  'Any': 'Any',
  'None': 'None',
  'Single': 'Single',
  'Many': 'Many',
  'Unknown': 'Unknown',
})

export var CityVenuesModes = [
  CityVenuesMode['Any'],
  CityVenuesMode['None'],
  CityVenuesMode['Single'],
  CityVenuesMode['Many'],
  CityVenuesMode['Unknown'],
]

export var CityVenuesModeTitle = {
  [CityVenuesMode['None']]: 'Любые',
  [CityVenuesMode['None']]: 'Пусто',
  [CityVenuesMode['Single']]: 'Одно',
  [CityVenuesMode['Many']]: 'Несколько',
  [CityVenuesMode['Unknown']]: 'Неизвестно',
}

export var CityVenuesModeIcon = {
  [CityVenuesMode['Any']]: 'hero/outline/square-2-stack',
  [CityVenuesMode['None']]: 'hero/outline/no-symbol',
  [CityVenuesMode['Single']]: 'hero/outline/no-symbol',
  [CityVenuesMode['Many']]: 'hero/outline/no-symbol',
  [CityVenuesMode['Unknown']]: 'hero/outline/no-symbol',
}

/**
 * @returns {keyof typeof CityVenuesMode} value
 */
var fromString = value =>
  value in CityVenuesMode
    ? value
    : CityVenuesMode['Unknown']

/**
 * @returns {keyof typeof CityVenuesMode} value
 */
var fromObject = value =>
  value?.mode in CityVenuesMode
    ? value.mode
    : CityVenuesMode['Unknown']

export var inferCityVenuesMode = value => {
  switch (typeof value) {
    case 'string':
      return fromString(value)

    case 'object':
      return fromObject(value)

    default:
      return CityVenuesMode['Unknown']
  }
}
