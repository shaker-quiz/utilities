export const Entities = Object.freeze(
  /** @type {const} */ ([
    'user',
    'users',
    'role',
    'roles',
    'country',
    'countries',
    'currency',
    'currencies',
    'timezone',
    'timezones',
    'city',
    'cities',
    'venue',
    'venues',
    'theme',
    'themes',
    'cover',
    'game',
    'games',
    'registration',
    'registrations',
  ]),
)

/** @type {{ [x in Entities[number]]: x }} */
export const Entity = Object.freeze(Entities.reduce((o, x) => (o[x] = x, o), {}))

export const Procedures = Object.freeze(
  /** @type {const} */ ([
    'checkin',
  ]),
)

/** @type {{ [x in Procedures[number]]: x }} */
export const Procedure = Object.freeze(Procedures.reduce((o, x) => (o[x] = x, o), {}))

export const Operators = Object.freeze(
  /** @type {const} */ ([
    'export',
    'summary',
    'mailing',
    'confirmation',
    'cancellation',
  ]),
)

/** @type {{ [x in Operators[number]]: x }} */
export const Operator = Object.freeze(Operators.reduce((o, x) => (o[x] = x, o), {}))

export const Properties = Object.freeze(
  /** @type {const} */ ([
    'channel',
    'password',
    'vk_group_token',
  ]),
)

/** @type {{ [x in Properties[number]]: x }} */
export const Property = Object.freeze(Properties.reduce((o, x) => (o[x] = x, o), {}))

export const Segments = Object.freeze([
  ...Entities,
  ...Procedures,
])

export const Segment = Segments.reduce((o, x) => (o[x] = x, o), {})

const SingularPlural = [
  ['user', 'users'],
  ['role', 'roles'],
  ['country', 'countries'],
  ['currency', 'currencies'],
  ['timezone', 'timezones'],
  ['city', 'cities'],
  ['venue', 'venues'],
  ['theme', 'themes'],
  ['game', 'games'],
  ['registration', 'registrations'],
]

export const SegmentSegments = {
  [Entity['user']]: [
    Property['password'],
    Entity['role'],
    Entity['cities'],
  ],

  [Entity['users']]: [
    Entity['role'],
    Entity['cities'],
  ],

  [Entity['city']]: [
    Property['vk_group_token'],
    Entity['country'],
    Entity['currency'],
    Entity['timezone'],
    Entity['venues'],
  ],

  [Entity['cities']]: [
    Entity['country'],
    Entity['currency'],
    Entity['timezone'],
    Entity['venues'],
  ],

  [Entity['venue']]: [
    Entity['city'],
  ],

  [Entity['venues']]: [
    Entity['city'],
  ],

  [Entity['theme']]: [
    Entity['cover'],
    Entity['games'],
  ],

  [Entity['themes']]: [
    Entity['cover'],
    Entity['games'],
  ],

  [Entity['game']]: [
    Entity['city'],
    Entity['venue'],
    Entity['theme'],
    Entity['registrations'],
    Operator['summary'],
  ],

  [Entity['games']]: [
    Entity['city'],
    Entity['venue'],
    Entity['theme'],
    Entity['registrations'],
    Operator['summary'],
  ],

  [Entity['registration']]: [
    Property['channel'],
    Entity['game'],
    Operator['mailing'],
    Operator['confirmation'],
    Operator['cancellation'],
  ],

  [Entity['registrations']]: [
    Property['channel'],
    Entity['city'],
    Entity['game'],
    Operator['export'],
    Operator['mailing'],
    Operator['confirmation'],
    Operator['cancellation'],
  ],
}

const CardinalityIndex = {
  '1': 0,
  'n': 1,
}

let getRelaton = (segment, cardinality = '1') => {
  let tuple = SingularPlural.find(tuple => tuple.includes(segment))

  return tuple
    ? tuple[CardinalityIndex[cardinality]]
    : segment
}

let getCardinality = segment => {
  let tuple = SingularPlural.find(tuple => tuple.includes(segment))

  switch (tuple?.indexOf(segment)) {
    case 1:
      return 'n'
    case 0:
    default:
      return '1'
  }
}

let getPathname = segment =>
  getCardinality(segment) === '1'
    ? segment + '/:' + segment
    : segment

let tree = (array, visits, start, segment_0, relation, pathname, cardinality) => {
  visits
    .add(segment_0)
    .add(getRelaton(segment_0, 'n'))
    .add(getRelaton(segment_0, '1'))

  array.push({
      segment: segment_0,
      relation,
      pathname,
      cardinality,
    })

  return [
    {
      segment: segment_0,
      relation,
      pathname,
      cardinality,
    },
  ].concat(
    SegmentSegments[segment_0]
      ?.filter(segment_1 => segment_1 !== start)
      ?.filter(segment_1 => !visits.has(segment_1))
      ?.map(segment_1 =>
        tree(
          new Set(visits),
          start,
          segment_0 + '/' + segment_1,
          relation + '/' + segment_1,
          pathname + '/' + getPathname(segment_1),
          cardinality + '/' + getCardinality(segment_1),
        )
      )
      ?? [],
  )
}

// todo BFS
let Meta = Segments
  .map(segment =>
    tree(
      new Set(),
      segment,
      segment,
      getRelaton(segment),
      getPathname(segment),
      getCardinality(segment),
    )
  )
// .flat(10)
// .reduce((o, x) => (o[x.segment] = x, o), {})

console.dir(Meta, { depth: null })
