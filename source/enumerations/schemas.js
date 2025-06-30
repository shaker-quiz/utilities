import { CitySchema } from '../schemas/city.js'
import { GameSchema } from '../schemas/game.js'
import { RegistrationSchema } from '../schemas/registration.js'
import { RoleSchema } from '../schemas/role.js'
import { ThemeSchema } from '../schemas/theme.js'
import { UserSchema } from '../schemas/user.js'
import { VenueSchema } from '../schemas/venue.js'

export var DomainSchema = /** @type {const} */ ({
  'User': UserSchema,
  'Role': RoleSchema,
  'City': CitySchema,
  'Venue': VenueSchema,
  'Theme': ThemeSchema,
  'Game': GameSchema,
  'Registration': RegistrationSchema,
})
