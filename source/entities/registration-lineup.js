import { Quantifier } from './quantifier.js'

export const RegistrationLineup = /** @type {const} */ ({
  'Main': 'Main',
  'Reserve': 'Reserve',
  'Unspecified': 'Unspecified',
})

export const RegistrationLineups = Object.values(RegistrationLineup)

export const RegistrationLineupEmoji = {
  'Main': '🟢',
  'Reserve': '🟡',
  'Unspecified': '⚫️',
}

export const CategoryRegistrationLineups = {
  [Quantifier.Any]: [
    RegistrationLineup.Main,
    RegistrationLineup.Reserve,
  ],

  [RegistrationLineup.Main]: [
    RegistrationLineup.Main,
  ],

  [RegistrationLineup.Reserve]: [
    RegistrationLineup.Reserve,
  ],
}
