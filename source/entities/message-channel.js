export const MessageChannels = Object.freeze(
  /** @type {const} */ ([
    'Chatapp',
    'Telegram',
    'Vk',
    'VkOrganizer',
    'Max',
  ]),
)

export const MessageChannel = Object.freeze(
  /** @type {{ [x in typeof MessageChannels[number]]: x }} */ (
    MessageChannels.reduce(
      (o, x) => (o[x] = x, o),
      {},
    )
  ),
)
