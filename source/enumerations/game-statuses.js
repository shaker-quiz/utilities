import { Roles } from './roles.js'

export var GameStatuses = /** @type {const} */ ({
  APPROVED: 'APPROVED',
  ARCHIVE: 'ARCHIVE',
  CLOSED: 'CLOSED',
  FINISHED: 'FINISHED',
  FORINVITES: 'FORINVITES',
  MODERATION: 'MODERATION',
  PUBLISHED: 'PUBLISHED',
  REJECTED: 'REJECTED',
  IS_RESERVE: 'IS_RESERVE',
})

export var RoleGameStatuses = {
  [Roles.admin]: [
    GameStatuses.APPROVED,
    GameStatuses.MODERATION,
    GameStatuses.PUBLISHED,
    GameStatuses.REJECTED,
    GameStatuses.FINISHED,
    GameStatuses.ARCHIVE,
    GameStatuses.FORINVITES,
    GameStatuses.IS_RESERVE,
    GameStatuses.CLOSED,
  ],

  [Roles.organizer]: [
    GameStatuses.APPROVED,
    GameStatuses.PUBLISHED,
    GameStatuses.FINISHED,
    GameStatuses.ARCHIVE,
    GameStatuses.FORINVITES,
    GameStatuses.IS_RESERVE,
    GameStatuses.CLOSED,
  ],

  [Roles.default]: [],
}
