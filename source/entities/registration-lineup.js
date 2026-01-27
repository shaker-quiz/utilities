export const RegistrationLineups = Object.freeze(
  /** @type {const} */ ([
    'Main',
    'Reserve',
  ]),
)

export const RegistrationLineup = Object.freeze(
  /** @type {{ [x in typeof RegistrationLineups[number]]: x }} */ (
    RegistrationLineups.reduce(
      (o, x) => (o[x] = x, o),
      {},
    )
  ),
)

export const RegistrationLineupEmoji = Object.freeze({
  'Main': '🟢',
  'Reserve': '🟡',
})
