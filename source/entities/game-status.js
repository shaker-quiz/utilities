import { Category } from './category.js'
import { Mode } from './mode.js'
import { Role } from './role.js'

export const GameStatus = /** @type {const} */ ({
  'Approve': 'Approve',
  'Archive': 'Archive',
  'Close': 'Close',
  'Finish': 'Finish',
  'Invite': 'Invite',
  'Reserve': 'Reserve',
  'Moderate': 'Moderate',
  'Publish': 'Publish',
  'Reject': 'Reject',
})

export const GameStatuses = Object.values(GameStatus)

export const RoleGameStatusGameStatuses = Object.freeze({
  [Role['Admin']]: Object.freeze({
    [GameStatus['Approve']]: Object.freeze([
      GameStatus['Approve'],
      GameStatus['Archive'],
      GameStatus['Close'],
      GameStatus['Finish'],
      GameStatus['Invite'],
      GameStatus['Reserve'],
      GameStatus['Moderate'],
      GameStatus['Publish'],
      GameStatus['Reject'],
    ]),

    [GameStatus['Archive']]: Object.freeze([
      GameStatus['Approve'],
      GameStatus['Archive'],
      GameStatus['Close'],
      GameStatus['Finish'],
      GameStatus['Invite'],
      GameStatus['Reserve'],
      GameStatus['Moderate'],
      GameStatus['Publish'],
      GameStatus['Reject'],
    ]),

    [GameStatus['Close']]: Object.freeze([
      GameStatus['Approve'],
      GameStatus['Archive'],
      GameStatus['Close'],
      GameStatus['Finish'],
      GameStatus['Invite'],
      GameStatus['Reserve'],
      GameStatus['Moderate'],
      GameStatus['Publish'],
      GameStatus['Reject'],
    ]),

    [GameStatus['Finish']]: Object.freeze([
      GameStatus['Approve'],
      GameStatus['Archive'],
      GameStatus['Close'],
      GameStatus['Finish'],
      GameStatus['Invite'],
      GameStatus['Reserve'],
      GameStatus['Moderate'],
      GameStatus['Publish'],
      GameStatus['Reject'],
    ]),

    [GameStatus['Invite']]: Object.freeze([
      GameStatus['Approve'],
      GameStatus['Archive'],
      GameStatus['Close'],
      GameStatus['Finish'],
      GameStatus['Invite'],
      GameStatus['Reserve'],
      GameStatus['Moderate'],
      GameStatus['Publish'],
      GameStatus['Reject'],
    ]),

    [GameStatus['Reserve']]: Object.freeze([
      GameStatus['Approve'],
      GameStatus['Archive'],
      GameStatus['Close'],
      GameStatus['Finish'],
      GameStatus['Invite'],
      GameStatus['Reserve'],
      GameStatus['Moderate'],
      GameStatus['Publish'],
      GameStatus['Reject'],
    ]),

    [GameStatus['Moderate']]: Object.freeze([
      GameStatus['Approve'],
      GameStatus['Archive'],
      GameStatus['Close'],
      GameStatus['Finish'],
      GameStatus['Invite'],
      GameStatus['Reserve'],
      GameStatus['Moderate'],
      GameStatus['Publish'],
      GameStatus['Reject'],
    ]),

    [GameStatus['Publish']]: Object.freeze([
      GameStatus['Approve'],
      GameStatus['Archive'],
      GameStatus['Close'],
      GameStatus['Finish'],
      GameStatus['Invite'],
      GameStatus['Reserve'],
      GameStatus['Moderate'],
      GameStatus['Publish'],
      GameStatus['Reject'],
    ]),

    [GameStatus['Reject']]: Object.freeze([
      GameStatus['Approve'],
      GameStatus['Archive'],
      GameStatus['Close'],
      GameStatus['Finish'],
      GameStatus['Invite'],
      GameStatus['Reserve'],
      GameStatus['Moderate'],
      GameStatus['Publish'],
      GameStatus['Reject'],
    ]),
  }),

  [Role['Organizer']]: Object.freeze({
    [GameStatus['Approve']]: Object.freeze([
      GameStatus['Close'],
      GameStatus['Invite'],
      GameStatus['Publish'],
      GameStatus['Reserve'],
    ]),

    [GameStatus['Archive']]: Object.freeze([]),

    [GameStatus['Close']]: Object.freeze([]),

    [GameStatus['Finish']]: Object.freeze([]),

    [GameStatus['Invite']]: Object.freeze([]),

    [GameStatus['Reserve']]: Object.freeze([]),

    [GameStatus['Moderate']]: Object.freeze([]),

    [GameStatus['Publish']]: Object.freeze([
      GameStatus['Close'],
      GameStatus['Invite'],
      GameStatus['Reserve'],
    ]),

    [GameStatus['Reject']]: Object.freeze([
      GameStatus['Moderate'],
    ]),
  }),

  [Mode['Unknown']]: Object.freeze({
    [GameStatus['Approve']]: Object.freeze([]),

    [GameStatus['Archive']]: Object.freeze([]),

    [GameStatus['Close']]: Object.freeze([]),

    [GameStatus['Finish']]: Object.freeze([]),

    [GameStatus['Invite']]: Object.freeze([]),

    [GameStatus['Reserve']]: Object.freeze([]),

    [GameStatus['Moderate']]: Object.freeze([]),

    [GameStatus['Publish']]: Object.freeze([]),

    [GameStatus['Reject']]: Object.freeze([]),
  }),
})

export const RoleGameStatuses = Object.freeze({
  [Role['Admin']]: Object.freeze([
    GameStatus['Approve'],
    GameStatus['Archive'],
    GameStatus['Close'],
    GameStatus['Finish'],
    GameStatus['Invite'],
    GameStatus['Reserve'],
    GameStatus['Moderate'],
    GameStatus['Publish'],
    GameStatus['Reject'],
  ]),

  [Role['Organizer']]: Object.freeze([
    GameStatus['Archive'],
    GameStatus['Close'],
    GameStatus['Finish'],
    GameStatus['Invite'],
    GameStatus['Reserve'],
    GameStatus['Moderate'],
    GameStatus['Publish'],
  ]),

  [Mode['Unknown']]: Object.freeze([]),
})

export const CategoryGameStatuses = Object.freeze({
  [Category['Active']]: Object.freeze([
    GameStatus['Close'],
    GameStatus['Invite'],
    GameStatus['Reserve'],
    GameStatus['Publish'],
  ]),

  [GameStatus['Reject']]: Object.freeze([
    GameStatus['Reject'],
  ]),

  [GameStatus['Moderate']]: Object.freeze([
    GameStatus['Moderate'],
  ]),

  [GameStatus['Approve']]: Object.freeze([
    GameStatus['Approve'],
  ]),

  [GameStatus['Finish']]: Object.freeze([
    GameStatus['Finish'],
  ]),

  [GameStatus['Archive']]: Object.freeze([
    GameStatus['Archive'],
  ]),
})
