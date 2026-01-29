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
    [GameStatus['APPROVED']]: Object.freeze([
      GameStatus['APPROVED'],
      GameStatus['CLOSED'],
      GameStatus['FORINVITES'],
      GameStatus['PUBLISHED'],
      GameStatus['IS_RESERVE'],
      GameStatus['FINISHED'],
      GameStatus['ARCHIVE'],
    ]),

    [GameStatus['MODERATION']]: Object.freeze([
      GameStatus['MODERATION'],
    ]),

    [GameStatus['REJECTED']]: Object.freeze([
      GameStatus['REJECTED'],
      GameStatus['MODERATION'],
    ]),
  }),

  [Mode['Unknown']]: Object.freeze({}),
})

export const RoleGameStatuses = Object.freeze({
  [Role['admin']]: Object.freeze([
    GameStatus['APPROVED'],
    GameStatus['ARCHIVE'],
    GameStatus['CLOSED'],
    GameStatus['FINISHED'],
    GameStatus['FORINVITES'],
    GameStatus['IS_RESERVE'],
    GameStatus['MODERATION'],
    GameStatus['PUBLISHED'],
    GameStatus['REJECTED'],
  ]),

  [Role['organizer']]: Object.freeze([
    GameStatus['ARCHIVE'],
    GameStatus['CLOSED'],
    GameStatus['FINISHED'],
    GameStatus['FORINVITES'],
    GameStatus['IS_RESERVE'],
    GameStatus['PUBLISHED'],
  ]),

  [Mode['Unknown']]: Object.freeze([]),
})

export const CategoryGameStatuses = Object.freeze({
  [Category['Active']]: Object.freeze([
    GameStatus['CLOSED'],
    GameStatus['FORINVITES'],
    GameStatus['IS_RESERVE'],
    GameStatus['PUBLISHED'],
  ]),

  [GameStatus['REJECTED']]: Object.freeze([
    GameStatus['REJECTED'],
  ]),

  [GameStatus['MODERATION']]: Object.freeze([
    GameStatus['MODERATION'],
  ]),

  [GameStatus['APPROVED']]: Object.freeze([
    GameStatus['APPROVED'],
  ]),

  [GameStatus['FINISHED']]: Object.freeze([
    GameStatus['FINISHED'],
  ]),

  [GameStatus['ARCHIVE']]: Object.freeze([
    GameStatus['ARCHIVE'],
  ]),
})
