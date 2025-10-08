/**
 * mixins
 */

interface RequestInit {
  /**
   * @description A method string defined by RFC7231 @see {@link https://datatracker.ietf.org/doc/html/rfc7231#section-4.3}
   */
  method?: Method
}

/**
 * react
 */

type UseState<T> = [
  T,
  import('react').Dispatch<import('react').SetStateAction<T>>,
]

/**
 * core
 */

type Feature = keyof typeof import('./enumerations/core/features.js').Feature

type Method = keyof typeof import('./enumerations/core/methods.js').Method

type Network = keyof typeof import('./enumerations/core/networks.js').Network

type Runtime = keyof typeof import('./enumerations/core/runtimes.js').Runtime

/**
 * entities
 */

type CityAffilation = keyof typeof import('./enumerations/entities/city-affilation.js').CityAffilation

type GameStatus = keyof typeof import('./enumerations/entities/game-status.js').GameStatus

type RegistrationAttribute =
  keyof typeof import('./enumerations/entities/registration-attribute.js').RegistrationAttribute

type RegistrationChannel = keyof typeof import('./enumerations/entities/registration-channel.js').RegistrationChannel

type RegistrationLineup = keyof typeof import('./enumerations/entities/registration-lineup.js').RegistrationLineup

type RegistrationMailing = keyof typeof import('./enumerations/entities/registration-mailing.js').RegistrationMailing

type RegistrationStatus = keyof typeof import('./enumerations/entities/registration-status.js').RegistrationStatus

type Role = keyof typeof import('./enumerations/entities/role.js').Role

type VenueStatus = keyof typeof import('./enumerations/entities/venue-status.js').VenueStatus

/**
 * misc
 */

type Icon = typeof import('./enumerations/misc/icons.js').Icons[number]

type Phase = keyof typeof import('./enumerations/misc/phases.js').Phase

type Route = keyof typeof import('./enumerations/misc/routes.js').Route
