import { Role } from './role.js'

export var GameStatus = /** @type {const} */ ({
  'REJECTED': 'REJECTED',
  'MODERATION': 'MODERATION',
  'APPROVED': 'APPROVED',
  'CLOSED': 'CLOSED',
  'FORINVITES': 'FORINVITES',
  'PUBLISHED': 'PUBLISHED',
  'IS_RESERVE': 'IS_RESERVE',
  'FINISHED': 'FINISHED',
  'ARCHIVE': 'ARCHIVE',
})

export var GameStatuses = Object.values(GameStatus)

export var GameStatusWeight = {
  [GameStatus.REJECTED]: 0,
  [GameStatus.MODERATION]: 1,
  [GameStatus.APPROVED]: 2,
  [GameStatus.CLOSED]: 3,
  [GameStatus.FORINVITES]: 4,
  [GameStatus.PUBLISHED]: 5,
  [GameStatus.IS_RESERVE]: 6,
  [GameStatus.FINISHED]: 7,
  [GameStatus.ARCHIVE]: 8,
}

export var GameStatusTitle = {
  [GameStatus.REJECTED]: 'Отклонено',
  [GameStatus.MODERATION]: 'На проверке',
  [GameStatus.APPROVED]: 'Одобрено',
  [GameStatus.CLOSED]: 'Закрыта',
  [GameStatus.FORINVITES]: 'По приглашению',
  [GameStatus.PUBLISHED]: 'Опубликовано',
  [GameStatus.IS_RESERVE]: 'В резерве',
  [GameStatus.FINISHED]: 'Завершено',
  [GameStatus.ARCHIVE]: 'В архиве',
}

export var GameStatusColor = {
  [GameStatus.REJECTED]: 'danger',
  [GameStatus.MODERATION]: 'primary',
  [GameStatus.APPROVED]: 'success',
  [GameStatus.CLOSED]: 'warning',
  [GameStatus.FORINVITES]: 'current',
  [GameStatus.PUBLISHED]: 'secondary',
  [GameStatus.IS_RESERVE]: 'blue-900',
  [GameStatus.FINISHED]: 'success',
  [GameStatus.ARCHIVE]: 'current',
}

export var GameStatusTextColor = {
  [GameStatus.REJECTED]: 'text-danger',
  [GameStatus.MODERATION]: 'text-primary',
  [GameStatus.APPROVED]: 'text-success',
  [GameStatus.CLOSED]: 'text-warning',
  [GameStatus.FORINVITES]: 'text-current',
  [GameStatus.PUBLISHED]: 'text-secondary',
  [GameStatus.IS_RESERVE]: 'text-blue-900',
  [GameStatus.FINISHED]: 'text-success',
  [GameStatus.ARCHIVE]: 'text-current',
}

/** @type {Record<GameStatus, Icon>} */
export var GameStatusIcon = {
  [GameStatus.REJECTED]: 'hero/outline/x-mark',
  [GameStatus.MODERATION]: 'hero/outline/clock',
  [GameStatus.APPROVED]: 'hero/outline/hand-thumb-up',
  [GameStatus.CLOSED]: 'hero/outline/exclamation-triangle',
  [GameStatus.FORINVITES]: 'hero/outline/lock-closed',
  [GameStatus.PUBLISHED]: 'hero/outline/check-circle',
  [GameStatus.IS_RESERVE]: 'hero/outline/user-plus',
  [GameStatus.FINISHED]: 'hero/outline/check',
  [GameStatus.ARCHIVE]: 'hero/outline/archive-box',
}

/** @type {{ [Key in Role]: Partial<Record<GameStatus, GameStatus[]>> }} */
export var RoleGameStatusGameStatuses = {
  [Role.admin]: {},

  [Role.organizer]: {
    [GameStatus.APPROVED]: [
      GameStatus.APPROVED,
      GameStatus.CLOSED,
      GameStatus.FORINVITES,
      GameStatus.PUBLISHED,
      GameStatus.IS_RESERVE,
      GameStatus.FINISHED,
      GameStatus.ARCHIVE,
    ],

    [GameStatus.MODERATION]: [
      GameStatus.MODERATION,
    ],

    [GameStatus.REJECTED]: [
      GameStatus.REJECTED,
      GameStatus.MODERATION,
    ],
  },

  [Role.default]: {},
}

/** @type {{ [Key in Role]: GameStatus[] }} */
export var RoleDefaultGameStatuses = {
  [Role.admin]: [
    'APPROVED',
    'ARCHIVE',
    'CLOSED',
    'FINISHED',
    'FORINVITES',
    'IS_RESERVE',
    'MODERATION',
    'PUBLISHED',
    'REJECTED',
  ],

  [Role.organizer]: [
    'ARCHIVE',
    'CLOSED',
    'FINISHED',
    'FORINVITES',
    'IS_RESERVE',
    'PUBLISHED',
  ],

  [Role.default]: [],
}
