import { Gender } from './gender.js'
import { Numerosity } from './numerosity.js'

export var Mode = /** @type {const} */ ({
  'Known': 'Known',
  'Unknown': 'Unknown',
})

export var Modes = [
  Mode['Known'],
  Mode['Unknown'],
]

export var ModeModes = {
  [Mode['Known']]: [
    Mode['Known'],
  ],

  [Mode['Unknown']]: [
    Mode['Unknown'],
  ],
}

export var ModeIcon = {
  [Mode['Known']]: 'hero/outline/check',
  [Mode['Unknown']]: 'hero/outline/no-symbol',
}

export var ModeTitle = {
  [Numerosity['Singular']]: {
    [Gender['Masculine']]: {
      [Mode['Known']]: 'Назначен',
      [Mode['Unknown']]: 'Не назначен',
    },

    [Gender['Feminine']]: {
      [Mode['Known']]: 'Назначена',
      [Mode['Unknown']]: 'Не назначена',
    },

    [Gender['Neuter']]: {
      [Mode['Known']]: 'Назначено',
      [Mode['Unknown']]: 'Не назначено',
    },
  },

  [Numerosity['Plural']]: {
    [Gender['Indeterminate']]: {
      [Mode['Known']]: 'Назначены',
      [Mode['Unknown']]: 'Не назначены',
    },
  },
}

/** @returns {typeof Mode[keyof typeof Mode]} */
var infer = value =>
  value in Mode
    ? Mode[value]
    : Mode['Unknown']

/**
 * @returns {typeof Mode[keyof typeof Mode]}
 */
export var inferMode = value => {
  switch (typeof value) {
    case 'string':
      return infer(value)

    case 'object':
      return infer(value?.mode)

    default:
      return infer(undefined)
  }
}
