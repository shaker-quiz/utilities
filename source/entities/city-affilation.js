export const CityAffilation = Object.freeze({
  'Branch': 'Branch',
  'Franchise': 'Franchise',
})

/** @satisfies {Array<keyof typeof CityAffilation>} */
export const CityAffilations = Object.freeze([
  'Branch',
  'Franchise',
])

/** @satisfies {Record<keyof typeof CityAffilation, string>} */
export const CityAffilationIcon = Object.freeze({
  'Branch': 'hero/outline/building-office-2',
  'Franchise': 'hero/outline/building-storefront',
})
