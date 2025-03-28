/**
 * General
 */

type Nullable<Type> = Type | null

/**
 * Mixins
 */

interface RequestInit {
  /**
   * @description A method string defined by RFC7231 @see {@link https://datatracker.ietf.org/doc/html/rfc7231#section-4.3}
   */
  method?: RequestMethod
  /**
   * @description A string to declaratively set the Authorization header.
   */
  cookie?: string
}

/**
 * React
 */

type UseState<Type> = [
  Type,
  import('react').Dispatch<import('react').SetStateAction<Type>>,
]

/**
 * Domain
 */

type Feature = keyof typeof import('./enumerations/features.d.ts').Features

type Network = keyof typeof import('./enumerations/networks.d.ts').Networks

type Service = keyof typeof import('./enumerations/services.d.ts').Services

type Phase = keyof typeof import('./enumerations/phases.d.ts').Phases

type Role = keyof typeof import('./enumerations/roles.d.ts').Roles

type GameStatus =
  keyof typeof import('./enumerations/game-statuses.d.ts').GameStatuses

type Requirement =
  keyof typeof import('./enumerations/requirements.d.ts').Requirements

type RequestMethod =
  keyof typeof import('./enumerations/request-methods.d.ts').RequestMethods

type FetchResults = {
  'Admin': unknown

  'Games': {
    'Game': {
      'DELETE': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }

      'GET': {
        'admin': GameAdminResult
        'default': GameDefaultResult
        'organizer': GameOrginizerResult
      }

      'OPTIONS': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }

      'PATCH': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }

      'POST': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }
    }

    'Games': {
      'DELETE': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }

      'GET': {
        'admin': GameAdminResult[]
        'default': GameDefaultResult[]
        'organizer': GameOrginizerResult[]
      }

      'OPTIONS': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }

      'PATCH': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }

      'POST': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }
    }

    'Home': {
      'DELETE': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }

      'GET': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }

      'OPTIONS': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }

      'PATCH': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }

      'POST': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }
    }

    'Registration': {
      'DELETE': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }

      'GET': {
        'admin': RegistrationAdminResult
        'default': RegistrationDefaultResult
        'organizer': RegistrationOrganizerResult
      }

      'OPTIONS': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }

      'PATCH': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }

      'POST': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }
    }

    'Registrations': {
      'DELETE': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }

      'GET': {
        'admin': RegistrationAdminResult[]
        'default': RegistrationDefaultResult[]
        'organizer': RegistrationOrganizerResult[]
      }

      'OPTIONS': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }

      'PATCH': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }

      'POST': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }
    }

    'Theme': {
      'DELETE': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }

      'GET': {
        'admin': ThemeAdminResult
        'default': ThemeDefaultResult
        'organizer': ThemeOrganizerResult
      }

      'OPTIONS': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }

      'PATCH': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }

      'POST': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }
    }

    'Themes': {
      'DELETE': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }

      'GET': {
        'admin': ThemeAdminResult[]
        'default': ThemeDefaultResult[]
        'organizer': ThemeOrganizerResult[]
      }

      'OPTIONS': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }

      'PATCH': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }

      'POST': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }
    }
  }

  'Landing': unknown

  'Locations': {
    'Cities': {
      'DELETE': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }

      'GET': {
        'admin': CityAdminResult[]
        'default': CityDefaultResult[]
        'organizer': CityOrganizerResult[]
      }

      'OPTIONS': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }

      'PATCH': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }

      'POST': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }
    }

    'City': {
      'DELETE': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }

      'GET': {
        'admin': CityAdminResult
        'default': CityDefaultResult
        'organizer': CityOrganizerResult
      }

      'OPTIONS': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }

      'PATCH': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }

      'POST': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }
    }

    'Countries': {
      'DELETE': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }

      'GET': {
        'admin': CountryAdminResult[]
        'default': CountryDefaultResult[]
        'organizer': CountryOrganizerResult[]
      }

      'OPTIONS': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }

      'PATCH': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }

      'POST': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }
    }

    'Country': {
      'DELETE': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }

      'GET': {
        'admin': CountryAdminResult
        'default': CountryDefaultResult
        'organizer': CountryOrganizerResult
      }

      'OPTIONS': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }

      'PATCH': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }

      'POST': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }
    }

    'Home': {
      'DELETE': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }

      'GET': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }

      'OPTIONS': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }

      'PATCH': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }

      'POST': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }
    }

    'Region': {
      'DELETE': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }

      'GET': {
        'admin': RegionAdminResult
        'default': RegionDefaultResult
        'organizer': RegionOrganizerResult
      }

      'OPTIONS': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }

      'PATCH': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }

      'POST': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }
    }

    'Regions': {
      'DELETE': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }

      'GET': {
        'admin': RegionAdminResult[]
        'default': RegionDefaultResult[]
        'organizer': RegionOrganizerResult[]
      }

      'OPTIONS': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }

      'PATCH': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }

      'POST': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }
    }

    'Venue': {
      'DELETE': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }

      'GET': {
        'admin': VenueAdminResult
        'default': VenueDefaultResult
        'organizer': VenueOrganizerResult
      }

      'OPTIONS': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }

      'PATCH': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }

      'POST': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }
    }

    'Venues': {
      'DELETE': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }

      'GET': {
        'admin': VenueAdminResult[]
        'default': VenueDefaultResult[]
        'organizer': VenueOrganizerResult[]
      }

      'OPTIONS': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }

      'PATCH': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }

      'POST': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }
    }
  }

  'MiniApp': unknown

  'Users': {
    'Checkin': {
      'DELETE': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }

      'GET': {
        'admin': CheckinAdminResult
        'default': CheckinDefaultResult
        'organizer': CheckinOrganizerResult
      }

      'OPTIONS': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }

      'PATCH': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }

      'POST': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }
    }

    'Home': {
      'DELETE': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }

      'GET': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }

      'OPTIONS': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }

      'PATCH': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }

      'POST': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }
    }

    'User': {
      'DELETE': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }

      'GET': {
        'admin': UserAdminResult
        'default': UserDefaultResult
        'organizer': UserOrganizerResult
      }

      'OPTIONS': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }

      'PATCH': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }

      'POST': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }
    }

    'Users': {
      'DELETE': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }

      'GET': {
        'admin': UserAdminResult
        'default': UserDefaultResult
        'organizer': UserOrganizerResult
      }

      'OPTIONS': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }

      'PATCH': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }

      'POST': {
        'admin': unknown
        'default': unknown
        'organizer': unknown
      }
    }
  }
}
