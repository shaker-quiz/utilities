export const RegistrationLineup = Object.freeze({
  'Main': 'Main',
  'Reserve': 'Reserve',
})

export const RegistrationLineups = Object.freeze([
  RegistrationLineup['Main'],
  RegistrationLineup['Reserve'],
])

export const RegistrationLineupTitle = Object.freeze({
  [RegistrationLineup['Main']]: 'Основа',
  [RegistrationLineup['Reserve']]: 'Резерв',
})

export const RegistrationLineupIcon = Object.freeze({
  [RegistrationLineup['Main']]: 'hero/outline/user-circle',
  [RegistrationLineup['Reserve']]: 'hero/outline/pause-circle',
})

export const RegistrationLineupEmoji = Object.freeze({
  [RegistrationLineup['Main']]: '🟢',
  [RegistrationLineup['Reserve']]: '🟡',
})

export const ValueRegistrationLineup = Object.freeze({
  'false': RegistrationLineup['Main'],
  'true': RegistrationLineup['Reserve'],
})

export const RegistrationLineupShape = Object.freeze({
  [RegistrationLineup['Main']]: Object.freeze({
    is_reserve: false,
  }),

  [RegistrationLineup['Reserve']]: Object.freeze({
    is_reserve: true,
  }),
})

export const inferRegistrationLineup = Object.freeze(
  /** @returns {keyof typeof RegistrationLineup | 'Unknown'} */
  x => ValueRegistrationLineup[x?.is_reserve] ?? RegistrationLineup[x] ?? 'Unknown',
)

export const inferRegistrationLineupShape = Object.freeze(
  /** @returns {typeof RegistrationLineupShape[keyof typeof RegistrationLineupShape] | { is_reserve: null }} */
  x => RegistrationLineupShape[x] ?? { is_reserve: null },
)
