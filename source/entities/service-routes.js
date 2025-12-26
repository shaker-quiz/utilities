import { DefaultRouteService } from './route-service.js'
import { Service } from './service.js'

export let ServiceRoutes = (() => {
  let object = {}

  for (const service in Service)
    object[service] = []

  for (const route in DefaultRouteService)
    object[DefaultRouteService[route]].push(route)

  return Object.freeze(object)
})()

export let ServiceRoutes = {
  'Checkin': [
    'checkin',
  ],

  'Users': [
    'user',
    'user/cities',
    'user/password',
    'user/role',
    'users',
    'users/cities',
    'users/role',
  ],

  'Landing': [
    ''
  ],
}
