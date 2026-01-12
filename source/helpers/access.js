import { Blend } from '../entities/blend.js'
import { CardinalityRoutes } from '../entities/cardinality-routes.js'
import { Cardinality } from '../entities/cardinality.js'
import { Category } from '../entities/category.js'
import { CityAffilation } from '../entities/city-affilation.js'
import { CityChatappVersion } from '../entities/city-chatapp-version.js'
import { Constants } from '../entities/constants.js'
import { Display } from '../entities/display.js'
import { GameStatus } from '../entities/game-status.js'
import { Gender } from '../entities/gender.js'
import { Icon } from '../entities/icon.js'
import { Method } from '../entities/method.js'
import { Mode } from '../entities/mode.js'
import { Network } from '../entities/network.js'
import { Numerosity } from '../entities/numerosity.js'
import { Pattern } from '../entities/pattern.js'
import { Phase } from '../entities/phase.js'
import { Quantifier } from '../entities/quantifier.js'
import { RegistrationChannel } from '../entities/registration-channel.js'
import { RegistrationLineup } from '../entities/registration-lineup.js'
import { RegistrationMailing } from '../entities/registration-mailing.js'
import { RegistrationStatus } from '../entities/registration-status.js'
import { Role } from '../entities/role.js'
import { RouteCardinalityRoute } from '../entities/route-cardinality-route.js'
import { RouteCardinality } from '../entities/route-cardinality.js'
import { RoutePathnameParams } from '../entities/route-pathname-params.js'
import { RoutePathname } from '../entities/route-pathname.js'
import { RouteService } from '../entities/route-service.js'
import { Route } from '../entities/route.js'
import { Runtime } from '../entities/runtime.js'
import { ServiceRoutes } from '../entities/service-routes.js'
import { ServiceRuntime } from '../entities/service-runtime.js'
import { Service } from '../entities/service.js'
import { ThemeStatus } from '../entities/theme-status.js'
import { VenueAudience } from '../entities/venue-audience.js'
import { VenueStatus } from '../entities/venue-status.js'

const RelationNode = new Map([
  [CityAffilation, 'city'],
  [CityChatappVersion, 'city'],
  [GameStatus, 'game'],
  [RegistrationChannel, 'registration'],
  [RegistrationLineup, 'registration'],
  [RegistrationMailing, 'registration'],
  [RegistrationStatus, 'registration'],
  [Role, 'role'],
  [ThemeStatus, 'theme'],
  [VenueAudience, 'venue'],
  [VenueStatus, 'venue'],
])

const RelationProp = new Map([
  [Blend, 'blend'],
  [CardinalityRoutes, 'routes'],
  [Cardinality, 'cardinality'],
  [Category, 'category'],
  [CityAffilation, 'affilation'],
  [CityChatappVersion, 'version'],
  [Constants, 'constants'],
  [Display, 'display'],
  [GameStatus, 'status'],
  [Gender, 'gender'],
  [Icon, 'icon'],
  [Method, 'method'],
  [Mode, 'mode'],
  [Network, 'network'],
  [Numerosity, 'numerosity'],
  [Pattern, 'pattern'],
  [Phase, 'phase'],
  [Quantifier, 'quantifier'],
  [RegistrationChannel, 'channel'],
  [RegistrationLineup, 'lineup'],
  [RegistrationMailing, 'mailing'],
  [RegistrationStatus, 'status'],
  [Role, 'name'],
  [RouteCardinalityRoute, 'cardinality_route'],
  [RouteCardinality, 'cardinality'],
  [RoutePathnameParams, 'pathname_params'],
  [RoutePathname, 'pathname'],
  [RouteService, 'service'],
  [Route, 'route'],
  [Runtime, 'runtime'],
  [ServiceRoutes, 'routes'],
  [ServiceRuntime, 'runtime'],
  [Service, 'service'],
  [ThemeStatus, 'status'],
  [VenueAudience, 'audience'],
  [VenueStatus, 'status'],
])

export const access = (Relation, value) => {
  if (!RelationProp.has(Relation))
    throw TypeError(`Relation ${JSON.stringify(Relation)} is unknown.`)

  const node = RelationNode.get(Relation)

  const prop = RelationProp.get(Relation)

  const read = value?.[node]?.[prop] ?? value?.[prop] ?? value

  if (Object.hasOwn(Relation, read))
    return Relation[read]
  else
    throw TypeError(`Could not require key '${value}' from Relation '${JSON.stringify(Relation)}'.`)
}

export const tryAccess = (value, key) => {
  try {
    return access(value, key)
  } catch (error) {
    return 'Unknown'
  }
}
