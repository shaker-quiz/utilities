export var CitiesMode = /** @type {const} */ ({
  'all': 'all',
  'many': 'many',
  'single': 'single',
  'none': 'none',
})

export var CitiesModeTitle = {
  [CitiesMode.all]: 'Все города',
  [CitiesMode.many]: 'Несколько городов',
  [CitiesMode.single]: 'Один город',
  [CitiesMode.none]: 'Нет городов',
}

/**
 * @param {*} value
 */
export var getCitiesMode = value => {
  if (value === 'all')
    return CitiesMode.all
  else if (value.length > 1)
    return CitiesMode.many
  else if (value.length === 1)
    return CitiesMode.single
  else
    return CitiesMode.none
}
