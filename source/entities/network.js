export const Networks = Object.freeze(
  /** @type {const} */ ([
    'Docker',
    'Public',
  ]),
)

export const Network = Object.freeze(
  /** @type {{ [x in typeof Networks[number]]: x }} */ (
    Networks.reduce(
      (o, x) => (o[x] = x, o),
      {},
    )
  ),
)
