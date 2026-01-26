import { Key } from './key.js'
import { Pattern } from './pattern.js'
import { Service } from './services.js'

export const Segments = Object.freeze(
  /** @type {const} */ ([
    Object.freeze(
      /** @type {const} */ ({
        key: Key['checkin'],
        cardinality: '1',
        relation: undefined,
        service: Service['Checkin'],
        pattern: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['user'],
        cardinality: '1',
        relation: Key['users'],
        service: Service['Users'],
        pattern: Pattern.UUID.source,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['users'],
        cardinality: 'n',
        relation: Key['user'],
        service: Service['Users'],
        pattern: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['role'],
        cardinality: '1',
        relation: Key['roles'],
        service: Service['Roles'],
        pattern: Pattern.UUID.source,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['roles'],
        cardinality: 'n',
        relation: Key['role'],
        service: Service['Roles'],
        pattern: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['country'],
        cardinality: '1',
        relation: Key['countries'],
        service: Service['Locations'],
        pattern: Pattern.COUNTRY_CODE.source,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['countries'],
        cardinality: 'n',
        relation: Key['country'],
        service: Service['Locations'],
        pattern: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['currency'],
        cardinality: '1',
        relation: Key['currencies'],
        service: Service['Locations'],
        pattern: Pattern.CURRENCY_CODE.source,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['currencies'],
        cardinality: 'n',
        relation: Key['currency'],
        service: Service['Locations'],
        pattern: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['timezone'],
        cardinality: '1',
        relation: Key['timezones'],
        service: Service['Locations'],
        pattern: Pattern.TIMEZONE_NAME.source,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['timezones'],
        cardinality: 'n',
        relation: Key['timezone'],
        service: Service['Locations'],
        pattern: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['city'],
        cardinality: '1',
        relation: Key['cities'],
        service: Service['Cities'],
        pattern: Pattern.UUID.source,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['cities'],
        cardinality: 'n',
        relation: Key['city'],
        service: Service['Cities'],
        pattern: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['venue'],
        cardinality: '1',
        relation: Key['venues'],
        service: Service['Venues'],
        pattern: Pattern.UUID.source,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['venues'],
        cardinality: 'n',
        relation: Key['venue'],
        service: Service['Venues'],
        pattern: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['theme'],
        cardinality: '1',
        relation: Key['themes'],
        service: Service['Themes'],
        pattern: Pattern.UUID.source,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['themes'],
        cardinality: 'n',
        relation: Key['theme'],
        service: Service['Themes'],
        pattern: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['cover'],
        cardinality: '1',
        relation: undefined,
        service: undefined,
        pattern: Pattern.UUID.source,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['game'],
        cardinality: '1',
        relation: Key['games'],
        service: Service['Games'],
        pattern: Pattern.UUID.source,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['games'],
        cardinality: 'n',
        relation: Key['game'],
        service: Service['Games'],
        pattern: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['registration'],
        cardinality: '1',
        relation: Key['registrations'],
        service: Service['Registrations'],
        pattern: Pattern.UUID.source,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['registrations'],
        cardinality: 'n',
        relation: Key['registration'],
        service: Service['Registrations'],
        pattern: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['export'],
        cardinality: '1',
        relation: undefined,
        service: undefined,
        pattern: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['password'],
        cardinality: '1',
        relation: undefined,
        service: undefined,
        pattern: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['vk_group_token'],
        cardinality: '1',
        relation: undefined,
        service: undefined,
        pattern: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['summary'],
        cardinality: '1',
        relation: undefined,
        service: undefined,
        pattern: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['mailing'],
        cardinality: '1',
        relation: undefined,
        service: undefined,
        pattern: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['channel'],
        cardinality: '1',
        relation: undefined,
        service: undefined,
        pattern: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['confirmation'],
        cardinality: '1',
        relation: undefined,
        service: undefined,
        pattern: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['cancellation'],
        cardinality: '1',
        relation: undefined,
        service: undefined,
        pattern: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['telegram'],
        cardinality: '1',
        relation: undefined,
        service: Service['Telegram'],
        pattern: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['chatapp'],
        cardinality: '1',
        relation: undefined,
        service: Service['Chatapp'],
        pattern: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['bitrix'],
        cardinality: '1',
        relation: undefined,
        service: Service['Bitrix'],
        pattern: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['webhook'],
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
