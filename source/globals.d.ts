/**
 * General
 */

type Nullable<Type> = Type | null

type Optional<Type> = Type | null | undefined

/**
 * Mixins
 */

interface RequestInit {
  /** A string to declaratively set the Authorization header. */
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
 * Types
 */

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

  'Theme': {
    'DELETE': {
      'admin': unknown
      'default': unknown
      'organizer': unknown
    }

    'GET': {
      'admin': ThemeAdminResult
      'default': unknown
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
      'default': unknown
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

  'Location': {
    'DELETE': {
      'admin': unknown
      'default': unknown
      'organizer': unknown
    }

    'GET': {
      'admin': LocationAdminResult
      'default': LocationDefaultResult
      'organizer': LocationOrganizerResult
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

  'Locations': {
    'DELETE': {
      'admin': unknown
      'default': unknown
      'organizer': unknown
    }

    'GET': {
      'admin': LocationAdminResult
      'default': LocationDefaultResult
      'organizer': LocationOrganizerResult
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
