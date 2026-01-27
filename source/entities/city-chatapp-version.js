export const CityChatappVersions = Object.freeze(
  /** @type {const} */ ([
    'Latest',
    'Legacy',
  ]),
)

export const CityChatappVersion = Object.freeze(
  /** @type {{ [x in typeof CityChatappVersions[number]]: x }} */ (
    CityChatappVersions.reduce(
      (o, x) => (o[x] = x, o),
      {},
    )
  ),
)
