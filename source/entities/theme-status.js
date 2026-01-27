export const ThemeStatuses = Object.freeze(
  /** @type {const} */ ([
    'Active',
    'Archive',
  ]),
)

export const ThemeStatus = Object.freeze(
  /** @type {{ [x in typeof ThemeStatuses[number]]: x }} */ (ThemeStatuses.reduce(
    (o, x) => (o[x] = x, o),
    {},
  )),
)
