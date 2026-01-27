export const CityAffilations = Object.freeze(
  /** @type {const} */ ([
    'Branch',
    'Franchise',
  ]),
)

export const CityAffilation = Object.freeze(
  /** @type {{ [x in typeof CityAffilations[number]]: x }} */ (
    CityAffilations.reduce(
      (o, x) => (o[x] = x, o),
      {},
    )
  ),
)
