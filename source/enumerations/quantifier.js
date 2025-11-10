import { inferTag } from '../functions/tag.js'

export var Quantifier = /** @type {const} */ ({
  'Any': 'Any',
  'None': 'None',
  'Single': 'Single',
  'Many': 'Many',
  'All': 'All',
})

export var Quantifiers = [
  Quantifier['Any'],
  Quantifier['None'],
  Quantifier['Single'],
  Quantifier['Many'],
  Quantifier['All'],
]

export var QuantifierQuantifiers = {
  [Quantifier['Any']]: [
    Quantifier['Any'],
    Quantifier['None'],
    Quantifier['Single'],
    Quantifier['Many'],
    Quantifier['All'],
  ],

  [Quantifier['None']]: [
    Quantifier['None'],
  ],

  [Quantifier['Single']]: [
    Quantifier['Single'],
  ],

  [Quantifier['Many']]: [
    Quantifier['Many'],
  ],

  [Quantifier['All']]: [
    Quantifier['All'],
  ],
}

export var QuantifierTitle = {
  [Numerosity['Singular']]: {
    [Gender['Masculine']]: {
      [Quantifier['Any']]: 'Любой',
      [Quantifier['None']]: 'Отсутствует',
      [Quantifier['Single']]: 'Один',
      [Quantifier['Many']]: 'Много',
      [Quantifier['All']]: 'Все',
    },

    [Gender['Feminine']]: {
      [Quantifier['Any']]: 'Любая',
      [Quantifier['None']]: 'Отсутствует',
      [Quantifier['Single']]: 'Одна',
      [Quantifier['Many']]: 'Много',
      [Quantifier['All']]: 'Все',
    },

    [Gender['Neuter']]: {
      [Quantifier['Any']]: 'Любое',
      [Quantifier['None']]: 'Отсутствует',
      [Quantifier['Single']]: 'Одно',
      [Quantifier['Many']]: 'Много',
      [Quantifier['All']]: 'Все',
    },
  },

  [Numerosity['Plural']]: {
    [Gender['Indeterminate']]: {
      [Quantifier['Any']]: 'Любые',
      [Quantifier['None']]: 'Отсутствуют',
      [Quantifier['Single']]: 'Один',
      [Quantifier['Many']]: 'Много',
      [Quantifier['All']]: 'Все',
    },
  },
}

/**
 * @returns {typeof Quantifier[keyof typeof Quantifier]}
 */
export var inferQuantifier = value => {
  switch (typeof value) {
    case 'string':
      return value in Quantifier
        ? Quantifier[value]
        : Quantifier['None']

    case 'object':
      switch (inferTag(value)) {
        case 'Object':
          return inferQuantifier(value?.quantifier)

        case 'Array':
          if (value.length === 1)
            return Quantifier['Single']
          else if (value.length > 1)
            return Quantifier['Many']
          else
            return Quantifier['None']

        case 'Map':
        case 'Set':
          if (value.size === 1)
            return Quantifier['Single']
          else if (value.size > 1)
            return Quantifier['Many']
          else
            return Quantifier['None']

        default:
          return Quantifier['None']
      }

    default:
      return Quantifier['None']
  }
}
