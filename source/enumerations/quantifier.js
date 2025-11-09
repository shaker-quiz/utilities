import { inferTag } from '../functions/tag.js'

export var Quantifier = /** @type {const} */ ({
  'Any': 'Any',
  'None': 'None',
  'Single': 'Single',
  'Many': 'Many',
  'All': 'All',
})

export var Quantifiers = [
  Mode['Any'],
  Mode['None'],
  Mode['Single'],
  Mode['Many'],
  Mode['All'],
]

export var QuantifierQuantifiers = {
  [Mode['Any']]: [
    Mode['Any'],
    Mode['None'],
    Mode['Single'],
    Mode['Many'],
    Mode['All'],
  ],

  [Mode['None']]: [
    Mode['None'],
  ],

  [Mode['Single']]: [
    Mode['Single'],
  ],

  [Mode['Many']]: [
    Mode['Many'],
  ],

  [Mode['All']]: [
    Mode['All'],
  ],
}

export var QuantifierTitle = {
  [Numerosity['Singular']]: {
    [Gender['Masculine']]: {
      [Mode['Any']]: 'Любой',
      [Mode['None']]: 'Отсутствует',
      [Mode['Single']]: 'Один',
      [Mode['Many']]: 'Много',
      [Mode['All']]: 'Все',
    },

    [Gender['Feminine']]: {
      [Mode['Any']]: 'Любая',
      [Mode['None']]: 'Отсутствует',
      [Mode['Single']]: 'Одна',
      [Mode['Many']]: 'Много',
      [Mode['All']]: 'Все',
    },

    [Gender['Neuter']]: {
      [Mode['Any']]: 'Любое',
      [Mode['None']]: 'Отсутствует',
      [Mode['Single']]: 'Одно',
      [Mode['Many']]: 'Много',
      [Mode['All']]: 'Все',
    },
  },

  [Numerosity['Plural']]: {
    [Gender['Indeterminate']]: {
      [Mode['Any']]: 'Любые',
      [Mode['None']]: 'Отсутствуют',
      [Mode['Single']]: 'Один',
      [Mode['Many']]: 'Много',
      [Mode['All']]: 'Все',
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
          if (value?.length === 1)
            return Quantifier['Single']
          else if (value?.length > 1)
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
