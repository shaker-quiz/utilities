export var VenueStatus = /** @type {const} */ ({
  'ACTIVE': 'ACTIVE',
  'ARCHIVE': 'ARCHIVE',
})

export var VenueStatuses = Object.values(VenueStatus)

/** @type {Record<VenueStatus, number>} */
export var VenueStatusWeight = {
  [VenueStatus.ACTIVE]: 0,
  [VenueStatus.ARCHIVE]: 1,
}

/** @type {Record<VenueStatus, string>} */
export var VenueStatusTitle = {
  [VenueStatus.ACTIVE]: 'В пользовании',
  [VenueStatus.ARCHIVE]: 'В архиве',
}

/** @type {Record<VenueStatus, Icon>} */
export var VenueStatusIcon = {
  [VenueStatus.ACTIVE]: 'hero/outline/check',
  [VenueStatus.ARCHIVE]: 'hero/outline/archive-box',
}

/** @type {Record<VenueStatus, string>} */
export var VenueStatusColor = {
  [VenueStatus.ACTIVE]: 'text-success',
  [VenueStatus.ARCHIVE]: 'text-current',
}
