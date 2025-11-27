export const Affilation = Object.freeze({
  'Branch': 'Branch',
  'Franchise': 'Franchise',
})

export const Affilations = Object.freeze([
  Affilation['Branch'],
  Affilation['Franchise'],
  'Unknown',
])

export const AffilationTitle = Object.freeze({
  [Affilation['Branch']]: 'Филиал',
  [Affilation['Franchise']]: 'Франшиза',
  ['Unknown']: 'Неизвестно',
})

export const AffilationIcon = Object.freeze({
  [Affilation['Branch']]: 'hero/outline/building-office-2',
  [Affilation['Franchise']]: 'hero/outline/building-storefront',
  ['Unknown']: 'hero/outline/no-symbol',
})

/** @returns {keyof typeof Affilation | 'Unknown'} */
export const inferAffilation = Object.freeze(value =>
  Affilation[value?.affilation]
    ?? Affilation[value]
    ?? 'Unknown'
)
