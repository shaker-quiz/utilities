export let Buckets = /** @type {const} */ ({
  Services: 'Services',
})

export let BucketNames = /** @type {const} */ ({
  [Buckets.Services]: 'services',
})

/**
 * Available buckets' folders enumeration
 */
export let Folders = {
  [Buckets.Services]: {
    GameGuides: 'GameGuides',
    GamePhotos: 'GamePhotos',
    ReviewAuthors: 'ReviewAuthors',
  },
}

/**
 * Available buckets folders' names enumeration
 */
export let FolderNames = /** @type {const} */ ({
  [Buckets.Services]: {
    [Folders.Services.GameGuides]: 'game-guides',
    [Folders.Services.GamePhotos]: 'game-photos',
    [Folders.Services.ReviewAuthors]: 'review-authors',
  },
})

/**
 * Neo4j entity labels
 */
export let Labels = /** @type {const} */ ({
  Page: {
    Landing: 'Landing',
  },

  Media: {
    Image: 'Image',
    Video: 'Video',
    GamePhoto: 'GamePhoto',
    GameGuide: 'GameGuide',
    ReviewAuthor: 'ReviewAuthor',
  },
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
