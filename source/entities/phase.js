export const Phases = Object.freeze(
  /** @type {const} */ ([
    'Idle',
    'Loading',
    'Loaded',
    'Aborted',
    'Failed',
  ]),
)

export const Phase = Object.freeze(
  /** @type {{ [x in typeof Phases[number]]: x }} */ (
    Phases.reduce(
      (o, x) => (o[x] = x, o),
      {},
    )
  ),
)
