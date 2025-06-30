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

type UseState<Type> = [
  Type,
  import('react').Dispatch<import('react').SetStateAction<Type>>,
]

/**
 * Core
 */

type Method = typeof import('./enumerations/core/methods.js').Methods[number]

type Domain = typeof import('./enumerations/core/domains.js').Domains[number]

type Procedure =
  typeof import('./enumerations/core/procedures.js').Procedures[number]

type Feature = Domain | Procedure

type Kind = typeof import('./enumerations/core/kinds.js').Kinds[number]

type Scope = `${Method}/${Feature}/${Kind}`

type Requirement =
  typeof import('./enumerations/misc/requirements.js').Requirements[number]

type Role = keyof typeof import('./enumerations/entities/roles.js').Roles

type GameStatus =
  keyof typeof import('./enumerations/entities/game-statuses.js').GameStatuses

type RegistrationStatus =
  keyof typeof import('./enumerations/entities/registration-statuses.js').RegistrationStatuses

type Lineup = keyof typeof import('./enumerations/entities/lineups.js').Lineups

type Affilation =
  keyof typeof import('./enumerations/entities/affilations.js').Affilations

/**
 * Misc
 */

type Icon = typeof import('./enumerations/misc/icons.js').Icons[number]

type Phase = typeof import('./enumerations/misc/phases.js').Phases[number]

/**
 * Products
 */

type ScopePhase = Record<Scope, Phase>

type ScopeState = Record<Scope, any>

type ScopeController = Record<Scope, AbortController | null>

/**
 * Schemas
 */

type CityColumn = keyof typeof import('./schemas/city.js').CityColumns

type GameColumn = keyof typeof import('./schemas/game.js').GameColumns

type RegistrationColumn =
  keyof typeof import('./schemas/registration.js').RegistrationColumns

type ThemeColumn = keyof typeof import('./schemas/theme.js').ThemeColumns

type UserColumn = keyof typeof import('./schemas/user.js').UserColumns

type VenueColumn = keyof typeof import('./schemas/venue.js').VenueColumns
