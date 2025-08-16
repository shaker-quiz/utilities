export var RegistrationLineups = /** @type {const} */ ([
  'Main',
  'Reserve',
])

/** @type {Record<RegistrationLineup, Pick<RegistrationTable, 'is_reserve'>>} */
let RegistrationLineupShape = {
  'Main': {
    is_reserve: false,
  },

  'Reserve': {
    is_reserve: true,
  },
}

/**
 * @param {RegistrationLineup | typeof RegistrationLineupShape[RegistrationLineup]} value
 */
export var getRegistrationLineup = value => {
  switch (typeof value) {
    case 'object':
      let found = Object
        .entries(RegistrationLineupShape)
        .find(([, object]) => object.is_reserve === value.is_reserve)
        ?.at(0)

      if (!RegistrationLineups.includes(found))
        throw TypeError(
          `[Function: getRegistrationLineup] Parameter 'found': '${found}' must be a member of 'Lineups'.`,
        )

      return found

    case 'string':
      if (!RegistrationLineups.includes(value))
        throw TypeError(
          `[Function: getRegistrationLineup] Parameter 'value': '${value}' must be a member of 'Lineups'.`,
        )

      return RegistrationLineupShape[value]
  }
}
