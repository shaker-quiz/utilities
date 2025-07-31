type ScopeRoleResponse = {
  'GET/Checkin/Set': {
    admin: unknown

    default: unknown

    organizer: unknown
  }

  'GET/Checkin/Unit': {
    admin: {
      email: UserTable['email']
      first_name: UserTable['first_name']
      id: UserTable['id']
      last_name: UserTable['last_name']
      phone: UserTable['phone']
      third_name: UserTable['third_name']
      role: {
        id: RoleTable['id']
        name: RoleTable['name']
      }
      cities: Array<{
        alias: CityTable['alias']
        id: CityTable['id']
        name: CityTable['name']
        vk_group_id: CityTable['vk_group_id']
      }>
    }

    default: {
      email: UserTable['email']
      first_name: UserTable['first_name']
      id: UserTable['id']
      last_name: UserTable['last_name']
      phone: UserTable['phone']
      third_name: UserTable['third_name']
      role: {
        id: RoleTable['id']
        name: RoleTable['name']
      }
      cities: Array<{
        alias: CityTable['alias']
        id: CityTable['id']
        name: CityTable['name']
        vk_group_id: CityTable['vk_group_id']
      }>
    }

    organizer: {
      email: UserTable['email']
      first_name: UserTable['first_name']
      id: UserTable['id']
      last_name: UserTable['last_name']
      phone: UserTable['phone']
      third_name: UserTable['third_name']
      role: {
        id: RoleTable['id']
        name: RoleTable['name']
      }
      cities: Array<{
        alias: CityTable['alias']
        id: CityTable['id']
        name: CityTable['name']
        vk_group_id: CityTable['vk_group_id']
      }>
    }
  }

  'GET/User/Set': {
    admin: Array<{
      email: UserTable['email']
      first_name: UserTable['first_name']
      gmail_link: UserTable['gmail_link']
      id: UserTable['id']
      is_active: UserTable['is_active']
      last_name: UserTable['last_name']
      mailru_link: UserTable['mailru_link']
      phone: UserTable['phone']
      role: {
        id: RoleTable['id']
        name: RoleTable['name']
      }
      cities: Array<{
        alias: CityTable['alias']
        id: CityTable['id']
        name: CityTable['name']
        vk_group_id: CityTable['vk_group_id']
      }>
    }>

    default: unknown

    organizer: unknown
  }

  'GET/User/Unit': {
    admin: {
      email: UserTable['email']
      first_name: UserTable['first_name']
      gmail_link: UserTable['gmail_link']
      id: UserTable['id']
      is_active: UserTable['is_active']
      last_name: UserTable['last_name']
      mailru_link: UserTable['mailru_link']
      phone: UserTable['phone']
      role: {
        id: RoleTable['id']
        name: RoleTable['name']
      }
      cities: Array<{
        alias: CityTable['alias']
        id: CityTable['id']
        name: CityTable['name']
        vk_group_id: CityTable['vk_group_id']
      }>
    }

    default: unknown

    organizer: unknown
  }

  'GET/Role/Set': {
    admin: Array<{
      description: RoleTable['description']
      id: RoleTable['id']
      name: RoleTable['name']
      time_created: RoleTable['time_created']
      time_updated: RoleTable['time_updated']
    }>

    default: unknown

    organizer: Array<{
      description: RoleTable['description']
      id: RoleTable['id']
      name: RoleTable['name']
      time_created: RoleTable['time_created']
      time_updated: RoleTable['time_updated']
    }>
  }

  'GET/Role/Unit': {
    admin: unknown

    default: unknown

    organizer: unknown
  }

  'GET/Country/Set': {
    admin: unknown

    default: Array<{
      code: CityTable['country']
      name: string
    }>

    organizer: unknown
  }

  'GET/Country/Unit': {
    admin: unknown

    default: unknown

    organizer: unknown
  }

  'GET/City/Set': {
    admin: Array<CityTable>

    default: Array<{
      address: CityTable['address']
      alias: CityTable['alias']
      country: CityTable['country']
      custom_html: CityTable['custom_html']
      custom_script: CityTable['custom_script']
      email: CityTable['email']
      id: CityTable['id']
      inst_link: CityTable['inst_link']
      max_members_count: CityTable['max_members_count']
      meta_description: CityTable['meta_description']
      meta_title: CityTable['meta_title']
      min_members_count: CityTable['min_members_count']
      name: CityTable['name']
      phone: CityTable['phone']
      tg_link: CityTable['tg_link']
      vk_group_id: CityTable['vk_group_id']
      vk_link: CityTable['vk_link']
      yandex_metrica: CityTable['yandex_metrica']
    }>

    organizer: Array<CityTable>
  }

  'GET/City/Unit': {
    admin: CityTable

    default: {
      address: CityTable['address']
      alias: CityTable['alias']
      country: CityTable['country']
      custom_html: CityTable['custom_html']
      custom_script: CityTable['custom_script']
      email: CityTable['email']
      id: CityTable['id']
      inst_link: CityTable['inst_link']
      max_members_count: CityTable['max_members_count']
      meta_description: CityTable['meta_description']
      meta_title: CityTable['meta_title']
      min_members_count: CityTable['min_members_count']
      name: CityTable['name']
      phone: CityTable['phone']
      tg_link: CityTable['tg_link']
      vk_group_id: CityTable['vk_group_id']
      vk_link: CityTable['vk_link']
      yandex_metrica: CityTable['yandex_metrica']
    }

    organizer: CityTable
  }

  'GET/Venue/Set': {
    admin: Array<{
      city_id: VenueTable['city_id']
      comment_equipment: VenueTable['comment_equipment']
      comment_responsible: VenueTable['comment_responsible']
      comment: VenueTable['comment']
      floor: VenueTable['floor']
      game_time: VenueTable['game_time']
      house_number: VenueTable['house_number']
      id: VenueTable['id']
      is_adult: VenueTable['is_adult']
      latitude: VenueTable['latitude']
      location_info: VenueTable['location_info']
      longitude: VenueTable['longitude']
      metro: VenueTable['metro']
      name: VenueTable['name']
      people_capacity: VenueTable['people_capacity']
      street: VenueTable['street']
      team_capacity: VenueTable['team_capacity']
      time_created: VenueTable['time_created']
      time_updated: VenueTable['time_updated']
      city: {
        alias: CityTable['alias']
        country: CityTable['country']
        id: CityTable['id']
        name: CityTable['name']
        vk_group_id: CityTable['vk_group_id']
      }
    }>

    default: unknown

    organizer: Array<{
      city_id: VenueTable['city_id']
      comment_equipment: VenueTable['comment_equipment']
      comment_responsible: VenueTable['comment_responsible']
      comment: VenueTable['comment']
      floor: VenueTable['floor']
      game_time: VenueTable['game_time']
      house_number: VenueTable['house_number']
      id: VenueTable['id']
      is_adult: VenueTable['is_adult']
      latitude: VenueTable['latitude']
      location_info: VenueTable['location_info']
      longitude: VenueTable['longitude']
      metro: VenueTable['metro']
      name: VenueTable['name']
      people_capacity: VenueTable['people_capacity']
      street: VenueTable['street']
      team_capacity: VenueTable['team_capacity']
      time_created: VenueTable['time_created']
      time_updated: VenueTable['time_updated']
      city: {
        alias: CityTable['alias']
        country: CityTable['country']
        id: CityTable['id']
        name: CityTable['name']
        vk_group_id: CityTable['vk_group_id']
      }
    }>
  }

  'GET/Venue/Unit': {
    admin: {
      city_id: VenueTable['city_id']
      comment_equipment: VenueTable['comment_equipment']
      comment_responsible: VenueTable['comment_responsible']
      comment: VenueTable['comment']
      floor: VenueTable['floor']
      game_time: VenueTable['game_time']
      house_number: VenueTable['house_number']
      id: VenueTable['id']
      is_adult: VenueTable['is_adult']
      latitude: VenueTable['latitude']
      location_info: VenueTable['location_info']
      longitude: VenueTable['longitude']
      metro: VenueTable['metro']
      name: VenueTable['name']
      people_capacity: VenueTable['people_capacity']
      street: VenueTable['street']
      team_capacity: VenueTable['team_capacity']
      time_created: VenueTable['time_created']
      time_updated: VenueTable['time_updated']
      city: {
        alias: CityTable['alias']
        country: CityTable['country']
        id: CityTable['id']
        name: CityTable['name']
        vk_group_id: CityTable['vk_group_id']
      }
    }

    default: unknown

    organizer: {
      city_id: VenueTable['city_id']
      comment_equipment: VenueTable['comment_equipment']
      comment_responsible: VenueTable['comment_responsible']
      comment: VenueTable['comment']
      floor: VenueTable['floor']
      game_time: VenueTable['game_time']
      house_number: VenueTable['house_number']
      id: VenueTable['id']
      is_adult: VenueTable['is_adult']
      latitude: VenueTable['latitude']
      location_info: VenueTable['location_info']
      longitude: VenueTable['longitude']
      metro: VenueTable['metro']
      name: VenueTable['name']
      people_capacity: VenueTable['people_capacity']
      street: VenueTable['street']
      team_capacity: VenueTable['team_capacity']
      time_created: VenueTable['time_created']
      time_updated: VenueTable['time_updated']
      city: {
        alias: CityTable['alias']
        country: CityTable['country']
        id: CityTable['id']
        name: CityTable['name']
        vk_group_id: CityTable['vk_group_id']
      }
    }
  }

  'GET/Theme/Set': {
    admin: Array<{
      description: ThemeTable['description']
      id: ThemeTable['id']
      name: ThemeTable['name']
      short_description: ThemeTable['short_description']
      time_created: ThemeTable['time_created']
      image: {
        id: ImageTable['id']
      }
      media: {
        id: MediaTable['id']
        path: MediaTable['path']
        title: MediaTable['title']
      }
    }>

    default: unknown

    organizer: Array<{
      description: ThemeTable['description']
      id: ThemeTable['id']
      name: ThemeTable['name']
      short_description: ThemeTable['short_description']
      time_created: ThemeTable['time_created']
      image: {
        id: ImageTable['id']
      }
      media: {
        id: MediaTable['id']
        path: MediaTable['path']
        title: MediaTable['title']
      }
    }>
  }

  'GET/Theme/Unit': {
    admin: {
      description: ThemeTable['description']
      id: ThemeTable['id']
      name: ThemeTable['name']
      short_description: ThemeTable['short_description']
      time_created: ThemeTable['time_created']
      image: {
        id: ImageTable['id']
      }
      media: {
        id: MediaTable['id']
        path: MediaTable['path']
        title: MediaTable['title']
      }
    }

    default: unknown

    organizer: {
      description: ThemeTable['description']
      id: ThemeTable['id']
      name: ThemeTable['name']
      short_description: ThemeTable['short_description']
      time_created: ThemeTable['time_created']
      image: {
        id: ImageTable['id']
      }
      media: {
        id: MediaTable['id']
        path: MediaTable['path']
        title: MediaTable['title']
      }
    }
  }

  'GET/Game/Set': {
    admin: Array<{
      id: GameTable['id']
      alias: GameTable['alias']
      number: GameTable['number']
      event_time: GameTable['event_time']
      status: GameTable['status']
      city: {
        alias: CityTable['alias']
        id: CityTable['id']
        name: CityTable['name']
        vk_group_id: CityTable['vk_group_id']
      }
      location: {
        id: VenueTable['id']
        name: VenueTable['name']
      }
      theme: {
        id: ThemeTable['id']
        name: ThemeTable['name']
      }
      image: {
        id: ImageTable['id']
      }
      media: {
        id: MediaTable['id']
        path: MediaTable['path']
        title: MediaTable['title']
      }
      people: number
      people_reserve: number
      teams: number
      teams_reserve: number
    }>

    default: Array<{
      id: GameTable['id']
      alias: GameTable['alias']
      number: GameTable['number']
      event_time: GameTable['event_time']
      status: GameTable['status']
      price: GameTable['price']
      currency: GameTable['currency']
      min_members_count: GameTable['min_members_count']
      max_members_count: GameTable['max_members_count']
      city: {
        alias: CityTable['alias']
        id: CityTable['id']
        name: CityTable['name']
        vk_group_id: CityTable['vk_group_id']
      }
      location: {
        house_number: VenueTable['house_number']
        id: VenueTable['id']
        location_info: VenueTable['location_info']
        name: VenueTable['name']
        street: VenueTable['street']
      }
      theme: {
        description: ThemeTable['description']
        id: ThemeTable['id']
        name: ThemeTable['name']
        short_description: ThemeTable['short_description']
      }
      image: {
        id: ImageTable['id']
      }
      media: {
        id: MediaTable['id']
        path: MediaTable['path']
      }
    }>

    organizer: Array<{
      alias: GameTable['alias']
      event_time: GameTable['event_time']
      id: GameTable['id']
      number: GameTable['number']
      status: GameTable['status']
      city: {
        alias: CityTable['alias']
        id: CityTable['id']
        name: CityTable['name']
        vk_group_id: CityTable['vk_group_id']
      }
      location: {
        house_number: VenueTable['house_number']
        id: VenueTable['id']
        location_info: VenueTable['location_info']
        name: VenueTable['name']
        street: VenueTable['street']
      }
      theme: {
        description: ThemeTable['description']
        id: ThemeTable['id']
        name: ThemeTable['name']
        short_description: ThemeTable['short_description']
      }
      image: {
        id: ImageTable['id']
      }
      media: {
        id: MediaTable['id']
        path: MediaTable['path']
      }
      people: number
      people_reserve: number
      teams: number
      teams_reserve: number
    }>
  }

  'GET/Game/Unit': {
    admin: {
      alias: GameTable['alias']
      currency: GameTable['currency']
      event_time: GameTable['event_time']
      id: GameTable['id']
      max_members_count: GameTable['max_members_count']
      min_members_count: GameTable['min_members_count']
      number: GameTable['number']
      personal_comment: GameTable['personal_comment']
      price: GameTable['price']
      status: GameTable['status']
      city: {
        alias: CityTable['alias']
        id: CityTable['id']
        name: CityTable['name']
        timezone: CityTable['timezone']
        vk_group_id: CityTable['vk_group_id']
      }
      venue: {
        house_number: VenueTable['house_number']
        id: VenueTable['id']
        name: VenueTable['name']
        street: VenueTable['street']
      }
      theme: {
        description: ThemeTable['description']
        id: ThemeTable['id']
        name: ThemeTable['name']
        short_description: ThemeTable['short_description']
      }
      image: {
        id: ImageTable['id']
      }
      media: {
        id: MediaTable['id']
        path: MediaTable['path']
        title: MediaTable['title']
      }
    }

    default: {
      alias: GameTable['alias']
      currency: GameTable['currency']
      event_time: GameTable['event_time']
      id: GameTable['id']
      max_members_count: GameTable['max_members_count']
      min_members_count: GameTable['min_members_count']
      number: GameTable['number']
      price: GameTable['price']
      status: GameTable['status']
      weekday: GameTable['weekday']
      city: {
        alias: CityTable['alias']
        id: CityTable['id']
        name: CityTable['name']
        timezone: CityTable['timezone']
        vk_group_id: CityTable['vk_group_id']
      }
      venue: {
        house_number: VenueTable['house_number']
        id: VenueTable['id']
        location_info: VenueTable['location_info']
        name: VenueTable['name']
        street: VenueTable['street']
      }
      theme: {
        description: ThemeTable['description']
        id: ThemeTable['id']
        name: ThemeTable['name']
        short_description: ThemeTable['short_description']
      }
      image: {
        id: ImageTable['id']
      }
      media: {
        id: MediaTable['id']
        path: MediaTable['path']
        title: MediaTable['title']
      }
    }

    organizer: {
      alias: GameTable['alias']
      currency: GameTable['currency']
      event_time: GameTable['event_time']
      id: GameTable['id']
      max_members_count: GameTable['max_members_count']
      min_members_count: GameTable['min_members_count']
      number: GameTable['number']
      price: GameTable['price']
      status: GameTable['status']
      weekday: GameTable['weekday']
      city: {
        alias: CityTable['alias']
        id: CityTable['id']
        name: CityTable['name']
        timezone: CityTable['timezone']
        vk_group_id: CityTable['vk_group_id']
      }
      venue: {
        house_number: VenueTable['house_number']
        id: VenueTable['id']
        location_info: VenueTable['location_info']
        name: VenueTable['name']
        street: VenueTable['street']
      }
      theme: {
        description: ThemeTable['description']
        id: ThemeTable['id']
        name: ThemeTable['name']
        short_description: ThemeTable['short_description']
      }
      image: {
        id: ImageTable['id']
      }
      media: {
        id: MediaTable['id']
        path: MediaTable['path']
        title: MediaTable['title']
      }
    }
  }

  'GET/Registration/Set': {
    admin: Array<{
      can_cancel: boolean
      can_change_people_count: boolean
      can_confirm: boolean
      change_people_count: RegistrationTable['change_people_count']
      channel: RegistrationTable['channel']
      event_id: RegistrationTable['event_id']
      event_time_utc: GameRow['event_time']
      event_timezone: GameRow['timezone']
      id: RegistrationTable['id']
      is_canceled: RegistrationTable['is_canceled']
      is_confirm: RegistrationTable['is_confirm']
      is_reserve: RegistrationTable['is_reserve']
      max_members_count: GameRow['max_members_count']
      people_count: RegistrationTable['people_count']
      team_name: RegistrationTable['team_name']
    }>

    default: Array<{
      can_cancel: boolean
      can_change_people_count: boolean
      can_confirm: boolean
      change_people_count: RegistrationTable['change_people_count']
      channel: RegistrationTable['channel']
      event_id: RegistrationTable['event_id']
      event_time_utc: GameRow['event_time']
      event_timezone: GameRow['timezone']
      id: RegistrationTable['id']
      is_canceled: RegistrationTable['is_canceled']
      is_confirm: RegistrationTable['is_confirm']
      is_reserve: RegistrationTable['is_reserve']
      max_members_count: GameRow['max_members_count']
      people_count: RegistrationTable['people_count']
      team_name: RegistrationTable['team_name']
    }>

    organizer: Array<{
      can_cancel: boolean
      can_change_people_count: boolean
      can_confirm: boolean
      change_people_count: RegistrationTable['change_people_count']
      channel: RegistrationTable['channel']
      event_id: RegistrationTable['event_id']
      event_time_utc: GameRow['event_time']
      event_timezone: GameRow['timezone']
      id: RegistrationTable['id']
      is_canceled: RegistrationTable['is_canceled']
      is_confirm: RegistrationTable['is_confirm']
      is_reserve: RegistrationTable['is_reserve']
      max_members_count: GameRow['max_members_count']
      people_count: RegistrationTable['people_count']
      team_name: RegistrationTable['team_name']
    }>
  }

  'GET/Registration/Unit': {
    admin: {
      can_cancel: boolean
      can_change_people_count: boolean
      can_confirm: boolean
      change_people_count: RegistrationTable['change_people_count']
      channel: RegistrationTable['channel']
      event_id: RegistrationTable['event_id']
      event_time_utc: GameRow['event_time']
      event_timezone: GameRow['timezone']
      id: RegistrationTable['id']
      is_canceled: RegistrationTable['is_canceled']
      is_confirm: RegistrationTable['is_confirm']
      is_reserve: RegistrationTable['is_reserve']
      max_members_count: GameRow['max_members_count']
      people_count: RegistrationTable['people_count']
      team_name: RegistrationTable['team_name']
    }

    default: {
      can_cancel: boolean
      can_change_people_count: boolean
      can_confirm: boolean
      change_people_count: RegistrationTable['change_people_count']
      channel: RegistrationTable['channel']
      event_id: RegistrationTable['event_id']
      event_time_utc: GameRow['event_time']
      event_timezone: GameRow['timezone']
      id: RegistrationTable['id']
      is_canceled: RegistrationTable['is_canceled']
      is_confirm: RegistrationTable['is_confirm']
      is_reserve: RegistrationTable['is_reserve']
      max_members_count: GameRow['max_members_count']
      people_count: RegistrationTable['people_count']
      team_name: RegistrationTable['team_name']
    }

    organizer: {
      can_cancel: boolean
      can_change_people_count: boolean
      can_confirm: boolean
      change_people_count: RegistrationTable['change_people_count']
      channel: RegistrationTable['channel']
      event_id: RegistrationTable['event_id']
      event_time_utc: GameRow['event_time']
      event_timezone: GameRow['timezone']
      id: RegistrationTable['id']
      is_canceled: RegistrationTable['is_canceled']
      is_confirm: RegistrationTable['is_confirm']
      is_reserve: RegistrationTable['is_reserve']
      max_members_count: GameRow['max_members_count']
      people_count: RegistrationTable['people_count']
      team_name: RegistrationTable['team_name']
    }
  }

  'GET/Game/Set': {
    admin: Array<{
      id: GameTable['id']
      alias: GameTable['alias']
      number: GameTable['number']
      event_time: GameTable['event_time']
      status: GameTable['status']
      city: {
        alias: CityTable['alias']
        id: CityTable['id']
        name: CityTable['name']
        vk_group_id: CityTable['vk_group_id']
      }
      venue: {
        id: VenueTable['id']
        name: VenueTable['name']
      }
      theme: {
        id: ThemeTable['id']
        name: ThemeTable['name']
      }
      image: {
        id: ImageTable['id']
      }
      media: {
        id: MediaTable['id']
        path: MediaTable['path']
        title: MediaTable['title']
      }
      amounts: {
        people: number
        people_reserve: number
        teams: number
        teams_reserve: number
      }
    }>

    default: Array<{
      alias: GameRow['alias']
      currency: GameRow['currency']
      event_time: GameRow['event_time']
      id: GameRow['id']
      max_members_count: GameRow['max_members_count']
      min_members_count: GameRow['min_members_count']
      number: GameRow['number']
      price: GameRow['price']
      status: GameRow['status']
      city: {
        alias: CityTable['alias']
        id: CityTable['id']
      }
      location: {
        house_number: VenueTable['house_number']
        id: VenueTable['id']
        info: VenueTable['location_info']
        name: VenueTable['name']
        street: VenueTable['street']
      }
      theme: {
        description: ThemeTable['description']
        id: ThemeTable['id']
        name: ThemeTable['name']
        short_description: ThemeTable['short_description']
      }
      media: {
        id: MediaTable['id']
        path: MediaTable['path']
      }
    }>

    organizer: Array<{
      id: GameTable['id']
      alias: GameTable['alias']
      number: GameTable['number']
      event_time: GameTable['event_time']
      status: GameTable['status']
      city: {
        alias: CityTable['alias']
        id: CityTable['id']
        name: CityTable['name']
        vk_group_id: CityTable['vk_group_id']
      }
      venue: {
        id: VenueTable['id']
        name: VenueTable['name']
      }
      theme: {
        id: ThemeTable['id']
        name: ThemeTable['name']
      }
      image: {
        id: ImageTable['id']
      }
      media: {
        id: MediaTable['id']
        path: MediaTable['path']
        title: MediaTable['title']
      }
      amounts: {
        people: number
        people_reserve: number
        teams: number
        teams_reserve: number
      }
    }>
  }
}
