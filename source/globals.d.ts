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
  method: RequestMethod
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

type Feature = keyof typeof import('./enumerations/features.js').Features

type Network = keyof typeof import('./enumerations/networks.js').Networks

type Service = keyof typeof import('./enumerations/services.js').Services

type RequestMethod =
  keyof typeof import('./enumerations/request-methods.js').RequestMethods

type FetchResults = {
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
      'admin': UserAdminResult[]
      'default': UserDefaultResult[]
      'organizer': UserOrganizerResult[]
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
