export const RegistrationStatus = Object.freeze({
  'Confirmed': 'Confirmed',
  'Created': 'Created',
  'Cancelled': 'Cancelled',
})

/** @satisfies {Array<keyof typeof RegistrationStatus>} */
export const RegistrationStatuses = Object.freeze([
  'Created',
  'Confirmed',
  'Cancelled',
])

/** @satisfies {Record<keyof typeof RegistrationStatus, string>} */
export const RegistrationStatusTitle = Object.freeze({
  'Confirmed': 'Подтверждена',
  'Created': 'Создана',
  'Cancelled': 'Отменена',
})

/** @satisfies {Record<keyof typeof RegistrationStatus, string>} */
export const RegistrationStatusIcon = Object.freeze({
  'Confirmed': 'hero/outline/check-circle',
  'Created': 'hero/outline/check',
  'Cancelled': 'hero/outline/x-mark',
})

/** @satisfies {Record<keyof typeof RegistrationStatus, string>} */
export const RegistrationStatusEmoji = Object.freeze({
  'Confirmed': '✅',
  'Created': '📝',
  'Cancelled': '❌',
})

export const inferRegistrationStatus = Object.freeze(
  /** @returns {keyof typeof RegistrationStatus | 'Unknown'} */
  x => RegistrationStatus[x?.status ?? x] ?? 'Unknown',
)
