import { Backends } from './backends.js'
import {
  DomainIcons,
  DomainKindPathnames,
  DomainMethodRequirements,
  Domains,
} from './domains.js'
import { Networks } from './networks.js'
import {
  PageIcons,
  PageKindPathnames,
  PageMethodRequirements,
  Pages,
} from './pages.js'
import {
  ProcedureIcons,
  ProcedureKindPathnames,
  ProcedureMethodRequirements,
  Procedures,
} from './procedures.js'
import { Services } from './services.js'

export var Features = {
  ...Domains,
  ...Pages,
  ...Procedures,
}

/**
 * @type {Record<Feature, Icon>}
 */
export var FeatureIcons = {
  ...DomainIcons,
  ...PageIcons,
  ...ProcedureIcons,
}

/**
 * @type {Record<Feature, Record<Kind, string>>}
 */
export var FeatureKindPathnames = {
  ...DomainKindPathnames,
  ...PageKindPathnames,
  ...ProcedureKindPathnames,
}

/**
 * @type {Record<Domain, Service>}
 */
export var DomainServiceDefaults = {
  [Domains.User]: Backends.Users,
  [Domains.Role]: Backends.Users,
  [Domains.City]: Backends.Locations,
  [Domains.Venue]: Backends.Locations,
  [Domains.Game]: Backends.Games,
  [Domains.Registration]: Backends.Games,
  [Domains.Theme]: Backends.Games,
}

/**
 * @type {Record<Page, Service>}
 */
export var PageServiceDefaults = {
  [Pages['404']]: '',
  [Pages.Exception]: '',
  [Pages.Home]: '',
  [Pages.Profile]: '',
}

/**
 * @type {Record<Procedure, Service>}
 */
export var ProcedureServiceDefaults = {
  [Procedures.Checkin]: Backends.Users,
  [Procedures.Mailing]: Backends.Games,
}

/**
 * @type {Record<Feature, Service>}
 */
export var FeatureServiceDefaults = {
  ...DomainServiceDefaults,
  ...PageServiceDefaults,
  ...ProcedureServiceDefaults,
}

/**
 * @type {Record<Feature, Record<Method, Set<Requirement>>>}
 */
export var FeatureMethodRequirements = {
  ...DomainMethodRequirements,
  ...PageMethodRequirements,
  ...ProcedureMethodRequirements,
}

/**
 * @type {Record<Feature, Record<Service, Record<Network, string>>>}
 */
export var FeatureServiceNetworkOrigins = {}

for (var feature in Features) {
  FeatureServiceNetworkOrigins[feature] = {}
  for (var service in Services) {
    FeatureServiceNetworkOrigins[feature][service] = {}
    for (var network in Networks) {
      FeatureServiceNetworkOrigins[feature][service][network] = ''
    }
  }
}
