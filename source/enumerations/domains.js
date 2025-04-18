import { Icons } from './icons.js'
import { Kinds } from './kinds.js'
import { Methods } from './methods.js'
import { Requirements } from './requirements.js'

export var Domains = /** @type {const} */ ({
  City: 'City',
  Game: 'Game',
  Registration: 'Registration',
  Theme: 'Theme',
  User: 'User',
  Venue: 'Venue',
})

/**
 * @type {Record<Domain, Icon>}
 */
export var DomainIcons = {
  [Domains.City]: Icons['building-office'],
  [Domains.Game]: Icons['newspaper'],
  [Domains.Registration]: Icons['user-group'],
  [Domains.Theme]: Icons['document-text'],
  [Domains.User]: Icons['users'],
  [Domains.Venue]: Icons['map-pin'],
}

/**
 * @type {Record<Domain, Record<Kind, string>>}
 */
export var DomainKindPathnames = {
  [Domains.City]: {
    [Kinds.Unit]: '/city/:city?',
    [Kinds.Set]: '/cities',
  },

  [Domains.Game]: {
    [Kinds.Unit]: '/game/:game?',
    [Kinds.Set]: '/games',
  },

  [Domains.Registration]: {
    [Kinds.Unit]: '/registration/:registration?',
    [Kinds.Set]: '/registrations',
  },

  [Domains.Theme]: {
    [Kinds.Unit]: '/theme/:theme?',
    [Kinds.Set]: '/themes',
  },

  [Domains.User]: {
    [Kinds.Unit]: '/user/:user?',
    [Kinds.Set]: '/users',
  },

  [Domains.Venue]: {
    [Kinds.Unit]: '/venue/:venue?',
    [Kinds.Set]: '/venues',
  },
}

/**
 * @type {Record<Domain, Record<Method, Set<Requirement>>>}
 */
export var DomainMethodRequirements = {
  [Domains.City]: {
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

  [Domains.Theme]: {
    [Methods.DELETE]: new Set([Requirements.Checkin]),
    [Methods.GET]: new Set([Requirements.Checkin]),
    [Methods.OPTIONS]: new Set([]),
    [Methods.PATCH]: new Set([Requirements.Checkin, Requirements.Body]),
    [Methods.POST]: new Set([Requirements.Checkin, Requirements.Body]),
    [Methods.PUT]: new Set([Requirements.Checkin, Requirements.Body]),
  },

  [Domains.User]: {
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
}
