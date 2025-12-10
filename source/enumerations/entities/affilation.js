export const Affilation = Object.freeze({
  'Branch': 'Branch',
  'Franchise': 'Franchise',
})

/** @satisfies {Array<keyof typeof Affilation>} */
export const Affilations = Object.freeze([
  'Branch',
  'Franchise',
])

/** @satisfies {Record<keyof typeof Affilation, string>} */
export const AffilationTitle = Object.freeze({
  'Branch': 'Филиал',
  'Franchise': 'Франшиза',
})

/** @satisfies {Record<keyof typeof Affilation, string>} */
export const AffilationIcon = Object.freeze({
  'Branch': 'hero/outline/building-office-2',
  'Franchise': 'hero/outline/building-storefront',
})

/** @returns {keyof typeof Affilation | 'Unknown'} */
export const inferAffilation = Object.freeze(value =>
  Affilation[value?.affilation]
    ?? Affilation[value]
    ?? 'Unknown'
)
