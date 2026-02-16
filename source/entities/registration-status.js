import { Quantifier } from './quantifier.js'

export const RegistrationStatuses = Object.freeze(
  /** @type {const} */ ([
    'Created',
    'Confirmed',
    'Cancelled',
  ]),
)

export const RegistrationStatus = Object.freeze(
  /** @type {{ [x in typeof RegistrationStatuses[number]]: x }} */ (
    RegistrationStatuses.reduce(
      (o, x) => (o[x] = x, o),
      {},
    )
  ),
)

/** @satisfies {Record<keyof typeof RegistrationStatus, string>} */
export const RegistrationStatusEmoji = Object.freeze({
  'Confirmed': '✅',
  'Created': '📝',
  'Cancelled': '❌',
})

export const CategoryRegistrationStatuses = Object.freeze({
  [Quantifier['Any']]: Object.freeze([
    RegistrationStatus['Created'],
    RegistrationStatus['Confirmed'],
    RegistrationStatus['Cancelled'],
  ]),

  [RegistrationStatus['Created']]: Object.freeze([
    RegistrationStatus['Created'],
  ]),

  [RegistrationStatus['Confirmed']]: Object.freeze([
    RegistrationStatus['Confirmed'],
  ]),

  [RegistrationStatus['Cancelled']]: Object.freeze([
    RegistrationStatus['Cancelled'],
  ]),
})
