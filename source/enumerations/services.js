import { BackendFeatures, Backends } from './backends.js'
import { FrontendFeatures, Frontends } from './frontends.js'
import { Networks } from './networks.js'

export var Services = {
  ...Backends,
  ...Frontends,
}

export var ServiceFeatures = {
  ...BackendFeatures,
  ...FrontendFeatures,
}

/** @type {Record<Service, Record<Network, string>>} */
export var ServiceNetworkOrigins = {}

for (var service in Services) {
  ServiceNetworkOrigins[service] = {}
  for (var network in Networks) {
    ServiceNetworkOrigins[service][network] = ''
  }
}
