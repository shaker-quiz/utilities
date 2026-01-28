export const Services = Object.freeze(
  /** @type {const} */ ([
    'Users',
    'Roles',
    'Checkin',
    'Locations',
    'Cities',
    'Venues',
    'Themes',
    'Games',
    'Registrations',
    'Procedures',
    'Updates',
    'Hub',
    'Landing',
    'Vkma',
    'Telegram',
    'Chatapp',
    'Bitrix',
    'Minio',
  ]),
)

export const Service = Object.freeze(
  /** @type {{ [x in typeof Services[number]]: x }} */ (
    Services.reduce((o, x) => (o[x] = x, o), {})
  ),
)
