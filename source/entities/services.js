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
    'Files',
    'Procedures',
    'Integrations',
    'Updates',
    'Hub',
    'Landing',
    'Telegram',
    'Vkma',
    'Minio',
    'Telegram',
    'Chatapp',
    'Bitrix',
  ]),
)

export const Service = Object.freeze(
  /** @type {{ [x in typeof Services[number]]: x }} */ (
    Services.reduce((o, x) => (o[x] = x, o), {})
  ),
)
