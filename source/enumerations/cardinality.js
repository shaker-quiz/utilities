export const Cardinality = Object.freeze({
  '1': '1',
  '1-1': '1-1',
  '1-N': '1-N',
  'N': 'N',
  'N-1': 'N-1',
  'N-N': 'N-N',
})

/** @returns {keyof typeof Cardinality | 'Unknown'} */
export const inferCardinality = x => Cardinality[x] ?? 'Unknown'
