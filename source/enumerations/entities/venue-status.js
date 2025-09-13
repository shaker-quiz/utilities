export var VenueStatus = /** @type {const} */ ({
  'ACTIVE': 'ACTIVE',
  'ARCHIVE': 'ARCHIVE',
})

export var VenueStatuses = Object.values(VenueStatus)

export var VenueStatusWeight = {
  [VenueStatus.ACTIVE]: 0,
  [VenueStatus.ARCHIVE]: 1,
}

export var VenueStatusTitle = {
  [VenueStatus.ACTIVE]: 'В пользовании',
  [VenueStatus.ARCHIVE]: 'В архиве',
}

export var VenueStatusColor = {
  [VenueStatus.ACTIVE]: 'success',
  [VenueStatus.ARCHIVE]: 'current',
}

export var VenueStatusTextColor = {
  [VenueStatus.ACTIVE]: 'text-success',
  [VenueStatus.ARCHIVE]: 'text-current',
}

/** @type {Record<VenueStatus, Icon>} */
export var VenueStatusIcon = {
  [VenueStatus.ACTIVE]: 'hero/outline/check',
  [VenueStatus.ARCHIVE]: 'hero/outline/archive-box',
}
