import { Category } from './category.js'
import { Mode } from './mode.js'
import { Role } from './role.js'

export const GameStatus = /** @type {const} */ ({
  'Approve': 'Approve',
  'Archive': 'Archive',
  'Cancel': 'Cancel',
  'Close': 'Close',
  'Finish': 'Finish',
  'Invite': 'Invite',
  'Reserve': 'Reserve',
  'Moderate': 'Moderate',
  'Publish': 'Publish',
  'Reject': 'Reject',
})

export const GameStatuses = Object.values(GameStatus)

export const RoleGameStatusGameStatuses = {
  [Role.Admin]: {
    [GameStatus['Approve']]: [
      GameStatus['Approve'],
      GameStatus['Archive'],
      GameStatus['Cancel'],
      GameStatus['Close'],
      GameStatus['Finish'],
      GameStatus['Invite'],
      GameStatus['Reserve'],
      GameStatus['Moderate'],
      GameStatus['Publish'],
      GameStatus['Reject'],
    ],

    [GameStatus['Archive']]: [
      GameStatus['Approve'],
      GameStatus['Archive'],
      GameStatus['Cancel'],
      GameStatus['Close'],
      GameStatus['Finish'],
      GameStatus['Invite'],
      GameStatus['Reserve'],
      GameStatus['Moderate'],
      GameStatus['Publish'],
      GameStatus['Reject'],
    ],

    [GameStatus['Cancel']]: [
      GameStatus['Approve'],
      GameStatus['Archive'],
      GameStatus['Cancel'],
      GameStatus['Close'],
      GameStatus['Finish'],
      GameStatus['Invite'],
      GameStatus['Reserve'],
      GameStatus['Moderate'],
      GameStatus['Publish'],
      GameStatus['Reject'],
    ],

    [GameStatus['Close']]: [
      GameStatus['Approve'],
      GameStatus['Archive'],
      GameStatus['Cancel'],
      GameStatus['Close'],
      GameStatus['Finish'],
      GameStatus['Invite'],
      GameStatus['Reserve'],
      GameStatus['Moderate'],
      GameStatus['Publish'],
      GameStatus['Reject'],
    ],

    [GameStatus['Finish']]: [
      GameStatus['Approve'],
      GameStatus['Archive'],
      GameStatus['Cancel'],
      GameStatus['Close'],
      GameStatus['Finish'],
      GameStatus['Invite'],
      GameStatus['Reserve'],
      GameStatus['Moderate'],
      GameStatus['Publish'],
      GameStatus['Reject'],
    ],

    [GameStatus['Invite']]: [
      GameStatus['Approve'],
      GameStatus['Archive'],
      GameStatus['Cancel'],
      GameStatus['Close'],
      GameStatus['Finish'],
      GameStatus['Invite'],
      GameStatus['Reserve'],
      GameStatus['Moderate'],
      GameStatus['Publish'],
      GameStatus['Reject'],
    ],

    [GameStatus['Reserve']]: [
      GameStatus['Approve'],
      GameStatus['Archive'],
      GameStatus['Cancel'],
      GameStatus['Close'],
      GameStatus['Finish'],
      GameStatus['Invite'],
      GameStatus['Reserve'],
      GameStatus['Moderate'],
      GameStatus['Publish'],
      GameStatus['Reject'],
    ],

    [GameStatus['Moderate']]: [
      GameStatus['Approve'],
      GameStatus['Archive'],
      GameStatus['Cancel'],
      GameStatus['Close'],
      GameStatus['Finish'],
      GameStatus['Invite'],
      GameStatus['Reserve'],
      GameStatus['Moderate'],
      GameStatus['Publish'],
      GameStatus['Reject'],
    ],

    [GameStatus['Publish']]: [
      GameStatus['Approve'],
      GameStatus['Archive'],
      GameStatus['Cancel'],
      GameStatus['Close'],
      GameStatus['Finish'],
      GameStatus['Invite'],
      GameStatus['Reserve'],
      GameStatus['Moderate'],
      GameStatus['Publish'],
      GameStatus['Reject'],
    ],

    [GameStatus['Reject']]: [
      GameStatus['Approve'],
      GameStatus['Archive'],
      GameStatus['Cancel'],
      GameStatus['Close'],
      GameStatus['Finish'],
      GameStatus['Invite'],
      GameStatus['Reserve'],
      GameStatus['Moderate'],
      GameStatus['Publish'],
      GameStatus['Reject'],
    ],
  },

  [Role.Organizer]: {
    [GameStatus['Approve']]: [
      GameStatus['Cancel'],
      GameStatus['Close'],
      GameStatus['Invite'],
      GameStatus['Publish'],
      GameStatus['Reserve'],
    ],

    [GameStatus['Archive']]: [],

    [GameStatus['Cancel']]: [
      GameStatus['Close'],
      GameStatus['Invite'],
      GameStatus['Publish'],
      GameStatus['Reserve'],
    ],

    [GameStatus['Close']]: [
      GameStatus['Cancel'],
      GameStatus['Publish'],
      GameStatus['Invite'],
      GameStatus['Reserve'],
    ],

    [GameStatus['Finish']]: [],

    [GameStatus['Invite']]: [
      GameStatus['Cancel'],
      GameStatus['Close'],
      GameStatus['Publish'],
      GameStatus['Reserve'],
    ],

    [GameStatus['Reserve']]: [
      GameStatus['Cancel'],
      GameStatus['Close'],
      GameStatus['Invite'],
      GameStatus['Publish'],
    ],

    [GameStatus['Moderate']]: [],

    [GameStatus['Publish']]: [
      GameStatus['Cancel'],
      GameStatus['Close'],
      GameStatus['Invite'],
      GameStatus['Reserve'],
    ],

    [GameStatus['Reject']]: [
      GameStatus['Moderate'],
    ],
  },

  [Mode['Unknown']]: {
    [GameStatus['Approve']]: [],

    [GameStatus['Archive']]: [],

    [GameStatus['Cancel']]: [],

    [GameStatus['Close']]: [],

    [GameStatus['Finish']]: [],

    [GameStatus['Invite']]: [],

    [GameStatus['Reserve']]: [],

    [GameStatus['Moderate']]: [],

    [GameStatus['Publish']]: [],

    [GameStatus['Reject']]: [],
  },
}

export const RoleGameStatuses = {
  [Role.Admin]: [
    GameStatus['Approve'],
    GameStatus['Archive'],
    GameStatus['Cancel'],
    GameStatus['Close'],
    GameStatus['Finish'],
    GameStatus['Invite'],
    GameStatus['Reserve'],
    GameStatus['Moderate'],
    GameStatus['Publish'],
    GameStatus['Reject'],
  ],

  [Role.Organizer]: [
    GameStatus['Archive'],
    GameStatus['Cancel'],
    GameStatus['Close'],
    GameStatus['Finish'],
    GameStatus['Invite'],
    GameStatus['Reserve'],
    GameStatus['Moderate'],
    GameStatus['Publish'],
  ],

  [Mode['Unknown']]: [],
}

export const CategoryGameStatuses = {
  [Category['Active']]: [
    GameStatus['Close'],
    GameStatus['Invite'],
    GameStatus['Reserve'],
    GameStatus['Publish'],
  ],

  [GameStatus['Reject']]: [
    GameStatus['Reject'],
  ],

  [GameStatus['Moderate']]: [
    GameStatus['Moderate'],
  ],

  [GameStatus['Approve']]: [
    GameStatus['Approve'],
  ],

  [GameStatus['Cancel']]: [
    GameStatus['Cancel'],
  ],

  [GameStatus['Finish']]: [
    GameStatus['Finish'],
  ],

  [GameStatus['Archive']]: [
    GameStatus['Archive'],
  ],
}
