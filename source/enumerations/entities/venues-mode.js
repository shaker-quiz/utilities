export var VenuesMode = /** @type {const} */ ({
  'none': 'none',
  'single': 'single',
  'many': 'many',
  'unknown': 'unknown',
})

export var VenuesModes = Object.values(VenuesMode)

export var VenuesModeTitle = {
  [VenuesMode.none]: 'Пусто',
  [VenuesMode.single]: 'Один',
  [VenuesMode.many]: 'Несколько',
  [VenuesMode.unknown]: 'Не назначено',
}

export var VenuesModeWeigth = {
  [VenuesMode.none]: 0,
  [VenuesMode.single]: 1,
  [VenuesMode.many]: 2,
  [VenuesMode.unknown]: 3,
}

/**
 * @param {keyof typeof VenuesMode} value
 */
var getter = value =>
  value in VenuesMode
    ? value
    : VenuesMode['unknown']

export var getVenuesMode = value => {
  switch (typeof value) {
    case 'string':
      return getter(value)

    case 'object':
      return getter(value?.mode)

    default:
      return getter(undefined)
  }
}
