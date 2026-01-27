import { Category } from './category.js'
import { Mode } from './mode.js'
import { Role } from './role.js'

export const GameStatuses = Object.freeze(
  /** @type {const} */ ([
    'APPROVED',
    'ARCHIVE',
    'CLOSED',
    'FINISHED',
    'FORINVITES',
    'IS_RESERVE',
    'MODERATION',
    'PUBLISHED',
    'REJECTED',
  ]),
)

export const GameStatus = Object.freeze(
  /** @type {{ [x in typeof GameStatuses[number]]: x }} */ (
    GameStatuses.reduce(
      (o, x) => (o[x] = x, o),
      {},
    )
  ),
)

export const RoleGameStatusGameStatuses = Object.freeze({
  [Role['admin']]: Object.freeze({}),

  [Role['organizer']]: Object.freeze({
    'APPROVED': Object.freeze([
      'APPROVED',
      'CLOSED',
      'FORINVITES',
      'PUBLISHED',
      'IS_RESERVE',
      'FINISHED',
      'ARCHIVE',
    ]),

    'MODERATION': Object.freeze([
      'MODERATION',
    ]),

    'REJECTED': Object.freeze([
      'REJECTED',
      'MODERATION',
    ]),
  }),

  [Mode['Unknown']]: Object.freeze({}),
})

export const RoleGameStatuses = Object.freeze({
  [Role['admin']]: Object.freeze([
    'APPROVED',
    'ARCHIVE',
    'CLOSED',
    'FINISHED',
    'FORINVITES',
    'IS_RESERVE',
    'MODERATION',
    'PUBLISHED',
    'REJECTED',
  ]),

  [Role['organizer']]: Object.freeze([
    'ARCHIVE',
    'CLOSED',
    'FINISHED',
    'FORINVITES',
    'IS_RESERVE',
    'PUBLISHED',
  ]),

  [Mode['Unknown']]: Object.freeze([]),
})

export const CategoryGameStatuses = Object.freeze({
  [Category['Active']]: Object.freeze([
    'CLOSED',
    'FORINVITES',
    'IS_RESERVE',
    'PUBLISHED',
  ]),

  'REJECTED': Object.freeze([
    'REJECTED',
  ]),

  'MODERATION': Object.freeze([
    'MODERATION',
  ]),

  'APPROVED': Object.freeze([
    'APPROVED',
  ]),

  'FINISHED': Object.freeze([
    'FINISHED',
  ]),

  'ARCHIVE': Object.freeze([
    'ARCHIVE',
  ]),
})
