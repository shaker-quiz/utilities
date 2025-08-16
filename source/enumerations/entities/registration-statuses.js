export var RegistrationStatuses = /** @type {const} */ ([
  'Cancelled',
  'Confirmed',
  'Registered',
])

/** @type {Record<RegistrationStatus, Pick<RegistrationTable, 'is_canceled' | 'is_confirm'>>} */
let RegistrationStatusShape = {
  'Cancelled': {
    is_canceled: true,
    is_confirm: false,
  },

  'Confirmed': {
    is_canceled: false,
    is_confirm: true,
  },

  'Registered': {
    is_canceled: false,
    is_confirm: false,
  },
}

/**
 * @param {RegistrationStatus | typeof RegistrationStatusShape[RegistrationStatus]} value
 */
export let getRegistrationStatus = value => {
  switch (typeof value) {
    case 'object':
      let found = Object
        .entries(RegistrationStatusShape)
        .find(([, object]) =>
          object.is_canceled === value.is_canceled
          && object.is_confirm === value.is_confirm
        )
        ?.at(0)

      if (!RegistrationStatuses.includes(found))
        throw TypeError(
          `[Function: getRegistrationStatus] Parameter 'found': '${found}' must be a member of 'RegistrationStatuses'.`,
        )

      return found

    case 'string':
      if (!RegistrationStatuses.includes(value))
        throw TypeError(
          `[Function: getRegistrationStatus] Parameter 'value': '${value}' must be a member of 'RegistrationStatuses'.`,
        )

      return RegistrationStatusShape[value]
  }
}
