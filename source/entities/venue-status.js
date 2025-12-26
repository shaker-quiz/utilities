export const VenueStatus = Object.freeze({
  'Active': 'Active',
  'Archive': 'Archive',
})

export const VenueStatuses = Object.freeze([
  'Active',
  'Archive',
])

/** @satisfies {Record<keyof typeof VenueStatus, string>} */
export const VenueStatusIcon = Object.freeze({
  'Active': 'hero/outline/check',
  'Archive': 'hero/outline/archive-box',
})
