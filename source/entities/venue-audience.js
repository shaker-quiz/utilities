export const VenueAudiences = Object.freeze(
  /** @type {const} */ ([
    'Open',
    'Adults',
  ]),
)

export const VenueAudience = Object.freeze(
  /** @type {{ [x in typeof VenueAudiences[number]]: x }} */ (VenueAudiences.reduce(
    (o, x) => (o[x] = x, o),
    {},
  )),
)
