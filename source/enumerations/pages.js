import { Default } from './default.js'
import { Icons } from './icons.js'
import { Methods } from './methods.js'

export var Pages = /** @type {const} */ ({
  '404': '404',
  Exception: 'Exception',
  Home: 'Home',
})

/**
 * @type {Record<Page, Icon>}
 */
export var PageIcons = {
  [Pages['404']]: Icons['exclamation-triangle'],
  [Pages.Exception]: Icons['exclamation-circle'],
  [Pages.Home]: Icons['home'],
}

/**
 * @type {Record<Page, Record<Kind, string>>}
 */
export var PageKindPathnames = {
  [Pages['404']]: {
    [Default]: '/404',
  },

  [Pages.Exception]: {
    [Default]: '/exception',
  },

  [Pages.Home]: {
    [Default]: '/',
  },
}

/**
 * @type {Record<Page, Record<Method, Set<Requirement>>>}
 */
export var ProcedureMethodRequirements = {
  [Pages['404']]: {
    [Methods.DELETE]: new Set([]),
    [Methods.GET]: new Set([]),
    [Methods.OPTIONS]: new Set([]),
    [Methods.PATCH]: new Set([]),
    [Methods.POST]: new Set([]),
    [Methods.PUT]: new Set([]),
  },

  [Pages.Exception]: {
    [Methods.DELETE]: new Set([]),
    [Methods.GET]: new Set([]),
    [Methods.OPTIONS]: new Set([]),
    [Methods.PATCH]: new Set([]),
    [Methods.POST]: new Set([]),
    [Methods.PUT]: new Set([]),
  },

  [Pages.Home]: {
    [Methods.DELETE]: new Set([]),
    [Methods.GET]: new Set([]),
    [Methods.OPTIONS]: new Set([]),
    [Methods.PATCH]: new Set([]),
    [Methods.POST]: new Set([]),
    [Methods.PUT]: new Set([]),
  },
}
