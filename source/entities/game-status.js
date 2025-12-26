import { Category } from './category.js'
import { Mode } from './mode.js'
import { Role } from './role.js'

export const GameStatus = Object.freeze({
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

export const GameStatuses = Object.freeze(Object.values(GameStatus))

export const GameStatusIcon = Object.freeze({
  'REJECTED': 'hero/outline/x-mark',
  'MODERATION': 'hero/outline/clock',
  'APPROVED': 'hero/outline/hand-thumb-up',
  'CLOSED': 'hero/outline/exclamation-triangle',
  'FORINVITES': 'hero/outline/lock-closed',
  'PUBLISHED': 'hero/outline/check-circle',
  'IS_RESERVE': 'hero/outline/user-plus',
  'FINISHED': 'hero/outline/check',
  'ARCHIVE': 'hero/outline/archive-box',
})

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
