import { Category } from '../category.js'
import { Mode } from '../mode.js'
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

export const GameStatusTitle = Object.freeze({
  [GameStatus['REJECTED']]: 'Отклонено',
  [GameStatus['MODERATION']]: 'На проверке',
  [GameStatus['APPROVED']]: 'Одобрено',
  [GameStatus['CLOSED']]: 'Закрыта',
  [GameStatus['FORINVITES']]: 'По приглашению',
  [GameStatus['PUBLISHED']]: 'Опубликовано',
  [GameStatus['IS_RESERVE']]: 'В резерве',
  [GameStatus['FINISHED']]: 'Завершено',
  [GameStatus['ARCHIVE']]: 'В архиве',
})

export const GameStatusIcon = Object.freeze({
  [GameStatus['REJECTED']]: 'hero/outline/x-mark',
  [GameStatus['MODERATION']]: 'hero/outline/clock',
  [GameStatus['APPROVED']]: 'hero/outline/hand-thumb-up',
  [GameStatus['CLOSED']]: 'hero/outline/exclamation-triangle',
  [GameStatus['FORINVITES']]: 'hero/outline/lock-closed',
  [GameStatus['PUBLISHED']]: 'hero/outline/check-circle',
  [GameStatus['IS_RESERVE']]: 'hero/outline/user-plus',
  [GameStatus['FINISHED']]: 'hero/outline/check',
  [GameStatus['ARCHIVE']]: 'hero/outline/archive-box',
})

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
})
