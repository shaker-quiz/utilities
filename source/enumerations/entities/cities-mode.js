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
  [CitiesMode.unknown]: 'Неизвестно',
  [CitiesMode.all]: 'Все города',
  [CitiesMode.many]: 'Несколько городов',
  [CitiesMode.single]: 'Один город',
  [CitiesMode.none]: 'Нет городов',
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
