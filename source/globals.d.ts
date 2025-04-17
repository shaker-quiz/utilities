/**
 * Mixins
 */

interface RequestInit {
  /**
   * @description A method string defined by RFC7231 @see {@link https://datatracker.ietf.org/doc/html/rfc7231#section-4.3}
   */
  method?: Method
  /**
   * @description Target network to where send the request
   */
  network?: Network
  /**
   * @description A string to declaratively set the Authorization header.
   */
  cookie?: string
}

/**
 * React
 */

type UseState<Type> = [
  Type,
  import('react').Dispatch<import('react').SetStateAction<Type>>,
]

/**
 * General
 */

type Method = keyof typeof import('./enumerations/methods.js').Methods

type Kind = keyof typeof import('./enumerations/kinds.js').Kinds

type Network = keyof typeof import('./enumerations/networks.js').Networks

type Phase = keyof typeof import('./enumerations/phases.js').Phases

type Requirement =
  keyof typeof import('./enumerations/requirements.d.ts').Requirements

/**
 * Domain
 */

type Domain = keyof typeof import('./enumerations/domains.js').Domains
type Page = keyof typeof import('./enumerations/pages.js').Pages
type Procedure = keyof typeof import('./enumerations/procedures.js').Procedures
type Feature = Domain | Page | Procedure

type Backend = keyof typeof import('./enumerations/backends.js').Backends
type Frontend = keyof typeof import('./enumerations/frontends.js').Frontends
type Service = Backend | Frontend

type Role = keyof typeof import('./enumerations/roles.js').Roles

type GameStatus =
  keyof typeof import('./enumerations/game-statuses.js').GameStatuses

type RegistrationStatus =
  keyof typeof import('./enumerations/registration-statuses.js').RegistrationStatuses

type Lineup = keyof typeof import('./enumerations/lineups.js').Lineups

/**
 * Misc
 */

type Icon = keyof typeof import('./enumerations/icons.js').Icons
