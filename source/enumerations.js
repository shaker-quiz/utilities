export let Buckets = /** @type {const} */ ({
  Reviews: 'reviews',
})

export let UserRoles = /** @type {const} */ ({
  Admin: 'admin',
  Manager: 'manager',
  User: 'user',
  Organizer: 'organizer',
})

export let GameStatuses = /** @type {const} */ ({
  Moderation: 'MODERATION',
  Published: 'PUBLISHED',
  Rejected: 'REJECTED',
  Approved: 'APPROVED',
  Finished: 'FINISHED',
  Archive: 'ARCHIVE',
  Invitation: 'FORINVITES',
  Reservation: 'IS_RESERVE',
  Closed: 'CLOSED',
})

export let RegExps = {
  Uuid: /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/,
  ElementId:
    /\d+:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}:\d+/,
}

export let Constants = /** @type {const} */ ({
  /**
   * @see https://www.rfc-editor.org/rfc/rfc9562.html#name-nil-uuid
   */
  NilUuid: '00000000-0000-0000-0000-000000000000',
})
