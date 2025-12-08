export const VenueStatus = Object.freeze({
  'Active': 'Active',
  'ARCHIVE': 'ARCHIVE',
})

export const VenueStatuses = Object.freeze([
  VenueStatus['ACTIVE'],
  VenueStatus['ARCHIVE'],
])

export const VenueStatusTitle = Object.freeze({
  [VenueStatus['ACTIVE']]: 'Активно',
  [VenueStatus['ARCHIVE']]: 'Архив',
})

export const VenueStatusIcon = Object.freeze({
  [VenueStatus['ACTIVE']]: 'hero/outline/check',
  [VenueStatus['ARCHIVE']]: 'hero/outline/archive-box',
})

export const inferVenueStatus = Object.freeze(
  /** @returns {keyof typeof VenueStatus | 'Unknown'} */
  x => VenueStatus[x?.status ?? x] ?? 'Unknown',
)
