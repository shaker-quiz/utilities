import 'urlpattern-polyfill'

import { Features } from './features.js'

export let FeaturePatterns = {
  /**
   * Users
   */
  [Features.Checkin]: new URLPattern({
    pathname: '/checkin',
  }),

  [Features.User]: new URLPattern({
    pathname: '/user/:user?',
  }),

  [Features.Users]: new URLPattern({
    pathname: '/users',
  }),

  /**
   * Games
   */
  [Features.Theme]: new URLPattern({
    pathname: '/theme/:theme?',
  }),

  [Features.Themes]: new URLPattern({
    pathname: '/themes',
  }),

  [Features.Game]: new URLPattern({
    pathname: '/game/:game?',
  }),

  [Features.Games]: new URLPattern({
    pathname: '/games',
  }),

  [Features.Registration]: new URLPattern({
    pathname: '/registration/:registration?',
  }),

  [Features.Registrations]: new URLPattern({
    pathname: '/registrations',
  }),

  /**
   * Locations
   */
  [Features.City]: new URLPattern({
    pathname: '/city/:city?',
  }),

  [Features.Cities]: new URLPattern({
    pathname: '/cities',
  }),

  [Features.Location]: new URLPattern({
    pathname: '/location/:location?',
  }),

  [Features.Locations]: new URLPattern({
    pathname: '/locations',
  }),
}
