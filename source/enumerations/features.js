import {
  DomainKindPathnames,
  Domains,
  DomainServiceDefaults,
  DomainServiceNetworkOrigins,
} from './domains.js'
import {
  ProcedureKindPathnames,
  Procedures,
  ProcedureServiceDefaults,
  ProcedureServiceNetworkOrigins,
} from './procedures.js'

export var Features = {
  ...Domains,
  ...Procedures,
}

export var FeatureKindPathnames = {
  ...DomainKindPathnames,
  ...ProcedureKindPathnames,
}

export var FeatureServiceDefaults = {
  ...DomainServiceDefaults,
  ...ProcedureServiceDefaults,
}

export var FeatureServiceNetworkOrigins = {
  ...DomainServiceNetworkOrigins,
  ...ProcedureServiceNetworkOrigins,
}
