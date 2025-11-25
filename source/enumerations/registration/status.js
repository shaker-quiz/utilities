export const RegistrationStatus = Object.freeze({
  'Confirmed': 'Confirmed',
  'Created': 'Created',
  'Cancelled': 'Cancelled',
})

export const RegistrationStatuses = Object.freeze([
  RegistrationStatus['Created'],
  RegistrationStatus['Confirmed'],
  RegistrationStatus['Cancelled'],
])

export const RegistrationStatusTitle = Object.freeze({
  [RegistrationStatus['Confirmed']]: 'Подтверждена',
  [RegistrationStatus['Created']]: 'Создана',
  [RegistrationStatus['Cancelled']]: 'Отменена',
})

export const RegistrationStatusIcon = Object.freeze({
  [RegistrationStatus['Confirmed']]: 'hero/outline/check-circle',
  [RegistrationStatus['Created']]: 'hero/outline/check',
  [RegistrationStatus['Cancelled']]: 'hero/outline/x-mark',
})

export const RegistrationStatusEmoji = Object.freeze({
  [RegistrationStatus['Confirmed']]: '✅',
  [RegistrationStatus['Created']]: '📝',
  [RegistrationStatus['Cancelled']]: '❌',
})

const ValueRegistrationStatus = Object.freeze({
  'false/false': RegistrationStatus['Created'],
  'false/true': RegistrationStatus['Confirmed'],
  'true/false': RegistrationStatus['Cancelled'],
})

const RegistrationStatusShape = Object.freeze({
  [RegistrationStatus['Created']]: Object.freeze({
    is_canceled: false,
    is_confirm: false,
  }),

  [RegistrationStatus['Confirmed']]: Object.freeze({
    is_canceled: false,
    is_confirm: true,
  }),

  [RegistrationStatus['Cancelled']]: Object.freeze({
    is_canceled: true,
    is_confirm: false,
  }),
})

export const inferRegistrationStatus = Object.freeze(
  /** @returns {keyof typeof RegistrationStatus | 'Unknown'} */
  x => ValueRegistrationStatus[x?.is_canceled + '/' + x?.is_confirm] ?? ValueRegistrationStatus[x] ?? 'Unknown',
)

export const inferRegistrationStatusShape = Object.freeze(
  /** @returns {typeof RegistrationStatusShape[keyof typeof RegistrationStatusShape] | { is_canceled: null, is_confirm: null }} */
  x => RegistrationStatusShape[x] ?? { is_canceled: null, is_confirm: null },
)
