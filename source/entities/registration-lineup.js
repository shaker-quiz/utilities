import { Quantifier } from './quantifier.js'

export const RegistrationLineups = Object.freeze(
  /** @type {const} */ ([
    'Main',
    'Reserve',
    'Unspecified',
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
  'Unspecified': '⚫️',
})

export const CategoryRegistrationLineups = Object.freeze({
  [Quantifier['Any']]: Object.freeze([
    RegistrationLineup['Main'],
    RegistrationLineup['Reserve'],
  ]),

  [RegistrationLineup['Main']]: Object.freeze([
    RegistrationLineup['Main'],
  ]),

  [RegistrationLineup['Reserve']]: Object.freeze([
    RegistrationLineup['Reserve'],
  ]),
})
