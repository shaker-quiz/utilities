import { RoutePathnameParams } from '../entities/route-pathname-params.js'
import { RoutePathname } from '../entities/route-pathname.js'
import { Route } from '../entities/route.js'
import { Relation } from '../prototypes/relation.js'

export const hydrateRoutePathname = Object.freeze(
  /**
   * @template {keyof typeof import('../system/route.js').Route} RouteTemplate
   *
   * @param {RouteTemplate} route
   * @param {any[]} params
   */
  (route, params) => {
    if (!Array.isArray(params))
      throw TypeError(`Parameter 'params' must be 'Array'.`)

    var r = Relation
      .of(Route)
      .require(route)

    var rp = Relation
      .of(RoutePathname)
      .require(r)

    var rpp = Relation
      .of(RoutePathnameParams)
      .require(r)

    return rpp.reduce((rp, rpp, i) => rp.replace(rpp, params[i]), rp)
  },
)
