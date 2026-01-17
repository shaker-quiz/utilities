import { Key } from './key.js'
import { Service } from './service.js'

export const Segments = Object.freeze(
  /** @type {const} */ ([
    Object.freeze(
      /** @type {const} */ ({
        key: Key['checkin'],
        cardinality: '1',
        relation: undefined,
        service: Service['Checkin'],
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['user'],
        cardinality: '1',
        relation: Key['users'],
        service: Service['Users'],
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['users'],
        cardinality: 'n',
        relation: Key['user'],
        service: Service['Users'],
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['role'],
        cardinality: '1',
        relation: Key['roles'],
        service: Service['Roles'],
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['roles'],
        cardinality: 'n',
        relation: Key['role'],
        service: Service['Roles'],
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['country'],
        cardinality: '1',
        relation: Key['countries'],
        service: Service['Locations'],
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['countries'],
        cardinality: 'n',
        relation: Key['country'],
        service: Service['Locations'],
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['currency'],
        cardinality: '1',
        relation: Key['currencies'],
        service: Service['Locations'],
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['currencies'],
        cardinality: 'n',
        relation: Key['currency'],
        service: Service['Locations'],
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['timezone'],
        cardinality: '1',
        relation: Key['timezones'],
        service: Service['Locations'],
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['timezones'],
        cardinality: 'n',
        relation: Key['timezone'],
        service: Service['Locations'],
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['city'],
        cardinality: '1',
        relation: Key['cities'],
        service: Service['Cities'],
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['cities'],
        cardinality: 'n',
        relation: Key['city'],
        service: Service['Cities'],
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['venue'],
        cardinality: '1',
        relation: Key['venues'],
        service: Service['Venues'],
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['venues'],
        cardinality: 'n',
        relation: Key['venue'],
        service: Service['Venues'],
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['theme'],
        cardinality: '1',
        relation: Key['themes'],
        service: Service['Themes'],
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['themes'],
        cardinality: 'n',
        relation: Key['theme'],
        service: Service['Themes'],
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['cover'],
        cardinality: '1',
        relation: undefined,
        service: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['game'],
        cardinality: '1',
        relation: Key['games'],
        service: Service['Games'],
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['games'],
        cardinality: 'n',
        relation: Key['game'],
        service: Service['Games'],
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['registration'],
        cardinality: '1',
        relation: Key['registrations'],
        service: Service['Registrations'],
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['registrations'],
        cardinality: 'n',
        relation: Key['registration'],
        service: Service['Registrations'],
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['export'],
        cardinality: '1',
        relation: undefined,
        service: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['password'],
        cardinality: '1',
        relation: undefined,
        service: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['vk_group_token'],
        cardinality: '1',
        relation: undefined,
        service: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['summary'],
        cardinality: '1',
        relation: undefined,
        service: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['mailing'],
        cardinality: '1',
        relation: undefined,
        service: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['channel'],
        cardinality: '1',
        relation: undefined,
        service: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['confirmation'],
        cardinality: '1',
        relation: undefined,
        service: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['cancellation'],
        cardinality: '1',
        relation: undefined,
        service: undefined,
      }),
    ),
  ]),
)

export const Segment = Object.freeze(
  /** @type {{ [x in typeof Segments[number]['key']]: Extract<typeof Segments[number], { key: x }> }} */ (Segments
    .reduce(
      (o, x) => (o[x.key] = x, o),
      {},
    )),
)
