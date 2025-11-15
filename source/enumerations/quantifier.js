import { Gender } from './gender.js'
import { Numerosity } from './numerosity.js'

export const Quantifier = Object.freeze({
  'Any': 'Any',
  'None': 'None',
  'Single': 'Single',
  'Many': 'Many',
  'All': 'All',
})

export const Quantifiers = Object.freeze([
  Quantifier['Any'],
  Quantifier['None'],
  Quantifier['Single'],
  Quantifier['Many'],
  Quantifier['All'],
])

export const QuantifierQuantifiers = Object.freeze({
  [Quantifier['Any']]: Object.freeze([
    Quantifier['Any'],
    Quantifier['None'],
    Quantifier['Single'],
    Quantifier['Many'],
    Quantifier['All'],
  ]),

  [Quantifier['None']]: Object.freeze([
    Quantifier['None'],
  ]),

  [Quantifier['Single']]: Object.freeze([
    Quantifier['Single'],
  ]),

  [Quantifier['Many']]: Object.freeze([
    Quantifier['Many'],
  ]),

  [Quantifier['All']]: Object.freeze([
    Quantifier['All'],
  ]),
})

export const QuantifierTitle = Object.freeze({
  [Numerosity['Singular']]: Object.freeze({
    [Gender['Masculine']]: Object.freeze({
      [Quantifier['Any']]: 'Любой',
      [Quantifier['None']]: 'Отсутствует',
      [Quantifier['Single']]: 'Один',
      [Quantifier['Many']]: 'Много',
      [Quantifier['All']]: 'Все',
    }),

    [Gender['Feminine']]: Object.freeze({
      [Quantifier['Any']]: 'Любая',
      [Quantifier['None']]: 'Отсутствует',
      [Quantifier['Single']]: 'Одна',
      [Quantifier['Many']]: 'Много',
      [Quantifier['All']]: 'Все',
    }),

    [Gender['Neuter']]: Object.freeze({
      [Quantifier['Any']]: 'Любое',
      [Quantifier['None']]: 'Отсутствует',
      [Quantifier['Single']]: 'Одно',
      [Quantifier['Many']]: 'Много',
      [Quantifier['All']]: 'Все',
    }),
  }),

  [Numerosity['Plural']]: Object.freeze({
    [Gender['Indeterminate']]: Object.freeze({
      [Quantifier['Any']]: 'Любые',
      [Quantifier['None']]: 'Отсутствуют',
      [Quantifier['Single']]: 'Один',
      [Quantifier['Many']]: 'Много',
      [Quantifier['All']]: 'Все',
    }),
  }),
})

export const inferQuantifier = Object.freeze(
  /** @returns {typeof Quantifier[keyof typeof Quantifier]} */
  x => Quantifier[x?.quantifier ?? x] ?? Quantifier['None'],
)
