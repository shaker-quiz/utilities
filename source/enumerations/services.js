import { BackendFeatures, BackendNetworkOrigins, Backends } from './backends.js'
import {
  FrontendFeatures,
  FrontendNetworkOrigins,
  Frontends,
} from './frontends.js'

export var Services = {
  ...Backends,
  ...Frontends,
}

export var ServiceFeatures = {
  ...BackendFeatures,
  ...FrontendFeatures,
}

export var ServiceNetworkOrigins = {
  ...BackendNetworkOrigins,
  ...FrontendNetworkOrigins,
}
