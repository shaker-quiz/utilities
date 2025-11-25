export const VenueAudience = Object.freeze({
  'Open': 'Open',
  'Restricted': 'Restricted',
})

export const VenueAudiences = Object.freeze([
  VenueAudience['Open'],
  VenueAudience['Restricted'],
])

export const VenueAudienceTitle = Object.freeze({
  [VenueAudience['Open']]: 'Без ограничений',
  [VenueAudience['Restricted']]: 'Только взрослые',
})

export const VenueAudienceIcon = Object.freeze({
  [VenueAudience['Open']]: 'hero/outline/lock-open',
  [VenueAudience['Restricted']]: 'hero/outline/lock-closed',
})

const ValueVenueAudience = Object.freeze({
  'false': VenueAudience['Open'],
  'true': VenueAudience['Restricted'],
})

const VenueAudienceShape = /** @type {const} */ (Object.freeze({
  [VenueAudience['Open']]: {
    is_adult: false,
  },

  [VenueAudience['Restricted']]: {
    is_adult: true,
  },
}))

export const inferVenueAudience = Object.freeze(
  /** @returns {keyof typeof VenueAudience | 'Unknown'} */
  x => ValueVenueAudience[x?.is_adult] ?? VenueAudience[x] ?? 'Unknown',
)

export const inferVenueAudienceShape = Object.freeze(
  /** @returns {typeof VenueAudienceShape[keyof typeof VenueAudienceShape] | { is_adult: null }} */
  x => VenueAudienceShape[x] ?? { is_adult: null },
)
