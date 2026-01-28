export const RegistrationChannels = Object.freeze(
  /** @type {const} */ ([
    'vkontakte',
    'telegramBot',
    'email',
  ]),
)

export const RegistrationChannel = Object.freeze(
  /** @type {{ [x in typeof RegistrationChannels[number]]: x }} */ (
    RegistrationChannels.reduce(
      (o, x) => (o[x] = x, o),
      {},
    )
  ),
)
