import template from './templates/route-relation.js' with { type: 'text' }

import { Routes } from '../source/entities/route.js'
import { Segment } from '../source/entities/segment.js'

let relations = Routes.map(route =>
  route
    .split('/')
    .map((key, index) =>
      Segment[key].cardinality === '1' || index > 0
        ? key
        : Segment[key].relation ?? key
    )
    .join('/')
)

let RouteRelations = JSON.stringify(relations, undefined, 2)

let RouteRelation = JSON.stringify(Routes.reduce((o, x, i) => (o[x] = relations[i], o), {}), null, 2)

Bun.write(
  './source/entities/route-relation.js',
  template
    .replace('/* RouteRelations */', RouteRelations)
    .replace('/* RouteRelation */', RouteRelation),
)
