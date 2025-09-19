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

/** @type {Record<CityAffilation, Pick<CityTable, 'is_franchise'>>} */
export var CityAffilationShape = {
  [CityAffilation.Branch]: {
    is_franchise: false,
  },

  [CityAffilation.Reserve]: {
    is_franchise: true,
  },
}

export var CityAffilationShapes = Object.entries(CityAffilationShape)

/**
 * @param {CityAffilation | typeof CityAffilationShape[CityAffilation]} value
 */
export var getCityAffilation = value => {
  switch (typeof value) {
    case 'object':
      let found = CityAffilationShapes
        .find(([, object]) => object.is_franchise === value.is_reserve)
        ?.at(0)

      if (!CityAffilations.includes(found))
        throw TypeError(
          `[Function: getCityAffilation] Parameter 'found': '${found}' must be a member of 'Lineups'.`,
        )

      return found

    case 'string':
      if (!CityAffilations.includes(value))
        throw TypeError(
          `[Function: getCityAffilation] Parameter 'value': '${value}' must be a member of 'Lineups'.`,
        )

      return CityAffilationShape[value]
  }
}
