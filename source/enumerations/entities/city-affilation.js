export var CityAffilation = /** @type {const} */ ({
  'Branch': 'Branch',
  'Franchise': 'Franchise',
})

export var CityAffilationWeight = {
  [CityAffilation.Branch]: 0,
  [CityAffilation.Franchise]: 1,
}

export var CityAffilations = Object.values(CityAffilation)
