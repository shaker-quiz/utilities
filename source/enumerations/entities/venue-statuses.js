export var VenueStatus = /** @type {const} */ ({
  'Active': 'Active',
  'Archive': 'Archive',
})

export var VenueStatuses = Object.values(VenueStatus)

/** @type {Record<VenueStatus, number>} */
export var VenueStatusWeight = {
  [VenueStatus.Active]: 0,
  [VenueStatus.Archive]: 1,
}

/** @type {Record<VenueStatus, string>} */
export var VenueStatusTitle = {
  [VenueStatus.Active]: 'В пользовании',
  [VenueStatus.Archive]: 'В архиве',
}

/** @type {Record<VenueStatus, string>} */
export var VenueStatusColor = {
  [VenueStatus.Active]: 'success',
  [VenueStatus.Archive]: 'current',
}

/** @type {Record<VenueStatus, string>} */
export var VenueStatusTextColor = {
  [VenueStatus.Active]: 'text-success',
  [VenueStatus.Archive]: 'text-current',
}

/** @type {Record<VenueStatus, Icon>} */
export var VenueStatusIcon = {
  [VenueStatus.Active]: 'hero/outline/check',
  [VenueStatus.Archive]: 'hero/outline/archive-box',
}
