export var VenueAudience = /** @type {const} */ ({
  'Open': 'Open',
  'Restricted': 'Restricted',
})

export var VenueAudiences = [
  VenueAudience['Open'],
  VenueAudience['Restricted'],
]

export var VenueAudienceTitle = {
  [VenueAudience['Open']]: 'Без ограничений',
  [VenueAudience['Restricted']]: 'Только взрослые',
}

export var VenueAudienceIcon = {
  [VenueAudience['Open']]: 'hero/outline/lock-open',
  [VenueAudience['Restricted']]: 'hero/outline/lock-closed',
}

var ValueVenueAudience = {
  ['false']: VenueAudience['Open'],
  ['true']: VenueAudience['Restricted'],
}

var VenueAudienceShape = /** @type {const} */ ({
  [VenueAudience['Open']]: {
    is_adult: false,
  },

  [VenueAudience['Restricted']]: {
    is_adult: true,
  },
})

/** @returns {keyof typeof VenueAudience | 'Unknown'} */
export var inferVenueAudience = value =>
  ValueVenueAudience[value?.is_adult]
    ?? VenueAudience[value]
    ?? 'Unknown'

/** @returns {typeof VenueAudienceShape[keyof typeof VenueAudienceShape] | { readonly is_adult: null }} */
export var inferVenueAudienceShape = value =>
  VenueAudienceShape[value]
    ?? { is_adult: null }
