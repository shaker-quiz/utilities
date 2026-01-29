export const Roles = Object.freeze(
  /** @type {const} */ ([
    'admin',
    'organizer',
    'captain',
    'player',
    'user',
    'manager',
    'Service',
  ]),
)

export const Role = Object.freeze(
  /** @type {{ [x in typeof Roles[number]]: x }} */ (
    Roles.reduce(
      (o, x) => (o[x] = x, o),
      {},
    )
  ),
)
