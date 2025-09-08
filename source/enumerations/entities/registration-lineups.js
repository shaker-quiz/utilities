export var RegistrationLineup = /** @type {const} */ ({
  'Main': 'Main',
  'Reserve': 'Reserve',
})

export var RegistrationLineups = Object.values(RegistrationLineup)

/** @type {Record<RegistrationLineup, number>} */
export var RegistrationLineupWeight = {
  [RegistrationLineup.Main]: 0,
  [RegistrationLineup.Reserve]: 1,
}

/** @type {Record<RegistrationLineup, string>} */
export var RegistrationLineupTitle = {
  [RegistrationLineup.Main]: 'Основа',
  [RegistrationLineup.Reserve]: 'Резерв',
}

/** @type {Record<RegistrationLineup, Icon>} */
export var RegistrationLineupIcon = {
  [RegistrationLineup.Main]: 'hero/outline/user-circle',
  [RegistrationLineup.Reserve]: 'hero/outline/pause-circle',
}

/** @type {Record<RegistrationLineup, string>} */
export var RegistrationLineupEmoji = {
  [RegistrationLineup.Main]: '🟢',
  [RegistrationLineup.Reserve]: '🟡',
}

/** @type {Record<RegistrationLineup, string>} */
export var RegistrationLineupColor = {
  [RegistrationLineup.Main]: 'text-primary',
  [RegistrationLineup.Reserve]: 'text-secondary',
}

/** @type {Record<RegistrationLineup, Pick<RegistrationTable, 'is_reserve'>>} */
export var RegistrationLineupShape = {
  [RegistrationLineup.Main]: {
    is_reserve: false,
  },

  [RegistrationLineup.Reserve]: {
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
