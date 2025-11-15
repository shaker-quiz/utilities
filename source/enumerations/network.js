export const Network = Object.freeze({
  'Docker': 'Docker',
  'Public': 'Public',
})

export const inferNetwork = Object.freeze(
  /** @returns {keyof typeof Network | 'Unknown'} */
  x => Network[x] ?? 'Unknown',
)
