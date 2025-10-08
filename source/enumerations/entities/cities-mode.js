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
  [CitiesMode.known]: 'Известно',
  [CitiesMode.all]: 'Все города',
  [CitiesMode.many]: 'Несколько городов',
  [CitiesMode.single]: 'Один город',
  [CitiesMode.none]: 'Нет городов',
  [CitiesMode.unknown]: 'Неизвестно',
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
