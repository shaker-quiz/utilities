import { URLOptions } from '@yurkimus/url'

import type { Roles, RolesUnion } from 'source/enumerations/roles'
import { Features } from '../enumerations/features'
import { Methods } from '../enumerations/methods'
import { Networks } from '../enumerations/networks'

type RequestResults = {
  [Features.Checkin]: {
    [Methods.DELETE]: {
      [Roles.Admin]: unknown
      [Roles.Default]: unknown
      [Roles.Organizer]: unknown
    }

    [Methods.GET]: {
      [Roles.Admin]: CheckinAdminResult
      [Roles.Default]: CheckinDefaultResult
      [Roles.Organizer]: CheckinOrganizerResult
    }

    [Methods.OPTIONS]: {
      [Roles.Admin]: unknown
      [Roles.Default]: unknown
      [Roles.Organizer]: unknown
    }

    [Methods.PATCH]: {
      [Roles.Admin]: unknown
      [Roles.Default]: unknown
      [Roles.Organizer]: unknown
    }

    [Methods.POST]: {
      [Roles.Admin]: unknown
      [Roles.Default]: unknown
      [Roles.Organizer]: unknown
    }
  }

  [Features.User]: {
    [Methods.DELETE]: {
      [Roles.Admin]: unknown
      [Roles.Default]: unknown
      [Roles.Organizer]: unknown
    }

    [Methods.GET]: {
      [Roles.Admin]: UserAdminResult
      [Roles.Default]: UserDefaultResult
      [Roles.Organizer]: UserOrganizerResult
    }

    [Methods.OPTIONS]: {
      [Roles.Admin]: unknown
      [Roles.Default]: unknown
      [Roles.Organizer]: unknown
    }

    [Methods.PATCH]: {
      [Roles.Admin]: unknown
      [Roles.Default]: unknown
      [Roles.Organizer]: unknown
    }

    [Methods.POST]: {
      [Roles.Admin]: unknown
      [Roles.Default]: unknown
      [Roles.Organizer]: unknown
    }
  }

  [Features.Users]: {
    [Methods.DELETE]: {
      [Roles.Admin]: unknown
      [Roles.Default]: unknown
      [Roles.Organizer]: unknown
    }

    [Methods.GET]: {
      [Roles.Admin]: UserAdminResult
      [Roles.Default]: UserDefaultResult
      [Roles.Organizer]: UserOrganizerResult
    }

    [Methods.OPTIONS]: {
      [Roles.Admin]: unknown
      [Roles.Default]: unknown
      [Roles.Organizer]: unknown
    }

    [Methods.PATCH]: {
      [Roles.Admin]: unknown
      [Roles.Default]: unknown
      [Roles.Organizer]: unknown
    }

    [Methods.POST]: {
      [Roles.Admin]: unknown
      [Roles.Default]: unknown
      [Roles.Organizer]: unknown
    }
  }

  [Features.Theme]: {
    [Methods.DELETE]: {
      [Roles.Admin]: unknown
      [Roles.Default]: unknown
      [Roles.Organizer]: unknown
    }

    [Methods.GET]: {
      [Roles.Admin]: ThemeAdminResult
      [Roles.Default]: unknown
      [Roles.Organizer]: ThemeOrganizerResult
    }

    [Methods.OPTIONS]: {
      [Roles.Admin]: unknown
      [Roles.Default]: unknown
      [Roles.Organizer]: unknown
    }

    [Methods.PATCH]: {
      [Roles.Admin]: unknown
      [Roles.Default]: unknown
      [Roles.Organizer]: unknown
    }

    [Methods.POST]: {
      [Roles.Admin]: unknown
      [Roles.Default]: unknown
      [Roles.Organizer]: unknown
    }
  }

  [Features.Themes]: {
    [Methods.DELETE]: {
      [Roles.Admin]: unknown
      [Roles.Default]: unknown
      [Roles.Organizer]: unknown
    }

    [Methods.GET]: {
      [Roles.Admin]: ThemeAdminResult[]
      [Roles.Default]: unknown
      [Roles.Organizer]: ThemeOrganizerResult[]
    }

    [Methods.OPTIONS]: {
      [Roles.Admin]: unknown
      [Roles.Default]: unknown
      [Roles.Organizer]: unknown
    }

    [Methods.PATCH]: {
      [Roles.Admin]: unknown
      [Roles.Default]: unknown
      [Roles.Organizer]: unknown
    }

    [Methods.POST]: {
      [Roles.Admin]: unknown
      [Roles.Default]: unknown
      [Roles.Organizer]: unknown
    }
  }

  [Features.Game]: {
    [Methods.DELETE]: {
      [Roles.Admin]: unknown
      [Roles.Default]: unknown
      [Roles.Organizer]: unknown
    }

    [Methods.GET]: {
      [Roles.Admin]: GameAdminResult
      [Roles.Default]: GameDefaultResult
      [Roles.Organizer]: GameOrginizerResult
    }

    [Methods.OPTIONS]: {
      [Roles.Admin]: unknown
      [Roles.Default]: unknown
      [Roles.Organizer]: unknown
    }

    [Methods.PATCH]: {
      [Roles.Admin]: unknown
      [Roles.Default]: unknown
      [Roles.Organizer]: unknown
    }

    [Methods.POST]: {
      [Roles.Admin]: unknown
      [Roles.Default]: unknown
      [Roles.Organizer]: unknown
    }
  }

  [Features.Games]: {
    [Methods.DELETE]: {
      [Roles.Admin]: unknown
      [Roles.Default]: unknown
      [Roles.Organizer]: unknown
    }

    [Methods.GET]: {
      [Roles.Admin]: GameAdminResult[]
      [Roles.Default]: GameDefaultResult[]
      [Roles.Organizer]: GameOrginizerResult[]
    }

    [Methods.OPTIONS]: {
      [Roles.Admin]: unknown
      [Roles.Default]: unknown
      [Roles.Organizer]: unknown
    }

    [Methods.PATCH]: {
      [Roles.Admin]: unknown
      [Roles.Default]: unknown
      [Roles.Organizer]: unknown
    }

    [Methods.POST]: {
      [Roles.Admin]: unknown
      [Roles.Default]: unknown
      [Roles.Organizer]: unknown
    }
  }

  [Features.Registration]: {
    [Methods.DELETE]: {
      [Roles.Admin]: unknown
      [Roles.Default]: unknown
      [Roles.Organizer]: unknown
    }

    [Methods.GET]: {
      [Roles.Admin]: RegistrationAdminResult
      [Roles.Default]: RegistrationDefaultResult
      [Roles.Organizer]: RegistrationOrganizerResult
    }

    [Methods.OPTIONS]: {
      [Roles.Admin]: unknown
      [Roles.Default]: unknown
      [Roles.Organizer]: unknown
    }

    [Methods.PATCH]: {
      [Roles.Admin]: unknown
      [Roles.Default]: unknown
      [Roles.Organizer]: unknown
    }

    [Methods.POST]: {
      [Roles.Admin]: unknown
      [Roles.Default]: unknown
      [Roles.Organizer]: unknown
    }
  }

  [Features.Registrations]: {
    [Methods.DELETE]: {
      [Roles.Admin]: unknown
      [Roles.Default]: unknown
      [Roles.Organizer]: unknown
    }

    [Methods.GET]: {
      [Roles.Admin]: unknown
      [Roles.Default]: unknown
      [Roles.Organizer]: unknown
    }

    [Methods.OPTIONS]: {
      [Roles.Admin]: unknown
      [Roles.Default]: unknown
      [Roles.Organizer]: unknown
    }

    [Methods.PATCH]: {
      [Roles.Admin]: unknown
      [Roles.Default]: unknown
      [Roles.Organizer]: unknown
    }

    [Methods.POST]: {
      [Roles.Admin]: unknown
      [Roles.Default]: unknown
      [Roles.Organizer]: unknown
    }
  }

  [Features.City]: {
    [Methods.DELETE]: {
      [Roles.Admin]: unknown
      [Roles.Default]: unknown
      [Roles.Organizer]: unknown
    }

    [Methods.GET]: {
      [Roles.Admin]: CityAdminResult
      [Roles.Default]: CityDefaultResult
      [Roles.Organizer]: CityOrganizerResult
    }

    [Methods.OPTIONS]: {
      [Roles.Admin]: unknown
      [Roles.Default]: unknown
      [Roles.Organizer]: unknown
    }

    [Methods.PATCH]: {
      [Roles.Admin]: unknown
      [Roles.Default]: unknown
      [Roles.Organizer]: unknown
    }

    [Methods.POST]: {
      [Roles.Admin]: unknown
      [Roles.Default]: unknown
      [Roles.Organizer]: unknown
    }
  }

  [Features.Cities]: {
    [Methods.DELETE]: {
      [Roles.Admin]: unknown
      [Roles.Default]: unknown
      [Roles.Organizer]: unknown
    }

    [Methods.GET]: {
      [Roles.Admin]: CityAdminResult[]
      [Roles.Default]: CityDefaultResult[]
      [Roles.Organizer]: CityOrganizerResult[]
    }

    [Methods.OPTIONS]: {
      [Roles.Admin]: unknown
      [Roles.Default]: unknown
      [Roles.Organizer]: unknown
    }

    [Methods.PATCH]: {
      [Roles.Admin]: unknown
      [Roles.Default]: unknown
      [Roles.Organizer]: unknown
    }

    [Methods.POST]: {
      [Roles.Admin]: unknown
      [Roles.Default]: unknown
      [Roles.Organizer]: unknown
    }
  }

  [Features.Location]: {
    [Methods.DELETE]: {
      [Roles.Admin]: unknown
      [Roles.Default]: unknown
      [Roles.Organizer]: unknown
    }

    [Methods.GET]: {
      [Roles.Admin]: LocationAdminResult
      [Roles.Default]: LocationDefaultResult
      [Roles.Organizer]: LocationOrganizerResult
    }

    [Methods.OPTIONS]: {
      [Roles.Admin]: unknown
      [Roles.Default]: unknown
      [Roles.Organizer]: unknown
    }

    [Methods.PATCH]: {
      [Roles.Admin]: unknown
      [Roles.Default]: unknown
      [Roles.Organizer]: unknown
    }

    [Methods.POST]: {
      [Roles.Admin]: unknown
      [Roles.Default]: unknown
      [Roles.Organizer]: unknown
    }
  }

  [Features.Locations]: {
    [Methods.DELETE]: {
      [Roles.Admin]: unknown
      [Roles.Default]: unknown
      [Roles.Organizer]: unknown
    }

    [Methods.GET]: {
      [Roles.Admin]: LocationAdminResult
      [Roles.Default]: LocationDefaultResult
      [Roles.Organizer]: LocationOrganizerResult
    }

    [Methods.OPTIONS]: {
      [Roles.Admin]: unknown
      [Roles.Default]: unknown
      [Roles.Organizer]: unknown
    }

    [Methods.PATCH]: {
      [Roles.Admin]: unknown
      [Roles.Default]: unknown
      [Roles.Organizer]: unknown
    }

    [Methods.POST]: {
      [Roles.Admin]: unknown
      [Roles.Default]: unknown
      [Roles.Organizer]: unknown
    }
  }
}

export let Extensions: WeakMap<
  Function,
  Map<
    | 'onbefore'
    | 'onfulfilled'
    | 'onrejected',
    Set<Function>
  >
>

export let useRequest: <
  Feature extends keyof typeof Features,
  Method extends keyof typeof Methods,
  Network extends keyof typeof Networks,
>(
  feature: Feature,
  method: Method,
  network: Network,
) => <Role extends Roles[RolesUnion] = Roles['Default']>(
  options: URLOptions,
  init: RequestInit,
) => Promise<RequestResults[Feature][Method][Role]>
