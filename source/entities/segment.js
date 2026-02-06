import { Pattern } from './pattern.js'
import { Service } from './services.js'

export const Segments = Object.freeze(
  /** @type {const} */ ([
    Object.freeze(
      /** @type {const} */ ({
        key: 'checkin',
        cardinality: '1',
        singular: 'checkin',
        plural: 'checkins',
        service: Service['Checkin'],
        pattern: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: 'user',
        cardinality: '1',
        singular: 'user',
        plural: 'users',
        service: Service['Users'],
        pattern: Pattern.UUID.source,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: 'users',
        cardinality: 'n',
        relation: 'user',
        service: Service['Users'],
        pattern: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: 'role',
        cardinality: '1',
        relation: 'roles',
        service: Service['Roles'],
        pattern: Pattern.UUID.source,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: 'roles',
        cardinality: 'n',
        relation: 'role',
        service: Service['Roles'],
        pattern: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: 'country',
        cardinality: '1',
        relation: 'countries',
        service: Service['Locations'],
        pattern: Pattern.COUNTRY_CODE.source,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: 'countries',
        cardinality: 'n',
        relation: 'country',
        service: Service['Locations'],
        pattern: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: 'currency',
        cardinality: '1',
        relation: 'currencies',
        service: Service['Locations'],
        pattern: Pattern.CURRENCY_CODE.source,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: 'currencies',
        cardinality: 'n',
        relation: 'currency',
        service: Service['Locations'],
        pattern: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: 'timezone',
        cardinality: '1',
        relation: 'timezones',
        service: Service['Locations'],
        pattern: Pattern.TIMEZONE_NAME.source,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: 'timezones',
        cardinality: 'n',
        relation: 'timezone',
        service: Service['Locations'],
        pattern: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: 'city',
        cardinality: '1',
        relation: 'cities',
        service: Service['Cities'],
        pattern: Pattern.UUID.source,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: 'cities',
        cardinality: 'n',
        relation: 'city',
        service: Service['Cities'],
        pattern: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: 'venue',
        cardinality: '1',
        relation: 'venues',
        service: Service['Venues'],
        pattern: Pattern.UUID.source,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: 'venues',
        cardinality: 'n',
        relation: 'venue',
        service: Service['Venues'],
        pattern: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: 'theme',
        cardinality: '1',
        relation: 'themes',
        service: Service['Themes'],
        pattern: Pattern.UUID.source,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: 'themes',
        cardinality: 'n',
        relation: 'theme',
        service: Service['Themes'],
        pattern: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: 'cover',
        cardinality: '1',
        relation: undefined,
        service: Service['Minio'],
        pattern: Pattern.UUID.source,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: 'game',
        cardinality: '1',
        relation: 'games',
        service: Service['Games'],
        pattern: Pattern.UUID.source,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: 'games',
        cardinality: 'n',
        relation: 'game',
        service: Service['Games'],
        pattern: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: 'registration',
        cardinality: '1',
        relation: 'registrations',
        service: Service['Registrations'],
        pattern: Pattern.UUID.source,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: 'registrations',
        cardinality: 'n',
        relation: 'registration',
        service: Service['Registrations'],
        pattern: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: 'export',
        cardinality: '1',
        relation: undefined,
        service: undefined,
        pattern: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: 'password',
        cardinality: '1',
        relation: undefined,
        service: undefined,
        pattern: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: 'vk_group_token',
        cardinality: '1',
        relation: undefined,
        service: undefined,
        pattern: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: 'summary',
        cardinality: '1',
        relation: undefined,
        service: undefined,
        pattern: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: 'mailing',
        cardinality: '1',
        relation: undefined,
        service: undefined,
        pattern: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: 'channel',
        cardinality: '1',
        relation: undefined,
        service: undefined,
        pattern: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: 'status',
        cardinality: '1',
        relation: 'statuses',
        service: undefined,
        pattern: Pattern.STRING.source,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: 'statuses',
        cardinality: 'n',
        relation: 'status',
        service: undefined,
        pattern: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: 'creation',
        cardinality: '1',
        relation: undefined,
        service: undefined,
        pattern: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: 'confirmation',
        cardinality: '1',
        relation: undefined,
        service: undefined,
        pattern: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: 'cancellation',
        cardinality: '1',
        relation: undefined,
        service: undefined,
        pattern: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: 'lineup',
        cardinality: '1',
        relation: 'lineups',
        service: undefined,
        pattern: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: 'lineups',
        cardinality: 'n',
        relation: 'lineup',
        service: undefined,
        pattern: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: 'telegram',
        cardinality: '1',
        relation: undefined,
        service: Service['Telegram'],
        pattern: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: 'chatapp',
        cardinality: '1',
        relation: undefined,
        service: Service['Chatapp'],
        pattern: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: 'bitrix',
        cardinality: '1',
        relation: undefined,
        service: Service['Bitrix'],
        pattern: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: 'webhook',
        cardinality: '1',
        relation: undefined,
        service: undefined,
        pattern: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: 'source',
        cardinality: '1',
        relation: undefined,
        service: Service['Updates'],
        pattern: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: 'search',
        cardinality: '1',
        relation: undefined,
        service: undefined,
        pattern: undefined,
      }),
    ),
  ]),
)

export const Segment = Object.freeze(
  /** @type {{ [x in typeof Segments[number]['key']]: Extract<typeof Segments[number], { key: x }> }} */ (
    Segments.reduce(
      (o, x) => (o[x.key] = x, o),
      {},
    )
  ),
)
