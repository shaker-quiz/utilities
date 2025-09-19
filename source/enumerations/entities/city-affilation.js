export var CityAffilation = /** @type {const} */ ({
  'Branch': 'Branch',
  'Franchise': 'Franchise',
})

export var CityAffilations = Object.values(CityAffilation)

export var CityAffilationWeight = {
  [CityAffilation.Branch]: 0,
  [CityAffilation.Franchise]: 1,
}

export var CityAffilationTitle = {
  [CityAffilation.Branch]: 'Филиал',
  [CityAffilation.Franchise]: 'Франшиза',
}

export var CityAffilationActionTitle = {
  [CityAffilation.Branch]: 'Назначить филиалом',
  [CityAffilation.Franchise]: 'Назначить франшизой',
}

export var CityAffilationActionDescpription = {
  [CityAffilation.Branch]: 'Изменить тип на: Филиал',
  [CityAffilation.Franchise]: 'Изменить тип на: Франшиза',
}

export var CityAffilationColor = {
  [CityAffilation.Branch]: 'primary',
  [CityAffilation.Franchise]: 'secondary',
}

export var CityAffilationTextColor = {
  [CityAffilation.Branch]: 'text-primary',
  [CityAffilation.Franchise]: 'text-secondary',
}

/** @type {Record<CityAffilation, Icon>} */
export var CityAffilation = {
  [CityAffilation.Branch]: 'hero/outline/building-office-2',
  [CityAffilation.Franchise]: 'hero/outline/building-storefront',
}
