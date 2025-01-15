import { Roles } from './roles.js'

export let GameStatuses = {
  Approved: 'APPROVED',
  Archive: 'ARCHIVE',
  Closed: 'CLOSED',
  Finished: 'FINISHED',
  Invitation: 'FORINVITES',
  Moderation: 'MODERATION',
  Published: 'PUBLISHED',
  Rejected: 'REJECTED',
  Reserved: 'IS_RESERVE',
}

export let RoleGameStatuses = {
  [Roles.Admin]: [
    GameStatuses.Approved,
    GameStatuses.Moderation,
    GameStatuses.Published,
    GameStatuses.Rejected,
    GameStatuses.Finished,
    GameStatuses.Archive,
    GameStatuses.Invitation,
    GameStatuses.Reserved,
    GameStatuses.Closed,
  ],

  [Roles.Organizer]: [
    GameStatuses.Approved,
    GameStatuses.Published,
    GameStatuses.Finished,
    GameStatuses.Archive,
    GameStatuses.Invitation,
    GameStatuses.Reserved,
    GameStatuses.Closed,
  ],

  [Roles.Default]: [],
}
