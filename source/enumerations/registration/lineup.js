export const RegistrationLineup = Object.freeze({
  'Main': 'Main',
  'Reserve': 'Reserve',
})

/** @satisfies {Array<keyof typeof RegistrationLineup>} */
export const RegistrationLineups = Object.freeze([
  'Main',
  'Reserve',
])

/** @satisfies {Record<keyof typeof RegistrationLineup, string>} */
export const RegistrationLineupTitle = Object.freeze({
  'Main': 'Основа',
  'Reserve': 'Резерв',
})

/** @satisfies {Record<keyof typeof RegistrationLineup, string>} */
export const RegistrationLineupIcon = Object.freeze({
  'Main': 'hero/outline/user-circle',
  'Reserve': 'hero/outline/pause-circle',
})

/** @satisfies {Record<keyof typeof RegistrationLineup, string>} */
export const RegistrationLineupEmoji = Object.freeze({
  'Main': '🟢',
  'Reserve': '🟡',
})

export const inferRegistrationLineup = Object.freeze(
  /** @returns {keyof typeof RegistrationLineup | 'Unknown'} */
  x => RegistrationLineup[x?.lineup ?? x] ?? 'Unknown',
)
