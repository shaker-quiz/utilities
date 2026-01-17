import { Key } from './key.js'

export const Segments = Object.freeze(
  /** @type {const} */ ([
    Object.freeze(
      /** @type {const} */ ({
        key: Key['checkin'],
        cardinality: '1',
        relation: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['user'],
        cardinality: '1',
        relation: Key['users'],
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['users'],
        cardinality: 'n',
        relation: Key['user'],
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['role'],
        cardinality: '1',
        relation: Key['roles'],
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['roles'],
        cardinality: 'n',
        relation: Key['role'],
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['country'],
        cardinality: '1',
        relation: Key['countries'],
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['countries'],
        cardinality: 'n',
        relation: Key['country'],
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['currency'],
        cardinality: '1',
        relation: Key['currencies'],
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['currencies'],
        cardinality: 'n',
        relation: Key['currency'],
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['timezone'],
        cardinality: '1',
        relation: Key['timezones'],
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['timezones'],
        cardinality: 'n',
        relation: Key['timezone'],
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['city'],
        cardinality: '1',
        relation: Key['cities'],
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['cities'],
        cardinality: 'n',
        relation: Key['city'],
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['venue'],
        cardinality: '1',
        relation: Key['venues'],
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['venues'],
        cardinality: 'n',
        relation: Key['venue'],
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['theme'],
        cardinality: '1',
        relation: Key['themes'],
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['themes'],
        cardinality: 'n',
        relation: Key['theme'],
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['cover'],
        cardinality: '1',
        relation: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['game'],
        cardinality: '1',
        relation: Key['games'],
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['games'],
        cardinality: 'n',
        relation: Key['game'],
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['registration'],
        cardinality: '1',
        relation: Key['registrations'],
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['registrations'],
        cardinality: 'n',
        relation: Key['registration'],
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['export'],
        cardinality: '1',
        relation: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['password'],
        cardinality: '1',
        relation: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['vk_group_token'],
        cardinality: '1',
        relation: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['summary'],
        cardinality: '1',
        relation: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['mailing'],
        cardinality: '1',
        relation: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['channel'],
        cardinality: '1',
        relation: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['confirmation'],
        cardinality: '1',
        relation: undefined,
      }),
    ),
    Object.freeze(
      /** @type {const} */ ({
        key: Key['cancellation'],
        cardinality: '1',
        relation: undefined,
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
