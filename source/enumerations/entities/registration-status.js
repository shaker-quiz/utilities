export var RegistrationStatus = /** @type {const} */ ({
  'Confirmed': 'Confirmed',
  'Created': 'Created',
  'Cancelled': 'Cancelled',
})

export var RegistrationStatuses = Object.values(RegistrationStatus)

export var RegistrationStatusWeight = {
  [RegistrationStatus.Confirmed]: 0,
  [RegistrationStatus.Created]: 1,
  [RegistrationStatus.Cancelled]: 2,
}

export var RegistrationStatusTitle = {
  [RegistrationStatus.Confirmed]: 'Подтверждена',
  [RegistrationStatus.Created]: 'Создана',
  [RegistrationStatus.Cancelled]: 'Отменена',
}

/** @type {Record<RegistrationStatus, Icon>} */
export var RegistrationStatusIcon = {
  [RegistrationStatus.Confirmed]: 'hero/outline/check-circle',
  [RegistrationStatus.Created]: 'hero/outline/check',
  [RegistrationStatus.Cancelled]: 'hero/outline/x-mark',
}

/** @type {Record<RegistrationStatus, Icon>} */
export var RegistrationStatusEmoji = {
  [RegistrationStatus.Confirmed]: '✅',
  [RegistrationStatus.Created]: '📝',
  [RegistrationStatus.Cancelled]: '❌',
}

/** @type {Record<RegistrationStatus, string>} */
export var RegistrationStatusColor = {
  [RegistrationStatus.Confirmed]: 'text-success',
  [RegistrationStatus.Created]: 'text-default-700',
  [RegistrationStatus.Cancelled]: 'text-danger',
}

/** @type {Record<RegistrationStatus, Pick<RegistrationTable, 'is_canceled' | 'is_confirm'>>} */
export var RegistrationStatusShape = {
  [RegistrationStatus.Confirmed]: {
    is_canceled: false,
    is_confirm: true,
  },

  [RegistrationStatus.Created]: {
    is_canceled: false,
    is_confirm: false,
  },

  [RegistrationStatus.Cancelled]: {
    is_canceled: true,
    is_confirm: false,
  },
}

/**
 * @param {RegistrationStatus | typeof RegistrationStatusShape[RegistrationStatus]} value
 */
export var getRegistrationStatus = value => {
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
