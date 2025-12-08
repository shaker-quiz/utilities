export const VenueStatus = Object.freeze({
  'Active': 'Active',
  'Archive': 'Archive',
})

/** @satisfies {Array<keyof typeof VenueStatus>} */
export const VenueStatuses = Object.freeze([
  'Active',
  'Archive',
])

/** @satisfies {Record<keyof typeof VenueStatus, string>} */
export const VenueStatusTitle = Object.freeze({
  'Active': 'Активно',
  'Archive': 'Архив',
})

/** @satisfies {Record<keyof typeof VenueStatus, string>} */
export const VenueStatusIcon = Object.freeze({
  'Active': 'hero/outline/check',
  'Archive': 'hero/outline/archive-box',
})

export const inferVenueStatus = Object.freeze(
  /** @returns {keyof typeof VenueStatus | 'Unknown'} */
  x => VenueStatus[x?.status ?? x] ?? 'Unknown',
)
