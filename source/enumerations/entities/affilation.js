export var Affilation = /** @type {const} */ ({
  'Branch': 'Branch',
  'Franchise': 'Franchise',
})

export var Affilations = [
  Affilation['Branch'],
  Affilation['Franchise'],
]

export var AffilationTitle = {
  [Affilation['Branch']]: 'Филиал',
  [Affilation['Franchise']]: 'Франшиза',
}

export var AffilationIcon = {
  [Affilation['Branch']]: 'hero/outline/building-office-2',
  [Affilation['Franchise']]: 'hero/outline/building-storefront',
}

var ValueAffilation = {
  ['false']: Affilation['Branch'],
  ['true']: Affilation['Franchise'],
}

var AffilationShape = {
  [Affilation['Branch']]: {
    is_franchise: false,
  },

  [Affilation['Franchise']]: {
    is_franchise: true,
  },
}

/** @returns {keyof typeof Affilation | 'Unknown'} */
export var inferAffilation = value =>
  ValueAffilation[value?.is_franchise ?? value]
    ?? 'Unknown'

/** @returns {typeof AffilationShape[keyof typeof AffilationShape] | { readonly is_franchise: null }} */
export var inferAffilationShape = value =>
  AffilationShape[value]
    ?? { is_franchise: null }
