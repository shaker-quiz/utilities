/**
 * Mixins
 */

interface RequestInit {
  /**
   * @description A method string defined by RFC7231 @see {@link https://datatracker.ietf.org/doc/html/rfc7231#section-4.3}
   */
  method?: Method
}

/**
 * React
 */

type UseState<T> = [
  T,
  import('react').Dispatch<import('react').SetStateAction<T>>,
]

/**
 * Core
 */

type Method = (typeof import('./enumerations/core/methods.js').Methods)[number]

type Domain = (typeof import('./enumerations/core/features.js').Domains)[number]

type Procedure =
  (typeof import('./enumerations/core/features.js').Procedures)[number]

type Feature = Domain | Procedure

type Kind = (typeof import('./enumerations/core/kinds.js').Kinds)[number]

type Scope = `${Method}/${Feature}/${Kind}`

type Runtime =
  (typeof import('./enumerations/core/runtimes.js').Runtimes)[number]

type Network =
  (typeof import('./enumerations/core/networks.js').Networks)[number]

type Role = (typeof import('./enumerations/entities/roles.js').Roles)[number]

type GameStatus =
  (typeof import('./enumerations/entities/game-statuses.js').GameStatuses)[
    number
  ]

type RegistrationStatus =
  (typeof import('./enumerations/entities/registration-statuses.js').RegistrationStatuses)[
    number
  ]

type Lineup =
  (typeof import('./enumerations/entities/lineups.js').Lineups)[number]

type Affilation =
  (typeof import('./enumerations/entities/affilations.js').Affilations)[number]

/**
 * Misc
 */

type Icon = (typeof import('./enumerations/misc/icons.js').Icons)[number]

type Phase = (typeof import('./enumerations/misc/phases.js').Phases)[number]

/**
 * Products
 */

type ScopePhase = Record<Scope, Phase>

type ScopeState = Record<Scope, any>

type ScopeController = Record<Scope, AbortController | null>
