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

export var DomainIcons = {
  [Domains.City]: Icons['building-office'],
  [Domains.Game]: Icons['newspaper'],
  [Domains.Registration]: Icons['user-group'],
  [Domains.Theme]: Icons['document-text'],
  [Domains.User]: Icons['users'],
  [Domains.Venue]: Icons['map-pin'],
}

export var DomainKindPathnames = /** @type {const} */ ({
  [Domains.City]: {
    [Kinds.Unit]: '/cities/:city?',
    [Kinds.Set]: '/cities',
  },

  [Domains.Game]: {
    [Kinds.Unit]: '/games/:game?',
    [Kinds.Set]: '/games',
  },

  [Domains.Registration]: {
    [Kinds.Unit]: '/registrations/:registration?',
    [Kinds.Set]: '/registrations',
  },

  [Domains.Theme]: {
    [Kinds.Unit]: '/themes/:theme?',
    [Kinds.Set]: '/theme',
  },

  [Domains.User]: {
    [Kinds.Unit]: '/users/:user?',
    [Kinds.Set]: '/users',
  },

  [Domains.Venue]: {
    [Kinds.Unit]: '/venues/:venue?',
    [Kinds.Set]: '/venues',
  },
})

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
