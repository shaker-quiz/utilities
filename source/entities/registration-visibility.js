import { Quantifier } from './quantifier.js'

export const RegistrationVisibility = /** @type {const} */ ({
  'Visible': 'Visible',
  'Hidden': 'Hidden',
})

export const RegistrationVisibilities = Object.values(RegistrationVisibility)

export const CategoryRegistrationVisibilities = /** @type {const} */ ({
  [Quantifier['Any']]: [
    RegistrationVisibility['Visible'],
    RegistrationVisibility['Hidden'],
  ],

  [RegistrationVisibility['Visible']]: [
    RegistrationVisibility['Visible'],
  ],

  [RegistrationVisibility['Hidden']]: [
    RegistrationVisibility['Hidden'],
  ],
})
