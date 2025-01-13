/**
 * General
 */

type Nullable<Type> = Type | null

/**
 * Mixins
 */

interface RequestInit {
  /** A string to declaratively set the Authorization header. */
  cookie?: string
}