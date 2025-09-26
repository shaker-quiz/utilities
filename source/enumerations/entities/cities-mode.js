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
  [CitiesMode.unknown]: 'Неизвестное состояние',
}

/**
 * @param {*} value
 */
export var getCitiesMode = value => {
  switch (typeof value) {
    case 'string':
      return value

    case 'object':
      if (value?.length === 1)
        return CitiesMode.single
      else if (value?.length > 1)
        return CitiesMode.many
      else
        return CitiesMode.unknown

    default:
      return CitiesMode.unknown
  }
}
