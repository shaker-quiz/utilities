export var Affilation = /** @type {const} */ ({
  'Branch': 'Branch',
  'Franchise': 'Franchise',
  'Unknown': 'Unknown',
})

export var Affilations = Object.values(Affilation)

export var AffilationWeight = {
  [Affilation['Branch']]: 0,
  [Affilation['Franchise']]: 1,
  [Affilation['Unknown']]: 2,
}

export var AffilationTitle = {
  [Affilation['Branch']]: 'Филиал',
  [Affilation['Franchise']]: 'Франшиза',
  [Affilation['Unknown']]: 'Неизвестно',
}

export var AffilationActionTitle = {
  [Affilation['Branch']]: '',
  [Affilation['Franchise']]: '',
  [Affilation['Unknown']]: '',
}

export var AffilationActionDescpription = {
  [Affilation['Branch']]: '',
  [Affilation['Franchise']]: '',
  [Affilation['Unknown']]: '',
}

export var AffilationColor = {
  [Affilation['Branch']]: 'primary',
  [Affilation['Franchise']]: 'secondary',
  [Affilation['Unknown']]: 'danger',
}

export var AffilationTextColor = {
  [Affilation['Branch']]: 'text-primary',
  [Affilation['Franchise']]: 'text-secondary',
  [Affilation['Unknown']]: 'text-danger',
}

/** @type {Record<Affilation, Icon>} */
export var AffilationIcon = {
  [Affilation['Branch']]: 'hero/outline/building-office-2',
  [Affilation['Franchise']]: 'hero/outline/building-storefront',
  [Affilation['Unknown']]: 'hero/outline/no-symbol',
}

/** @type {Record<Affilation, Pick<CityTable, 'is_franchise'>>} */
export var AffilationShape = {
  [Affilation['Branch']]: {
    is_franchise: false,
  },

  [Affilation['Franchise']]: {
    is_franchise: true,
  },

  [Affilation['Unknown']]: {
    is_franchise: null,
  },
}

export var AffilationShapes = Object.entries(AffilationShape)

/**
 * @param {Affilation | typeof AffilationShape[Affilation]} value
 */
export var getAffilation = value => {
  if (value === null)
    return Affilation['Unknown']

  switch (typeof value) {
    case 'object':
      return AffilationShapes
        .find(([, object]) => object.is_franchise === value.is_franchise)
        ?.at(0)
        ?? Affilation['Unknown']

    case 'string':
      return value in AffilationShape
        ? AffilationShape[value]
        : AffilationShape[Affilation['Unknown']]

    default:
      return Affilation['Unknown']
  }
}
