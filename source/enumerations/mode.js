import { Gender } from './gender.js'
import { Numerosity } from './numerosity.js'

export const Mode = Object.freeze({
  'Known': 'Known',
  'Unknown': 'Unknown',
})

export const Modes = Object.freeze([
  Mode['Known'],
  Mode['Unknown'],
])

export const ModeIcon = Object.freeze({
  [Mode['Known']]: 'hero/outline/check',
  [Mode['Unknown']]: 'hero/outline/no-symbol',
})

export const ModeTitle = Object.freeze({
  [Numerosity['Singular']]: Object.freeze({
    [Gender['Masculine']]: Object.freeze({
      [Mode['Known']]: 'Назначен',
      [Mode['Unknown']]: 'Не назначен',
    }),

    [Gender['Feminine']]: Object.freeze({
      [Mode['Known']]: 'Назначена',
      [Mode['Unknown']]: 'Не назначена',
    }),

    [Gender['Neuter']]: Object.freeze({
      [Mode['Known']]: 'Назначено',
      [Mode['Unknown']]: 'Не назначено',
    }),
  }),

  [Numerosity['Plural']]: Object.freeze({
    [Gender['Indeterminate']]: Object.freeze({
      [Mode['Known']]: 'Назначены',
      [Mode['Unknown']]: 'Не назначены',
    }),
  }),
})

export var inferMode = Object.freeze(
  /** @returns {typeof Mode[keyof typeof Mode]} */
  x => Mode[x?.mode ?? x] ?? 'Unknown',
)
