import template from './templates/route-parameter.js' with { type: 'text' }

import { Routes } from '../source/entities/route.js'
import { Segment } from '../source/entities/segment.js'

let pathnames = Routes.map(route =>
  route
    .split('/')
    .map(key => Segment[key].cardinality === '1' ? key + '/:' + key : key)
    .join('/')
)

let parameters = pathnames.map(pathname =>
  pathname
    .split('/')
    .filter(key => key.includes(':'))
    .join('/')
)

let RouteParameters = JSON.stringify(parameters, undefined, 2)

let RouteParameter = JSON.stringify(Routes.reduce((o, x, i) => (o[x] = parameters[i], o), {}), null, 2)

Bun.write(
  './source/entities/route-parameter.js',
  template
    .replace('/* RouteParameters */', RouteParameters)
    .replace('/* RouteParameter */', RouteParameter),
)
