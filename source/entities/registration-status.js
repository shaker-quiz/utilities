import { Quantifier } from './quantifier.js'

export const RegistrationStatus = /** @type {const} */ ({
  'Created': 'Created',
  'Confirmed': 'Confirmed',
  'Cancelled': 'Cancelled',
})

export const RegistrationStatuses = Object.values(RegistrationStatus)

export const RegistrationStatusEmoji = {
  [RegistrationStatus.Confirmed]: '✅',
  [RegistrationStatus.Created]: '📝',
  [RegistrationStatus.Cancelled]: '❌',
}

export const CategoryRegistrationStatuses = {
  [Quantifier.Any]: [
    RegistrationStatus.Created,
    RegistrationStatus.Confirmed,
    RegistrationStatus.Cancelled,
  ],

  [RegistrationStatus.Created]: [
    RegistrationStatus.Created,
  ],

  [RegistrationStatus.Confirmed]: [
    RegistrationStatus.Confirmed,
  ],

  [RegistrationStatus.Cancelled]: [
    RegistrationStatus.Cancelled,
  ],
}
