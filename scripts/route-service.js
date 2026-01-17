import template from './templates/route-service.js' with { type: 'text' }

import { Routes } from '../source/entities/route.js'
import { Segment } from '../source/entities/segment.js'

let config = [undefined, 2]

let services = Routes.map(route => Segment[route.split('/').at(0)].service)

let RouteServices = services.filter((x, i, a) => a.indexOf(x) === i)

let RouteService = Routes.reduce((o, x, i) => (o[x] = services[i], o), {})

let ServiceRoutes = Object
  .entries(Object.groupBy(Object.entries(RouteService), ([, service]) => service))
  .map(([service, pairs]) => [service, pairs.map(([route]) => route)])
  .reduce((o, [s, r]) => (o[s] = r, o), {})

Bun.write(
  './source/entities/route-service.js',
  template
    .replace('/* RouteServices */', JSON.stringify(RouteServices, ...config))
    .replace('/* RouteService */', JSON.stringify(RouteService, ...config))
    .replace('/* ServiceRoutes */', JSON.stringify(ServiceRoutes, ...config)),
)
