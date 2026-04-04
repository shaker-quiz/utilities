import { Quantifier } from './quantifier.js'

export const GameVisibility = /** @type {const} */ ({
  'Visible': 'Visible',
  'Hidden': 'Hidden',
})

export const GameVisibilities = Object.values(GameVisibility)

export const CategoryGameVisibilities = /** @type {const} */ ({
  [Quantifier['Any']]: [
    GameVisibility['Visible'],
    GameVisibility['Hidden'],
  ],

  [GameVisibility['Visible']]: [
    GameVisibility['Visible'],
  ],

  [GameVisibility['Hidden']]: [
    GameVisibility['Hidden'],
  ],
})
