/**
 * General
 */

type Nullable<Type> = Type | null

type Optional<Type> = Type | null | undefined

/**
 * Mixins
 */

interface RequestInit {
  /** A string to declaratively set the Authorization header. */
  cookie?: string
}

/**
 * React
 */

type UseState<Type> = [
  Type,
  import('react').Dispatch<import('react').SetStateAction<Type>>,
]
