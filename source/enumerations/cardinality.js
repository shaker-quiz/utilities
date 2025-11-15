export const Cardinality = Object.freeze({
  '1': '1',
  '1-1': '1-1',
  '1-N': '1-N',
  'N': 'N',
  'N-1': 'N-1',
  'N-N': 'N-N',
})

export const inferCardinality = Object.freeze(
  /** @returns {keyof typeof Cardinality | 'Unknown'} */
  x => Cardinality[x] ?? 'Unknown',
)
