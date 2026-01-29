export const Modes = Object.freeze(
  /** @type {const} */ ([
    'Known',
    'Unknown',
  ]),
)

export const Mode = Object.freeze(
  /** @type {{ [x in typeof Modes[number]]: x }} */ (
    Modes.reduce(
      (o, x) => (o[x] = x, o),
      {},
    )
  ),
)
