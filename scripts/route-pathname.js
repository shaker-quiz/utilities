import template from './templates/route-pathname.js' with { type: 'text' }

import { Routes } from '../source/entities/route.js'
import { Segment } from '../source/entities/segment.js'

let pathnames = Routes.map(route =>
  route
    .split('/')
    .map(key => Segment[key].cardinality === '1' ? key + '/:' + key : key)
    .join('/')
)

let RoutePathnames = JSON.stringify(
  pathnames,
  undefined,
  2,
)

let RoutePathname = JSON.stringify(
  Routes.reduce((o, x, i) => (o[x] = pathnames[i], o), {}),
  null,
  2,
)

let PathnameRoute = JSON.stringify(
  pathnames.reduce((o, x, i) => (o[x] = Routes[i], o), {}),
  null,
  2,
)

Bun.write(
  './source/entities/route-pathname.js',
  template
    .replace('/* RoutePathnames */', RoutePathnames)
    .replace('/* RoutePathname */', RoutePathname)
    .replace('/* PathnameRoute */', PathnameRoute),
)
