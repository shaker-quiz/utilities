export const Network = Object.freeze({
  'Docker': 'Docker',
  'Public': 'Public',
})

/** @returns {keyof typeof Network | 'Unknown'} */
export const inferNetwork = x => Network[x] ?? 'Unknown'
