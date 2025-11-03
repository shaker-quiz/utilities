export var VenueStatus = /** @type {const} */ ({
  'ACTIVE': 'ACTIVE',
  'ARCHIVE': 'ARCHIVE',
  'UNKNOWN': 'UNKNOWN',
})

export var VenueStatuses = Object.values(VenueStatus)

export var VenueStatusWeight = {
  [VenueStatus['ACTIVE']]: 0,
  [VenueStatus['ARCHIVE']]: 1,
}

export var VenueStatusTitle = {
  [VenueStatus['ACTIVE']]: 'Активно',
  [VenueStatus['ARCHIVE']]: 'Архив',
  [VenueStatus['UNKNOWN']]: 'Неизвестно',
}

/** @type {Record<VenueStatus, Icon>} */
export var VenueStatusIcon = {
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
