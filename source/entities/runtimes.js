export const Runtimes = Object.freeze(
  /** @type {const} */ ([
    'Bun',
    'Deno',
    'Node',
    'Next',
    'Vite',
  ]),
)

export const Runtime = Object.freeze(
  /** @type {{ [x in typeof Runtimes[number]]: x }} */ (
    Runtimes.reduce((o, x) => (o[x] = x, o), {})
  ),
)
