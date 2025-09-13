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

type Method = (typeof import('./enumerations/core/methods.js').Methods)[number]

type Feature = keyof typeof import('./enumerations/core/features.js').Feature

type Runtime = (typeof import('./enumerations/core/runtimes.js').Runtimes)[number]

type Network = (typeof import('./enumerations/core/networks.js').Networks)[number]

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

type Role = (typeof import('./enumerations/entities/role.js').Roles)[number]

type VenueStatus = keyof typeof import('./enumerations/entities/venue-status.js').VenueStatus

/**
 * misc
 */

type Icon = typeof import('./enumerations/misc/icons.js').Icons[number]

type Phase = keyof typeof import('./enumerations/misc/phases.js').Phase

/**
 * products
 */

/**
 * @deprecated
 */
type ScopePhase = Record<Scope, Phase>

/**
 * @deprecated
 */
type ScopeState = Record<Scope, any>

/**
 * @deprecated
 */
type ScopeController = Record<Scope, AbortController | null>

/**
 * Server
 */

type Routes = keyof typeof import('./enumerations/core/features.js').RoutePathname

type Pathnames = typeof import('./enumerations/core/features.js').RoutePathname[Routes]
