import { Roles } from './roles.js'

export let GameStatuses: {
  Approved: 'APPROVED'
  Archive: 'ARCHIVE'
  Closed: 'CLOSED'
  Finished: 'FINISHED'
  Invitation: 'FORINVITES'
  Moderation: 'MODERATION'
  Published: 'PUBLISHED'
  Rejected: 'REJECTED'
  Reserved: 'IS_RESERVE'
}

export let RoleGameStatuses: {
  [Roles.Admin]: [
    typeof GameStatuses.Approved,
    typeof GameStatuses.Moderation,
    typeof GameStatuses.Published,
    typeof GameStatuses.Rejected,
    typeof GameStatuses.Finished,
    typeof GameStatuses.Archive,
    typeof GameStatuses.Invitation,
    typeof GameStatuses.Reserved,
    typeof GameStatuses.Closed,
  ]

  [Roles.Organizer]: [
    typeof GameStatuses.Approved,
    typeof GameStatuses.Published,
    typeof GameStatuses.Finished,
    typeof GameStatuses.Archive,
    typeof GameStatuses.Invitation,
    typeof GameStatuses.Reserved,
    typeof GameStatuses.Closed,
  ]

  [Roles.Default]: []
}
