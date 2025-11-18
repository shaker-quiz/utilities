import { Pattern } from './pattern.js'
import { Route } from './route.js'

export const StoreKey = Object.freeze({
  [Route['checkin']]: new RegExp(`GET/checkin`),

  [Route['user']]: new RegExp(`GET/user/${Pattern.UUID.source}`),

  [Route['user/city']]: new RegExp(`GET/user/${Pattern.UUID.source}/city/${Pattern.UUID.source}`),

  [Route['role']]: new RegExp(`GET/role/${Pattern.UUID.source}`),

  [Route['country']]: /GET\/country\/[A-Z]{2}/,

  [Route['currency']]: /GET\/currency\/.+/,

  [Route['timezone']]: /GET\/timezone\/[A-Za-z_]+\/[A-Za-z_]+/,

  [Route['city']]: new RegExp(`GET/city/${Pattern.UUID.source}`),

  [Route['city/venue']]: new RegExp(`GET/city/${Pattern.UUID.source}/venue/${Pattern.UUID.source}`),

  [Route['venue']]: new RegExp(`GET/venue/${Pattern.UUID.source}`),

  [Route['theme']]: new RegExp(`GET/theme/${Pattern.UUID.source}`),

  [Route['game']]: new RegExp(`GET/game/${Pattern.UUID.source}`),

  [Route['game/registration']]: new RegExp(`GET/game/${Pattern.UUID.source}/registration/${Pattern.UUID.source}`),

  [Route['registration']]: new RegExp(`GET/registration/${Pattern.UUID.source}`),
})
