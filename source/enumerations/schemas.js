import { Domains } from '../enumerations/domains.js'

import { CitySchema } from '../schemas/city.js'
import { GameSchema } from '../schemas/game.js'
import { RegistrationSchema } from '../schemas/registration.js'
import { ThemeSchema } from '../schemas/theme.js'
import { UserSchema } from '../schemas/user.js'
import { VenueSchema } from '../schemas/venue.js'

export var Schemas = /** @type {const} */ ({
  [Domains.City]: CitySchema,
  [Domains.Game]: GameSchema,
  [Domains.Registration]: RegistrationSchema,
  [Domains.Theme]: ThemeSchema,
  [Domains.User]: UserSchema,
  [Domains.Venue]: VenueSchema,
})
