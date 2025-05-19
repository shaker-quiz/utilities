import { Icons } from './icons.js'
import { Kinds } from './kinds.js'
import { Methods } from './methods.js'
import { Requirements } from './requirements.js'

export var Domains = /** @type {const} */ ({
  Asset: 'Asset',
  User: 'User',
  Role: 'Role',
  City: 'City',
  Venue: 'Venue',
  Theme: 'Theme',
  ThemeAsset: 'ThemeAsset',
  Game: 'Game',
  GameAsset: 'GameAsset',
  Registration: 'Registration',
  Mailing: 'Mailing',
})

/**
 * @type {Record<Domain, Icon>}
 */
export var DomainIcons = {
  [Domains.User]: Icons['users'],
  [Domains.Role]: Icons['identification'],
  [Domains.City]: Icons['building-office'],
  [Domains.Venue]: Icons['map-pin'],
  [Domains.Theme]: Icons['document-text'],
  [Domains.Game]: Icons['newspaper'],
  [Domains.Registration]: Icons['user-group'],
  [Domains.Mailing]: Icons['envelope'],
}

/**
 * @type {Record<Domain, Record<Kind, string>>}
 */
export var DomainKindPathnames = {
  [Domains.User]: {
    [Kinds.Unit]: '/user/:user?',
    [Kinds.Set]: '/users',
  },

  [Domains.Role]: {
    [Kinds.Unit]: '/role/:role?',
    [Kinds.Set]: '/roles',
  },

  [Domains.City]: {
    [Kinds.Unit]: '/city/:city?',
    [Kinds.Set]: '/cities',
  },

  [Domains.Venue]: {
    [Kinds.Unit]: '/venue/:venue?',
    [Kinds.Set]: '/venues',
  },

  [Domains.Theme]: {
    [Kinds.Unit]: '/theme/:theme?',
    [Kinds.Set]: '/themes',
  },

  [Domains.Game]: {
    [Kinds.Unit]: '/game/:game?',
    [Kinds.Set]: '/games',
  },

  [Domains.Registration]: {
    [Kinds.Unit]: '/registration/:registration?',
    [Kinds.Set]: '/registrations',
  },

  [Domains.Mailing]: {
    [Kinds.Unit]: '/mailing/:mailing?',
    [Kinds.Set]: '/mailings',
  },
}

/**
 * @type {Record<Domain, Record<Method, Set<Requirement>>>}
 */
export var DomainMethodRequirements = {
  [Domains.User]: {
    [Methods.DELETE]: new Set([Requirements.Checkin]),
    [Methods.GET]: new Set([Requirements.Checkin]),
    [Methods.OPTIONS]: new Set([]),
    [Methods.PATCH]: new Set([Requirements.Checkin, Requirements.Body]),
    [Methods.POST]: new Set([Requirements.Checkin, Requirements.Body]),
    [Methods.PUT]: new Set([Requirements.Checkin, Requirements.Body]),
  },

  [Domains.Role]: {
    [Methods.DELETE]: new Set([Requirements.Checkin]),
    [Methods.GET]: new Set([Requirements.Checkin]),
    [Methods.OPTIONS]: new Set([]),
    [Methods.PATCH]: new Set([Requirements.Checkin, Requirements.Body]),
    [Methods.POST]: new Set([Requirements.Checkin, Requirements.Body]),
    [Methods.PUT]: new Set([Requirements.Checkin, Requirements.Body]),
  },

  [Domains.City]: {
    [Methods.DELETE]: new Set([Requirements.Checkin]),
    [Methods.GET]: new Set([Requirements.Checkin]),
    [Methods.OPTIONS]: new Set([]),
    [Methods.PATCH]: new Set([Requirements.Checkin, Requirements.Body]),
    [Methods.POST]: new Set([Requirements.Checkin, Requirements.Body]),
    [Methods.PUT]: new Set([Requirements.Checkin, Requirements.Body]),
  },

  [Domains.Venue]: {
    [Methods.DELETE]: new Set([Requirements.Checkin]),
    [Methods.GET]: new Set([Requirements.Checkin]),
    [Methods.OPTIONS]: new Set([]),
    [Methods.PATCH]: new Set([Requirements.Checkin, Requirements.Body]),
    [Methods.POST]: new Set([Requirements.Checkin, Requirements.Body]),
    [Methods.PUT]: new Set([Requirements.Checkin, Requirements.Body]),
  },

  [Domains.Theme]: {
    [Methods.DELETE]: new Set([Requirements.Checkin]),
    [Methods.GET]: new Set([Requirements.Checkin]),
    [Methods.OPTIONS]: new Set([]),
    [Methods.PATCH]: new Set([Requirements.Checkin, Requirements.Body]),
    [Methods.POST]: new Set([Requirements.Checkin, Requirements.Body]),
    [Methods.PUT]: new Set([Requirements.Checkin, Requirements.Body]),
  },

  [Domains.Game]: {
    [Methods.DELETE]: new Set([Requirements.Checkin]),
    [Methods.GET]: new Set([Requirements.Checkin]),
    [Methods.OPTIONS]: new Set([]),
    [Methods.PATCH]: new Set([Requirements.Checkin, Requirements.Body]),
    [Methods.POST]: new Set([Requirements.Checkin, Requirements.Body]),
    [Methods.PUT]: new Set([Requirements.Checkin, Requirements.Body]),
  },

  [Domains.Registration]: {
    [Methods.DELETE]: new Set([Requirements.Checkin]),
    [Methods.GET]: new Set([Requirements.Checkin]),
    [Methods.OPTIONS]: new Set([]),
    [Methods.PATCH]: new Set([Requirements.Checkin, Requirements.Body]),
    [Methods.POST]: new Set([Requirements.Checkin, Requirements.Body]),
    [Methods.PUT]: new Set([Requirements.Checkin, Requirements.Body]),
  },

  [Domains.Mailing]: {
    [Methods.DELETE]: new Set([Requirements.Checkin]),
    [Methods.GET]: new Set([Requirements.Checkin]),
    [Methods.OPTIONS]: new Set([]),
    [Methods.PATCH]: new Set([Requirements.Checkin, Requirements.Body]),
    [Methods.POST]: new Set([Requirements.Checkin, Requirements.Body]),
    [Methods.PUT]: new Set([Requirements.Checkin, Requirements.Body]),
  },
}
