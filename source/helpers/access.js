import { Blend } from '../entities/blend.js'
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
import { RouteCardinality } from '../entities/route-cardinality.js'
import { RouteParameter } from '../entities/route-parameter.js'
import { RoutePathname } from '../entities/route-pathname.js'
import { RouteService, ServiceRoutes } from '../entities/route-service.js'
import { Route } from '../entities/route.js'
import { Runtime } from '../entities/runtime.js'
import { ServiceRuntime } from '../entities/service-runtime.js'
import { Service } from '../entities/service.js'
import { ThemeStatus } from '../entities/theme-status.js'
import { VenueAudience } from '../entities/venue-audience.js'
import { VenueStatus } from '../entities/venue-status.js'

const Node = new Map([
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

const Prop = new Map([
  [Blend, 'blend'],
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
  [RouteCardinality, 'cardinality'],
  [RouteParameter, 'parameter'],
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

const Tag = new Map([
  [Blend, 'Blend'],
  [Cardinality, 'Cardinality'],
  [Category, 'Category'],
  [CityAffilation, 'CityAffilation'],
  [CityChatappVersion, 'CityChatappVersion'],
  [Constants, 'Constants'],
  [Display, 'Display'],
  [GameStatus, 'GameStatus'],
  [Gender, 'Gender'],
  [Icon, 'Icon'],
  [Method, 'Method'],
  [Mode, 'Mode'],
  [Network, 'Network'],
  [Numerosity, 'Numerosity'],
  [Pattern, 'Pattern'],
  [Phase, 'Phase'],
  [Quantifier, 'Quantifier'],
  [RegistrationChannel, 'RegistrationChannel'],
  [RegistrationLineup, 'RegistrationLineup'],
  [RegistrationMailing, 'RegistrationMailing'],
  [RegistrationStatus, 'RegistrationStatus'],
  [Role, 'Role'],
  [RouteCardinality, 'RouteCardinality'],
  [RouteParameter, 'RouteParameter'],
  [RoutePathname, 'RoutePathname'],
  [RouteService, 'RouteService'],
  [Route, 'Route'],
  [Runtime, 'Runtime'],
  [ServiceRuntime, 'ServiceRuntime'],
  [Service, 'Service'],
  [ThemeStatus, 'ThemeStatus'],
  [VenueAudience, 'VenueAudience'],
  [VenueStatus, 'VenueStatus'],
])

export const access = (Relation, value) => {
  const node = Node.get(Relation)

  const prop = Prop.get(Relation)

  const read = value?.[node]?.[prop] ?? value?.[prop] ?? value

  if (Object.hasOwn(Relation, read))
    return Relation[read]
  else
    throw TypeError(`Could not require key '${value}' from '${Tag.get(Relation)}'.`)
}

export const tryAccess = (Relation, value) => {
  try {
    return access(Relation, value)
  } catch (error) {
    return 'Unknown'
  }
}
