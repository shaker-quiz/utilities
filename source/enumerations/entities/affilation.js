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
  'false': Affilation['Branch'],
  'true': Affilation['Franchise'],
})

const AffilationShape = Object.freeze({
  [Affilation['Branch']]: Object.freeze({
    is_franchise: false,
  }),

  [Affilation['Franchise']]: Object.freeze({
    is_franchise: true,
  }),
})

/** @returns {keyof typeof Affilation | 'Unknown'} */
export const inferAffilation = Object.freeze(value =>
  ValueAffilation[value?.is_franchise]
    ?? ValueAffilation[value]
    ?? Affilation[value]
    ?? 'Unknown'
)

/** @returns {typeof AffilationShape[keyof typeof AffilationShape] | { is_franchise: null }} */
export const inferAffilationShape = Object.freeze(value =>
  AffilationShape[value]
    ?? { is_franchise: null }
)
