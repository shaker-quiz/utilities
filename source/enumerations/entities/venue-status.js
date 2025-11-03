export var VenueStatus = /** @type {const} */ ({
  'ANY': 'ANY',
  'ACTIVE': 'ACTIVE',
  'ARCHIVE': 'ARCHIVE',
  'UNKNOWN': 'UNKNOWN',
})

export var VenueStatuses = [
  VenueStatus['ANY'],
  VenueStatus['ACTIVE'],
  VenueStatus['ARCHIVE'],
  VenueStatus['UNKNOWN'],
]

export var WritableVenueStatuses = [
  VenueStatus['ACTIVE'],
  VenueStatus['ARCHIVE'],
]

export var VenueStatusTitle = {
  [VenueStatus['ANY']]: 'Любой',
  [VenueStatus['ACTIVE']]: 'Активно',
  [VenueStatus['ARCHIVE']]: 'Архив',
  [VenueStatus['UNKNOWN']]: 'Неизвестно',
}

/** @type {Record<keyof typeof VenueStatus, Icon>} */
export var VenueStatusIcon = {
  [VenueStatus['ANY']]: 'hero/outline/square-2-stack',
  [VenueStatus['ACTIVE']]: 'hero/outline/check',
  [VenueStatus['ARCHIVE']]: 'hero/outline/archive-box',
  [VenueStatus['UNKNOWN']]: 'hero/outline/no-symbol',
}

/**
 * @returns {keyof typeof VenueStatus}
 */
var get = value =>
  value in VenueStatus
    ? value
    : VenueStatus['UNKNOWN']

export var getVenueStatus = value => {
  switch (typeof value) {
    case 'string':
      return get(value)

    case 'object':
      return get(value?.status)

    default:
      return get(undefined)
  }
}
ß
