import { Category } from './category.js'
import { Mode } from './mode.js'
import { Role } from './role.js'

export const GameStatus = /** @type {const} */ ({
  Moderate: 'Moderate',
  Reject: 'Reject',
  Approve: 'Approve',
  Publish: 'Publish',
  Reserve: 'Reserve',
  Invite: 'Invite',
  Close: 'Close',
  Cancel: 'Cancel',
  Finish: 'Finish',
  Archive: 'Archive',
})

export const GameStatuses = Object.values(GameStatus)

export const RoleGameStatusGameStatuses = {
  [Role.Admin]: {
    [GameStatus.Moderate]: [
      GameStatus.Moderate,
      GameStatus.Reject,
      GameStatus.Approve,
      GameStatus.Publish,
      GameStatus.Reserve,
      GameStatus.Invite,
      GameStatus.Close,
      GameStatus.Cancel,
      GameStatus.Finish,
      GameStatus.Archive,
    ],

    [GameStatus.Reject]: [
      GameStatus.Moderate,
      GameStatus.Reject,
      GameStatus.Approve,
      GameStatus.Publish,
      GameStatus.Reserve,
      GameStatus.Invite,
      GameStatus.Close,
      GameStatus.Cancel,
      GameStatus.Finish,
      GameStatus.Archive,
    ],

    [GameStatus.Approve]: [
      GameStatus.Moderate,
      GameStatus.Reject,
      GameStatus.Approve,
      GameStatus.Publish,
      GameStatus.Reserve,
      GameStatus.Invite,
      GameStatus.Close,
      GameStatus.Cancel,
      GameStatus.Finish,
      GameStatus.Archive,
    ],

    [GameStatus.Publish]: [
      GameStatus.Moderate,
      GameStatus.Reject,
      GameStatus.Approve,
      GameStatus.Publish,
      GameStatus.Reserve,
      GameStatus.Invite,
      GameStatus.Close,
      GameStatus.Cancel,
      GameStatus.Finish,
      GameStatus.Archive,
    ],

    [GameStatus.Reserve]: [
      GameStatus.Moderate,
      GameStatus.Reject,
      GameStatus.Approve,
      GameStatus.Publish,
      GameStatus.Reserve,
      GameStatus.Invite,
      GameStatus.Close,
      GameStatus.Cancel,
      GameStatus.Finish,
      GameStatus.Archive,
    ],

    [GameStatus.Invite]: [
      GameStatus.Moderate,
      GameStatus.Reject,
      GameStatus.Approve,
      GameStatus.Publish,
      GameStatus.Reserve,
      GameStatus.Invite,
      GameStatus.Close,
      GameStatus.Cancel,
      GameStatus.Finish,
      GameStatus.Archive,
    ],

    [GameStatus.Close]: [
      GameStatus.Moderate,
      GameStatus.Reject,
      GameStatus.Approve,
      GameStatus.Publish,
      GameStatus.Reserve,
      GameStatus.Invite,
      GameStatus.Close,
      GameStatus.Cancel,
      GameStatus.Finish,
      GameStatus.Archive,
    ],

    [GameStatus.Cancel]: [
      GameStatus.Moderate,
      GameStatus.Reject,
      GameStatus.Approve,
      GameStatus.Publish,
      GameStatus.Reserve,
      GameStatus.Invite,
      GameStatus.Close,
      GameStatus.Cancel,
      GameStatus.Finish,
      GameStatus.Archive,
    ],

    [GameStatus.Finish]: [
      GameStatus.Moderate,
      GameStatus.Reject,
      GameStatus.Approve,
      GameStatus.Publish,
      GameStatus.Reserve,
      GameStatus.Invite,
      GameStatus.Close,
      GameStatus.Cancel,
      GameStatus.Finish,
      GameStatus.Archive,
    ],

    [GameStatus.Archive]: [
      GameStatus.Moderate,
      GameStatus.Reject,
      GameStatus.Approve,
      GameStatus.Publish,
      GameStatus.Reserve,
      GameStatus.Invite,
      GameStatus.Close,
      GameStatus.Cancel,
      GameStatus.Finish,
      GameStatus.Archive,
    ],
  },

  [Role.Organizer]: {
    [GameStatus.Moderate]: [],

    [GameStatus.Reject]: [
      GameStatus.Moderate,
    ],

    [GameStatus.Approve]: [
      GameStatus.Publish,
      GameStatus.Reserve,
      GameStatus.Invite,
      GameStatus.Close,
      GameStatus.Cancel,
    ],

    [GameStatus.Publish]: [
      GameStatus.Reserve,
      GameStatus.Invite,
      GameStatus.Close,
      GameStatus.Cancel,
    ],

    [GameStatus.Reserve]: [
      GameStatus.Publish,
      GameStatus.Invite,
      GameStatus.Close,
      GameStatus.Cancel,
    ],

    [GameStatus.Invite]: [
      GameStatus.Publish,
      GameStatus.Reserve,
      GameStatus.Close,
      GameStatus.Cancel,
    ],

    [GameStatus.Close]: [
      GameStatus.Publish,
      GameStatus.Reserve,
      GameStatus.Invite,
      GameStatus.Cancel,
    ],

    [GameStatus.Cancel]: [
      GameStatus.Publish,
      GameStatus.Reserve,
      GameStatus.Invite,
      GameStatus.Close,
    ],

    [GameStatus.Archive]: [],

    [GameStatus.Finish]: [],
  },

  [Mode.Unknown]: {
    [GameStatus.Moderate]: [],

    [GameStatus.Approve]: [],

    [GameStatus.Reject]: [],

    [GameStatus.Publish]: [],

    [GameStatus.Reserve]: [],

    [GameStatus.Invite]: [],

    [GameStatus.Close]: [],

    [GameStatus.Cancel]: [],

    [GameStatus.Finish]: [],

    [GameStatus.Archive]: [],
  },
}

export const RoleGameStatuses = {
  [Role.Admin]: [
    GameStatus.Moderate,
    GameStatus.Reject,
    GameStatus.Approve,
    GameStatus.Publish,
    GameStatus.Reserve,
    GameStatus.Invite,
    GameStatus.Close,
    GameStatus.Cancel,
    GameStatus.Finish,
    GameStatus.Archive,
  ],

  [Role.Organizer]: [
    GameStatus.Moderate,
    GameStatus.Publish,
    GameStatus.Reserve,
    GameStatus.Invite,
    GameStatus.Close,
    GameStatus.Cancel,
    GameStatus.Finish,
    GameStatus.Archive,
  ],

  [Mode.Unknown]: [],
}

export const CategoryGameStatuses = {
  [Category.Active]: [
    GameStatus.Publish,
    GameStatus.Reserve,
    GameStatus.Invite,
    GameStatus.Close,
  ],

  [GameStatus.Moderate]: [
    GameStatus.Moderate,
  ],

  [GameStatus.Reject]: [
    GameStatus.Reject,
  ],

  [GameStatus.Approve]: [
    GameStatus.Approve,
  ],

  [GameStatus.Cancel]: [
    GameStatus.Cancel,
  ],

  [GameStatus.Finish]: [
    GameStatus.Finish,
  ],

  [GameStatus.Archive]: [
    GameStatus.Archive,
  ],
}

export const AddressableGameStatuses = [
  GameStatus.Publish,
  GameStatus.Reserve,
  GameStatus.Invite,
  GameStatus.Close,
  GameStatus.Cancel,
  GameStatus.Finish,
  GameStatus.Archive,
]

export const DiscoverableGameStatuses = [
  GameStatus.Publish,
  GameStatus.Reserve,
  GameStatus.Invite,
  GameStatus.Close,
]
