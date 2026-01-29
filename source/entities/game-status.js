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
  [Role['admin']]: Object.freeze({
    [GameStatus['APPROVED']]: Object.freeze([
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

    [GameStatus['ARCHIVE']]: Object.freeze([
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

    [GameStatus['CLOSED']]: Object.freeze([
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

    [GameStatus['FINISHED']]: Object.freeze([
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

    [GameStatus['FORINVITES']]: Object.freeze([
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

    [GameStatus['IS_RESERVE']]: Object.freeze([
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

    [GameStatus['MODERATION']]: Object.freeze([
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

    [GameStatus['PUBLISHED']]: Object.freeze([
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

    [GameStatus['REJECTED']]: Object.freeze([
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
  }),

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

    [GameStatus['ARCHIVE']]: Object.freeze([]),

    [GameStatus['CLOSED']]: Object.freeze([]),

    [GameStatus['FINISHED']]: Object.freeze([]),

    [GameStatus['FORINVITES']]: Object.freeze([]),

    [GameStatus['IS_RESERVE']]: Object.freeze([]),

    [GameStatus['MODERATION']]: Object.freeze([
      GameStatus['MODERATION'],
    ]),

    [GameStatus['PUBLISHED']]: Object.freeze([]),

    [GameStatus['REJECTED']]: Object.freeze([
      GameStatus['REJECTED'],
      GameStatus['MODERATION'],
    ]),
  }),

  [Mode['Unknown']]: Object.freeze({
    [GameStatus['APPROVED']]: Object.freeze([]),

    [GameStatus['ARCHIVE']]: Object.freeze([]),

    [GameStatus['CLOSED']]: Object.freeze([]),

    [GameStatus['FINISHED']]: Object.freeze([]),

    [GameStatus['FORINVITES']]: Object.freeze([]),

    [GameStatus['IS_RESERVE']]: Object.freeze([]),

    [GameStatus['MODERATION']]: Object.freeze([]),

    [GameStatus['PUBLISHED']]: Object.freeze([]),

    [GameStatus['REJECTED']]: Object.freeze([]),
  }),
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
