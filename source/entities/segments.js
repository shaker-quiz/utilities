export const Segments = [
  'country',
]

export const Segment = Segments.reduce((o, x) => (o[x] = x, o), {})

export const SegmentRelation = {
  'country': 'countries',
  'countries': 'country',
}

export const SegmentSegments = {}

export const SegmentProperties = {}

export const SegmentCardinality = {
  'country': '1',
  'countries': 'n',
}

let x = Segments.map(segment => ({
  segment,
  relation: SegmentRelation[segment],
  segments: SegmentSegments[segment] ?? [],
  properties: SegmentProperties[segment] ?? [],
  cardinality: SegmentCardinality[segment],
}))

console.log(x)
