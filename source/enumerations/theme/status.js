export const ThemeStatus = Object.freeze({
  'Active': 'Active',
  'Archive': 'Archive',
})

/** @satisfies {Array<keyof typeof ThemeStatus>} */
export const ThemeStatuses = Object.freeze([
  'Active',
  'Archive',
])

/** @satisfies {Record<keyof typeof ThemeStatus, string>} */
export const ThemeStatusTitle = Object.freeze({
  'Active': 'Активно',
  'Archive': 'Архив',
})

/** @satisfies {Record<keyof typeof ThemeStatus, string>} */
export const ThemeStatusIcon = Object.freeze({
  'Active': 'hero/outline/check',
  'Archive': 'hero/outline/archive-box',
})

export const inferThemeStatus = Object.freeze(
  /** @returns {keyof typeof ThemeStatus | 'Unknown'} */
  x => ThemeStatus[x?.status ?? x] ?? 'Unknown',
)
