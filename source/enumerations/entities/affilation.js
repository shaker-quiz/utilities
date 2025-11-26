export const Affilation = Object.freeze({
  'Branch': 'Branch',
  'Franchise': 'Franchise',
})

export const Affilations = Object.freeze([
  Affilation['Branch'],
  Affilation['Franchise'],
])

export const AffilationTitle = Object.freeze({
  [Affilation['Branch']]: 'Филиал',
  [Affilation['Franchise']]: 'Франшиза',
})

export const AffilationIcon = Object.freeze({
  [Affilation['Branch']]: 'hero/outline/building-office-2',
  [Affilation['Franchise']]: 'hero/outline/building-storefront',
})

const ValueAffilation = Object.freeze({
  [false]: Affilation['Branch'],
  [true]: Affilation['Franchise'],
})

const AffilationShape = Object.freeze({
  [Affilation['Branch']]: {
    is_franchise: false,
  },

  [Affilation['Franchise']]: {
    is_franchise: true,
  },
})

/** @returns {keyof typeof Affilation | 'Unknown'} */
export const inferAffilation = value =>
  ValueAffilation[value?.is_franchise]
    ?? ValueAffilation[value]
    ?? Affilation[value]
    ?? 'Unknown'

/** @returns {typeof AffilationShape[keyof typeof AffilationShape] | { is_franchise: null }} */
export const inferAffilationShape = value => AffilationShape[value] ?? { is_franchise: null }
