export var CitiesMode = /** @type {const} */ ({
  'known': 'known',
  'unknown': 'unknown',
  'all': 'all',
  'many': 'many',
  'single': 'single',
  'none': 'none',
})

export var CitiesModes = Object.values(CitiesMode)

export var CitiesModeTitle = {
  [CitiesMode.known]: 'Любые',
  [CitiesMode.all]: 'Все',
  [CitiesMode.many]: 'Несколько',
  [CitiesMode.single]: 'Один',
  [CitiesMode.none]: 'Пусто',
  [CitiesMode.unknown]: 'Не назначено',
}

export var CitiesModeWeigth = {
  [CitiesMode.known]: 0,
  [CitiesMode.all]: 1,
  [CitiesMode.many]: 2,
  [CitiesMode.single]: 3,
  [CitiesMode.none]: 4,
  [CitiesMode.unknown]: 5,
}

/**
 * @param {*} value
 */
export var getCitiesMode = value => {
  switch (typeof value) {
    case 'string':
      return value

    case 'object':
      if (typeof value?.mode === 'string')
        return value.mode
      else
        return CitiesMode.unknown

    default:
      return CitiesMode.unknown
  }
}
