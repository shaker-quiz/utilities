export const VenueStatuses = Object.freeze(
  /** @type {const} */ ([
    'Active',
    'Archive',
  ]),
)

export const VenueStatus = Object.freeze(
  /** @type {{ [x in typeof VenueStatuses[number]]: x }} */ (VenueStatuses.reduce(
    (o, x) => (o[x] = x, o),
    {},
  )),
)
