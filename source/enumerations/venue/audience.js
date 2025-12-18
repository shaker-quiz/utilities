export const VenueAudience = Object.freeze({
  'Open': 'Open',
  'Adults': 'Adults',
})

/** @satisfies {Array<keyof typeof VenueAudience>} */
export const VenueAudiences = Object.freeze([
  'Open',
  'Adults',
])

/** @satisfies {Record<keyof typeof VenueAudience, string>} */
export const VenueAudienceTitle = Object.freeze({
  'Open': 'Все',
  'Adults': 'Взрослые',
})

/** @satisfies {Record<keyof typeof VenueAudience, string>} */
export const VenueAudienceIcon = Object.freeze({
  'Open': 'hero/outline/lock-open',
  'Adults': 'hero/outline/lock-closed',
})

export const inferVenueAudience = Object.freeze(
  /** @returns {keyof typeof VenueAudience | 'Unknown'} */
  x => VenueAudience[x?.audience ?? x] ?? 'Unknown',
)
