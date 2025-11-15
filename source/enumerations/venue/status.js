export var VenueStatus = /** @type {const} */ ({
  'ACTIVE': 'ACTIVE',
  'ARCHIVE': 'ARCHIVE',
})

export var VenueStatuses = [
  VenueStatus['ACTIVE'],
  VenueStatus['ARCHIVE'],
]

export var VenueStatusTitle = {
  [VenueStatus['ACTIVE']]: 'Активно',
  [VenueStatus['ARCHIVE']]: 'Архив',
}

export var VenueStatusIcon = {
  [VenueStatus['ACTIVE']]: 'hero/outline/check',
  [VenueStatus['ARCHIVE']]: 'hero/outline/archive-box',
}

export var inferVenueStatus = Object.freeze(
  /** @returns {keyof typeof VenueStatus | 'Unknown'} */
  x => VenueStatus[x?.status ?? x] ?? 'Unknown',
)
