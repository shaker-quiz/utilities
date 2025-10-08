export var CitiesMode = /** @type {const} */ ({
  'all': 'all',
  'many': 'many',
  'single': 'single',
  'none': 'none',
  'unknown': 'unknown',
})

export var CitiesModes = Object.values(CitiesMode)

export var CitiesModeTitle = {
  [CitiesMode.all]: 'Все города',
  [CitiesMode.many]: 'Несколько городов',
  [CitiesMode.single]: 'Один город',
  [CitiesMode.none]: 'Нет городов',
  [CitiesMode.unknown]: 'Неизвестно',
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
