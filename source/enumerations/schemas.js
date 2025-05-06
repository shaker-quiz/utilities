import { Domains } from '../enumerations/domains.js'

import { CitySchema } from '../schemas/city.js'
import { GameSchema } from '../schemas/game.js'
import { RegistrationSchema } from '../schemas/registration.js'
import { RoleSchema } from '../schemas/role.js'
import { ThemeSchema } from '../schemas/theme.js'
import { UserSchema } from '../schemas/user.js'
import { VenueSchema } from '../schemas/venue.js'

export var Schemas = /** @type {const} */ ({
  [Domains.User]: UserSchema,
  [Domains.Role]: RoleSchema,
  [Domains.City]: CitySchema,
  [Domains.Venue]: VenueSchema,
  [Domains.Theme]: ThemeSchema,
  [Domains.Game]: GameSchema,
  [Domains.Registration]: RegistrationSchema,
})
