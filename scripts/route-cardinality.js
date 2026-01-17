import template from './templates/route-cardinality.js' with { type: 'text' }

import { Routes } from '../source/entities/route.js'
import { Segment } from '../source/entities/segment.js'

let cardinalities = Routes.map(route => {
  const cardinalities = route.split('/').map(key => Segment[key].cardinality)

  return cardinalities.length > 1
    ? cardinalities.at(0) + '/' + cardinalities.at(-1)
    : cardinalities.at(0)
})

let RouteCardinalities = JSON.stringify(cardinalities, undefined, 2)

let RouteCardinality = JSON.stringify(Routes.reduce((o, x, i) => (o[x] = cardinalities[i], o), {}), null, 2)

Bun.write(
  './source/entities/route-cardinality.js',
  template
    .replace('/* RouteCardinalities */', RouteCardinalities)
    .replace('/* RouteCardinality */', RouteCardinality),
)
