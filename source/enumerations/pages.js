import { Icons } from './icons.js'
import { Kinds } from './kinds.js'
import { Methods } from './methods.js'

export var Pages = /** @type {const} */ ({
  '404': '404',
  Exception: 'Exception',
  Home: 'Home',
  Profile: 'Profile',
})

/**
 * @type {Record<Page, Icon>}
 */
export var PageIcons = {
  [Pages['404']]: Icons['exclamation-triangle'],
  [Pages.Exception]: Icons['exclamation-circle'],
  [Pages.Home]: Icons['home'],
  [Pages.Profile]: Icons['user'],
}

/**
 * @type {Record<Page, Record<Kind, string>>}
 */
export var PageKindPathnames = {
  [Pages['404']]: {
    [Kinds.Unit]: '/404',
    [Kinds.Set]: '/404',
  },

  [Pages.Exception]: {
    [Kinds.Unit]: '/exception',
    [Kinds.Set]: '/exception',
  },

  [Pages.Home]: {
    [Kinds.Unit]: '/',
    [Kinds.Set]: '/',
  },

  [Pages.Profile]: {
    [Kinds.Unit]: '/profile',
    [Kinds.Set]: '/profile',
  },
}

/**
 * @type {Record<Page, Record<Method, Set<Requirement>>>}
 */
export var PageMethodRequirements = {
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

  [Pages.Profile]: {
    [Methods.DELETE]: new Set([]),
    [Methods.GET]: new Set([]),
    [Methods.OPTIONS]: new Set([]),
    [Methods.PATCH]: new Set([]),
    [Methods.POST]: new Set([]),
    [Methods.PUT]: new Set([]),
  },
}
