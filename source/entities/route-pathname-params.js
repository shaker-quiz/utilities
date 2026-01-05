import { RoutePathname } from './route-pathname.js'
import { Route } from './route.js'

export const RoutePathnameParams = (() => {
  /** @type {Record<keyof typeof Route, string[]>} */
  let object = {}

  for (const route in RoutePathname)
    object[route] = RoutePathname[route].match(/(:(\w)+)/g)

  return Object.freeze(object)
})()
