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
