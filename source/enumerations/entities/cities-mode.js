export var CitiesMode = /** @type {const} */ ({
  'none': 'none',
  'single': 'single',
  'many': 'many',
  'all': 'all',
  'unknown': 'unknown',
})

export var CitiesModes = Object.values(CitiesMode)

export var CitiesModeTitle = {
  [CitiesMode.all]: 'Все',
  [CitiesMode.many]: 'Несколько',
  [CitiesMode.single]: 'Один',
  [CitiesMode.none]: 'Пусто',
  [CitiesMode.unknown]: 'Не назначено',
}

export var CitiesModeWeigth = {
  [CitiesMode.all]: 0,
  [CitiesMode.many]: 1,
  [CitiesMode.single]: 2,
  [CitiesMode.none]: 3,
  [CitiesMode.unknown]: 4,
}

/**
 * @param {keyof typeof CitiesMode} value
 */
var getter = value =>
  value in CitiesMode
    ? value
    : CitiesMode['unknown']

export var getCitiesMode = value => {
  switch (typeof value) {
    case 'string':
      return getter(value)

    case 'object':
      return getter(value?.mode)

    default:
      return getter(undefined)
  }
}
