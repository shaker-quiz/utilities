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
        singular: 'user',
        plural: 'users',
        service: Service['Users'],
        pattern: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: 'role',
        cardinality: '1',
        singular: 'role',
        plural: 'roles',
        service: Service['Roles'],
        pattern: Pattern.UUID.source,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: 'roles',
        cardinality: 'n',
        singular: 'role',
        plural: 'roles',
        service: Service['Roles'],
        pattern: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: 'country',
        cardinality: '1',
        singular: 'country',
        plural: 'countries',
        service: Service['Locations'],
        pattern: Pattern.COUNTRY_CODE.source,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: 'countries',
        cardinality: 'n',
        singular: 'country',
        plural: 'countries',
        service: Service['Locations'],
        pattern: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: 'currency',
        cardinality: '1',
        singular: 'currency',
        plural: 'currencies',
        service: Service['Locations'],
        pattern: Pattern.CURRENCY_CODE.source,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: 'currencies',
        cardinality: 'n',
        singular: 'currency',
        plural: 'currencies',
        service: Service['Locations'],
        pattern: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: 'timezone',
        cardinality: '1',
        singular: 'timezone',
        plural: 'timezones',
        service: Service['Locations'],
        pattern: Pattern.TIMEZONE_NAME.source,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: 'timezones',
        cardinality: 'n',
        singular: 'timezone',
        plural: 'timezones',
        service: Service['Locations'],
        pattern: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: 'city',
        cardinality: '1',
        singular: 'city',
        plural: 'cities',
        service: Service['Cities'],
        pattern: Pattern.UUID.source,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: 'cities',
        cardinality: 'n',
        singular: 'city',
        plural: 'cities',
        service: Service['Cities'],
        pattern: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: 'venue',
        cardinality: '1',
        singular: 'venue',
        plural: 'venues',
        service: Service['Venues'],
        pattern: Pattern.UUID.source,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: 'venues',
        cardinality: 'n',
        singular: 'venue',
        plural: 'venues',
        service: Service['Venues'],
        pattern: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: 'theme',
        cardinality: '1',
        singular: 'theme',
        plural: 'themes',
        service: Service['Themes'],
        pattern: Pattern.UUID.source,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: 'themes',
        cardinality: 'n',
        singular: 'theme',
        plural: 'themes',
        service: Service['Themes'],
        pattern: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: 'cover',
        cardinality: '1',
        singular: 'cover',
        plural: 'covers',
        service: Service['Minio'],
        pattern: Pattern.UUID.source,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: 'covers',
        cardinality: 'n',
        singular: 'cover',
        plural: 'covers',
        service: Service['Minio'],
        pattern: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: 'game',
        cardinality: '1',
        singular: 'game',
        plural: 'games',
        service: Service['Games'],
        pattern: Pattern.UUID.source,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: 'games',
        cardinality: 'n',
        singular: 'game',
        plural: 'games',
        service: Service['Games'],
        pattern: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: 'registration',
        cardinality: '1',
        singular: 'registration',
        plural: 'registrations',
        service: Service['Registrations'],
        pattern: Pattern.UUID.source,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: 'registrations',
        cardinality: 'n',
        singular: 'registration',
        plural: 'registrations',
        service: Service['Registrations'],
        pattern: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: 'status',
        cardinality: '1',
        singular: 'status',
        plural: 'statuses',
        service: undefined,
        pattern: Pattern.STRING.source,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: 'statuses',
        cardinality: 'n',
        singular: 'status',
        plural: 'statuses',
        service: undefined,
        pattern: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: 'lineup',
        cardinality: '1',
        singular: 'lineup',
        plural: 'lineups',
        service: undefined,
        pattern: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: 'lineups',
        cardinality: 'n',
        singular: 'lineup',
        plural: 'lineups',
        service: undefined,
        pattern: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: 'telegram',
        cardinality: '1',
        singular: 'telegram',
        plural: 'telegrams',
        service: Service['Telegram'],
        pattern: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: 'chatapp',
        cardinality: '1',
        singular: 'chatapp',
        plural: 'chatapps',
        service: Service['Chatapp'],
        pattern: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: 'bitrix',
        cardinality: '1',
        singular: 'bitrix',
        plural: 'bitrixes',
        service: Service['Bitrix'],
        pattern: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: 'webhook',
        cardinality: '1',
        singular: 'webhook',
        plural: 'webhooks',
        service: undefined,
        pattern: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: 'source',
        cardinality: '1',
        singular: 'source',
        plural: 'sources',
        service: Service['Updates'],
        pattern: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: 'search',
        cardinality: '1',
        singular: 'search',
        plural: 'searches',
        service: undefined,
        pattern: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: 'export',
        cardinality: '1',
        singular: 'export',
        plural: 'exports',
        service: undefined,
        pattern: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: 'password',
        cardinality: '1',
        singular: 'password',
        plural: 'passwords',
        service: undefined,
        pattern: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: 'vk_group_token',
        cardinality: '1',
        singular: 'vk_group_token',
        plural: 'vk_group_tokens',
        service: undefined,
        pattern: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: 'summary',
        cardinality: '1',
        singular: 'summary',
        plural: 'summaries',
        service: undefined,
        pattern: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: 'mailing',
        cardinality: '1',
        singular: 'mailing',
        plural: 'mailings',
        service: undefined,
        pattern: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: 'channel',
        cardinality: '1',
        singular: 'channel',
        plural: 'channels',
        service: undefined,
        pattern: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: 'creation',
        cardinality: '1',
        singular: 'creation',
        plural: 'creations',
        service: undefined,
        pattern: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: 'confirmation',
        cardinality: '1',
        singular: 'confirmation',
        plural: 'confirmations',
        service: undefined,
        pattern: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: 'cancellation',
        cardinality: '1',
        singular: 'cancellation',
        plural: 'cancellations',
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
