export var VenueAudience = /** @type {const} */ ({
  'Any': 'Any',
  'All': 'All',
  'Restricted': 'Restricted',
  'Unknown': 'Unknown',
})

export var VenueAudiences = [
  VenueAudience['Any'],
  VenueAudience['All'],
  VenueAudience['Restricted'],
  VenueAudience['Unknown'],
]

export var PersistedVenueAudiences = [
  VenueAudience['All'],
  VenueAudience['Restricted'],
]

var VenueAudienceShape = {
  [VenueAudience['All']]: {
    is_adult: false,
  },

  [VenueAudience['Restricted']]: {
    is_adult: true,
  },

  [VenueAudience['Unknown']]: {
    is_adult: null,
  },
}

var VenueAudienceShapes = Object.entries(VenueAudienceShape)

export var VenueAudienceTitle = {
  [VenueAudience['Any']]: 'Любая',
  [VenueAudience['All']]: 'Без ограничений',
  [VenueAudience['Restricted']]: '18+',
  [VenueAudience['Unknown']]: 'Неизвестно',
}

export var VenueAudienceIcon = {
  [VenueAudience['Any']]: 'hero/outline/square-2-stack',
  [VenueAudience['All']]: 'hero/outline/check-circle',
  [VenueAudience['Restricted']]: 'hero/outline/x-circle',
  [VenueAudience['Unknown']]: 'hero/outline/no-symbol',
}

/**
 * @returns {keyof typeof VenueAudience}
 */
var fromString = value =>
  value in VenueAudience
    ? value
    : VenueAudience['Unknown']

/**
 * @returns {keyof typeof VenueAudience}
 */
var fromObject = value =>
  VenueAudienceShapes
    .find(([, shape]) => shape.is_adult === value?.is_adult)
    ?.at(0)
    ?? VenueAudience['Unknown']

/**
 * @returns {typeof VenueAudienceShape[keyof typeof VenueAudienceShape]}
 */
var toObject = value =>
  VenueAudienceShapes
    .find(([venueAudience, shape]) => venueAudience === value)
    ?.at(1)
    ?? VenueAudienceShape[VenueAudience['Unknown']]

/**
 * @returns {keyof typeof VenueAudience}
 */
export var inferVenueAudience = value => {
  switch (typeof value) {
    case 'string':
      return fromString(value)

    case 'object':
      return fromObject(value)

    default:
      return VenueAudience['Unknown']
  }
}

export var inferVenueAudienceShape = value => {
  switch (typeof value) {
    case 'string':
      return toObject(value)

    default:
      return VenueAudienceShape[VenueAudience['Unknown']]
  }
}
