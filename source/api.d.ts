type ScopeRoleResponse = {
  'GET/Checkin/Set': {
    admin: unknown

    default: unknown

    organizer: unknown
  }

  'GET/Checkin/Unit': {
    admin: {
      email: User['email']
      first_name: User['first_name']
      id: User['id']
      last_name: User['last_name']
      phone: User['phone']
      third_name: User['third_name']
      role: {
        id: Role['id']
        name: Role['name']
      }
      cities: Array<{
        alias: City['alias']
        id: City['id']
        name: City['name']
        vk_group_id: City['vk_group_id']
      }>
    }

    default: {
      email: User['email']
      first_name: User['first_name']
      id: User['id']
      last_name: User['last_name']
      phone: User['phone']
      third_name: User['third_name']
      role: {
        id: Role['id']
        name: Role['name']
      }
      cities: Array<{
        alias: City['alias']
        id: City['id']
        name: City['name']
        vk_group_id: City['vk_group_id']
      }>
    }

    organizer: {
      email: User['email']
      first_name: User['first_name']
      id: User['id']
      last_name: User['last_name']
      phone: User['phone']
      third_name: User['third_name']
      role: {
        id: Role['id']
        name: Role['name']
      }
      cities: Array<{
        alias: City['alias']
        id: City['id']
        name: City['name']
        vk_group_id: City['vk_group_id']
      }>
    }
  }

  'GET/User/Set': {
    admin: Array<{
      email: User['email']
      first_name: User['first_name']
      gmail_link: User['gmail_link']
      id: User['id']
      is_active: User['is_active']
      last_name: User['last_name']
      mailru_link: User['mailru_link']
      phone: User['phone']
      role: {
        id: Role['id']
        name: Role['name']
      }
      cities: Array<{
        alias: City['alias']
        id: City['id']
        name: City['name']
        vk_group_id: City['vk_group_id']
      }>
    }>

    default: unknown

    organizer: unknown
  }

  'GET/User/Unit': {
    admin: {
      email: User['email']
      first_name: User['first_name']
      gmail_link: User['gmail_link']
      id: User['id']
      is_active: User['is_active']
      last_name: User['last_name']
      mailru_link: User['mailru_link']
      phone: User['phone']
      role: {
        id: Role['id']
        name: Role['name']
      }
      cities: Array<{
        alias: City['alias']
        id: City['id']
        name: City['name']
        vk_group_id: City['vk_group_id']
      }>
    }

    default: unknown

    organizer: unknown
  }

  'GET/Role/Set': {
    admin: Array<{
      description: Role['description']
      id: Role['id']
      name: Role['name']
      time_created: Role['time_created']
      time_updated: Role['time_updated']
    }>

    default: unknown

    organizer: Array<{
      description: Role['description']
      id: Role['id']
      name: Role['name']
      time_created: Role['time_created']
      time_updated: Role['time_updated']
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
      code: City['country']
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
    admin: Array<City>

    default: Array<{
      address: City['address']
      alias: City['alias']
      country: City['country']
      custom_html: City['custom_html']
      custom_script: City['custom_script']
      email: City['email']
      id: City['id']
      inst_link: City['inst_link']
      max_members_count: City['max_members_count']
      meta_description: City['meta_description']
      meta_title: City['meta_title']
      min_members_count: City['min_members_count']
      name: City['name']
      phone: City['phone']
      tg_link: City['tg_link']
      vk_group_id: City['vk_group_id']
      vk_link: City['vk_link']
      yandex_metrica: City['yandex_metrica']
    }>

    organizer: Array<City>
  }

  'GET/City/Unit': {
    admin: City

    default: {
      address: City['address']
      alias: City['alias']
      country: City['country']
      custom_html: City['custom_html']
      custom_script: City['custom_script']
      email: City['email']
      id: City['id']
      inst_link: City['inst_link']
      max_members_count: City['max_members_count']
      meta_description: City['meta_description']
      meta_title: City['meta_title']
      min_members_count: City['min_members_count']
      name: City['name']
      phone: City['phone']
      tg_link: City['tg_link']
      vk_group_id: City['vk_group_id']
      vk_link: City['vk_link']
      yandex_metrica: City['yandex_metrica']
    }

    organizer: City
  }

  'GET/Venue/Set': {
    admin: Array<{
      city_id: Venue['city_id']
      comment_equipment: Venue['comment_equipment']
      comment_responsible: Venue['comment_responsible']
      comment: Venue['comment']
      floor: Venue['floor']
      game_time: Venue['game_time']
      house_number: Venue['house_number']
      id: Venue['id']
      is_adult: Venue['is_adult']
      latitude: Venue['latitude']
      location_info: Venue['location_info']
      longitude: Venue['longitude']
      metro: Venue['metro']
      name: Venue['name']
      people_capacity: Venue['people_capacity']
      street: Venue['street']
      team_capacity: Venue['team_capacity']
      time_created: Venue['time_created']
      time_updated: Venue['time_updated']
      city: {
        alias: City['alias']
        country: City['country']
        id: City['id']
        name: City['name']
        vk_group_id: City['vk_group_id']
      }
    }>

    default: unknown

    organizer: Array<{
      city_id: Venue['city_id']
      comment_equipment: Venue['comment_equipment']
      comment_responsible: Venue['comment_responsible']
      comment: Venue['comment']
      floor: Venue['floor']
      game_time: Venue['game_time']
      house_number: Venue['house_number']
      id: Venue['id']
      is_adult: Venue['is_adult']
      latitude: Venue['latitude']
      location_info: Venue['location_info']
      longitude: Venue['longitude']
      metro: Venue['metro']
      name: Venue['name']
      people_capacity: Venue['people_capacity']
      street: Venue['street']
      team_capacity: Venue['team_capacity']
      time_created: Venue['time_created']
      time_updated: Venue['time_updated']
      city: {
        alias: City['alias']
        country: City['country']
        id: City['id']
        name: City['name']
        vk_group_id: City['vk_group_id']
      }
    }>
  }

  'GET/Venue/Unit': {
    admin: {
      city_id: Venue['city_id']
      comment_equipment: Venue['comment_equipment']
      comment_responsible: Venue['comment_responsible']
      comment: Venue['comment']
      floor: Venue['floor']
      game_time: Venue['game_time']
      house_number: Venue['house_number']
      id: Venue['id']
      is_adult: Venue['is_adult']
      latitude: Venue['latitude']
      location_info: Venue['location_info']
      longitude: Venue['longitude']
      metro: Venue['metro']
      name: Venue['name']
      people_capacity: Venue['people_capacity']
      street: Venue['street']
      team_capacity: Venue['team_capacity']
      time_created: Venue['time_created']
      time_updated: Venue['time_updated']
      city: {
        alias: City['alias']
        country: City['country']
        id: City['id']
        name: City['name']
        vk_group_id: City['vk_group_id']
      }
    }

    default: unknown

    organizer: {
      city_id: Venue['city_id']
      comment_equipment: Venue['comment_equipment']
      comment_responsible: Venue['comment_responsible']
      comment: Venue['comment']
      floor: Venue['floor']
      game_time: Venue['game_time']
      house_number: Venue['house_number']
      id: Venue['id']
      is_adult: Venue['is_adult']
      latitude: Venue['latitude']
      location_info: Venue['location_info']
      longitude: Venue['longitude']
      metro: Venue['metro']
      name: Venue['name']
      people_capacity: Venue['people_capacity']
      street: Venue['street']
      team_capacity: Venue['team_capacity']
      time_created: Venue['time_created']
      time_updated: Venue['time_updated']
      city: {
        alias: City['alias']
        country: City['country']
        id: City['id']
        name: City['name']
        vk_group_id: City['vk_group_id']
      }
    }
  }

  'GET/Theme/Set': {
    admin: Array<{
      description: Theme['description']
      id: Theme['id']
      name: Theme['name']
      short_description: Theme['short_description']
      time_created: Theme['time_created']
      image: {
        id: ImageMedia['id']
      }
      media: {
        id: Media['id']
        path: Media['path']
        title: Media['title']
      }
    }>

    default: unknown

    organizer: Array<{
      description: Theme['description']
      id: Theme['id']
      name: Theme['name']
      short_description: Theme['short_description']
      time_created: Theme['time_created']
      image: {
        id: ImageMedia['id']
      }
      media: {
        id: Media['id']
        path: Media['path']
        title: Media['title']
      }
    }>
  }

  'GET/Theme/Unit': {
    admin: {
      description: Theme['description']
      id: Theme['id']
      name: Theme['name']
      short_description: Theme['short_description']
      time_created: Theme['time_created']
      image: {
        id: ImageMedia['id']
      }
      media: {
        id: Media['id']
        path: Media['path']
        title: Media['title']
      }
    }

    default: unknown

    organizer: {
      description: Theme['description']
      id: Theme['id']
      name: Theme['name']
      short_description: Theme['short_description']
      time_created: Theme['time_created']
      image: {
        id: ImageMedia['id']
      }
      media: {
        id: Media['id']
        path: Media['path']
        title: Media['title']
      }
    }
  }

  'GET/Game/Set': {
    admin: Array<{
      id: Game['id']
      alias: Game['alias']
      number: Game['number']
      event_time: Game['event_time']
      status: Game['status']
      city: {
        alias: City['alias']
        id: City['id']
        name: City['name']
        vk_group_id: City['vk_group_id']
      }
      location: {
        id: Venue['id']
        name: Venue['name']
      }
      theme: {
        id: Theme['id']
        name: Theme['name']
      }
      image: {
        id: ImageMedia['id']
      }
      media: {
        id: Media['id']
        path: Media['path']
        title: Media['title']
      }
      people: number
      people_reserve: number
      teams: number
      teams_reserve: number
    }>

    default: Array<{
      id: Game['id']
      alias: Game['alias']
      number: Game['number']
      event_time: Game['event_time']
      status: Game['status']
      price: Game['price']
      currency: Game['currency']
      min_members_count: Game['min_members_count']
      max_members_count: Game['max_members_count']
      city: {
        alias: City['alias']
        id: City['id']
        name: City['name']
        vk_group_id: City['vk_group_id']
      }
      location: {
        house_number: Venue['house_number']
        id: Venue['id']
        location_info: Venue['location_info']
        name: Venue['name']
        street: Venue['street']
      }
      theme: {
        description: Theme['description']
        id: Theme['id']
        name: Theme['name']
        short_description: Theme['short_description']
      }
      image: {
        id: ImageMedia['id']
      }
      media: {
        id: Media['id']
        path: Media['path']
      }
    }>

    organizer: Array<{
      alias: Game['alias']
      event_time: Game['event_time']
      id: Game['id']
      number: Game['number']
      status: Game['status']
      city: {
        alias: City['alias']
        id: City['id']
        name: City['name']
        vk_group_id: City['vk_group_id']
      }
      location: {
        house_number: Venue['house_number']
        id: Venue['id']
        location_info: Venue['location_info']
        name: Venue['name']
        street: Venue['street']
      }
      theme: {
        description: Theme['description']
        id: Theme['id']
        name: Theme['name']
        short_description: Theme['short_description']
      }
      image: {
        id: ImageMedia['id']
      }
      media: {
        id: Media['id']
        path: Media['path']
      }
      people: number
      people_reserve: number
      teams: number
      teams_reserve: number
    }>
  }

  'GET/Game/Unit': {
    admin: {
      alias: Game['alias']
      currency: Game['currency']
      event_time: Game['event_time']
      id: Game['id']
      max_members_count: Game['max_members_count']
      min_members_count: Game['min_members_count']
      number: Game['number']
      personal_comment: Game['personal_comment']
      price: Game['price']
      status: Game['status']
      city: {
        alias: City['alias']
        id: City['id']
        name: City['name']
        timezone: City['timezone']
        vk_group_id: City['vk_group_id']
      }
      venue: {
        house_number: Venue['house_number']
        id: Venue['id']
        name: Venue['name']
        street: Venue['street']
      }
      theme: {
        description: Theme['description']
        id: Theme['id']
        name: Theme['name']
        short_description: Theme['short_description']
      }
      image: {
        id: ImageMedia['id']
      }
      media: {
        id: Media['id']
        path: Media['path']
        title: Media['title']
      }
    }

    default: {
      alias: Game['alias']
      currency: Game['currency']
      event_time: Game['event_time']
      id: Game['id']
      max_members_count: Game['max_members_count']
      min_members_count: Game['min_members_count']
      number: Game['number']
      price: Game['price']
      status: Game['status']
      weekday: Game['weekday']
      city: {
        alias: City['alias']
        id: City['id']
        name: City['name']
        timezone: City['timezone']
        vk_group_id: City['vk_group_id']
      }
      venue: {
        house_number: Venue['house_number']
        id: Venue['id']
        location_info: Venue['location_info']
        name: Venue['name']
        street: Venue['street']
      }
      theme: {
        description: Theme['description']
        id: Theme['id']
        name: Theme['name']
        short_description: Theme['short_description']
      }
      image: {
        id: ImageMedia['id']
      }
      media: {
        id: Media['id']
        path: Media['path']
        title: Media['title']
      }
    }

    organizer: {
      alias: Game['alias']
      currency: Game['currency']
      event_time: Game['event_time']
      id: Game['id']
      max_members_count: Game['max_members_count']
      min_members_count: Game['min_members_count']
      number: Game['number']
      price: Game['price']
      status: Game['status']
      weekday: Game['weekday']
      city: {
        alias: City['alias']
        id: City['id']
        name: City['name']
        timezone: City['timezone']
        vk_group_id: City['vk_group_id']
      }
      venue: {
        house_number: Venue['house_number']
        id: Venue['id']
        location_info: Venue['location_info']
        name: Venue['name']
        street: Venue['street']
      }
      theme: {
        description: Theme['description']
        id: Theme['id']
        name: Theme['name']
        short_description: Theme['short_description']
      }
      image: {
        id: ImageMedia['id']
      }
      media: {
        id: Media['id']
        path: Media['path']
        title: Media['title']
      }
    }
  }

  'GET/Registration/Set': {
    admin: Array<{
      can_cancel: boolean
      can_change_people_count: boolean
      can_confirm: boolean
      change_people_count: Registration['change_people_count']
      channel: Registration['channel']
      event_id: Registration['event_id']
      event_time_utc: GameRow['event_time']
      event_timezone: GameRow['timezone']
      id: Registration['id']
      is_canceled: Registration['is_canceled']
      is_confirm: Registration['is_confirm']
      is_reserve: Registration['is_reserve']
      max_members_count: GameRow['max_members_count']
      people_count: Registration['people_count']
      team_name: Registration['team_name']
    }>

    default: Array<{
      can_cancel: boolean
      can_change_people_count: boolean
      can_confirm: boolean
      change_people_count: Registration['change_people_count']
      channel: Registration['channel']
      event_id: Registration['event_id']
      event_time_utc: GameRow['event_time']
      event_timezone: GameRow['timezone']
      id: Registration['id']
      is_canceled: Registration['is_canceled']
      is_confirm: Registration['is_confirm']
      is_reserve: Registration['is_reserve']
      max_members_count: GameRow['max_members_count']
      people_count: Registration['people_count']
      team_name: Registration['team_name']
    }>

    organizer: Array<{
      can_cancel: boolean
      can_change_people_count: boolean
      can_confirm: boolean
      change_people_count: Registration['change_people_count']
      channel: Registration['channel']
      event_id: Registration['event_id']
      event_time_utc: GameRow['event_time']
      event_timezone: GameRow['timezone']
      id: Registration['id']
      is_canceled: Registration['is_canceled']
      is_confirm: Registration['is_confirm']
      is_reserve: Registration['is_reserve']
      max_members_count: GameRow['max_members_count']
      people_count: Registration['people_count']
      team_name: Registration['team_name']
    }>
  }

  'GET/Registration/Unit': {
    admin: {
      can_cancel: boolean
      can_change_people_count: boolean
      can_confirm: boolean
      change_people_count: Registration['change_people_count']
      channel: Registration['channel']
      event_id: Registration['event_id']
      event_time_utc: GameRow['event_time']
      event_timezone: GameRow['timezone']
      id: Registration['id']
      is_canceled: Registration['is_canceled']
      is_confirm: Registration['is_confirm']
      is_reserve: Registration['is_reserve']
      max_members_count: GameRow['max_members_count']
      people_count: Registration['people_count']
      team_name: Registration['team_name']
    }

    default: {
      can_cancel: boolean
      can_change_people_count: boolean
      can_confirm: boolean
      change_people_count: Registration['change_people_count']
      channel: Registration['channel']
      event_id: Registration['event_id']
      event_time_utc: GameRow['event_time']
      event_timezone: GameRow['timezone']
      id: Registration['id']
      is_canceled: Registration['is_canceled']
      is_confirm: Registration['is_confirm']
      is_reserve: Registration['is_reserve']
      max_members_count: GameRow['max_members_count']
      people_count: Registration['people_count']
      team_name: Registration['team_name']
    }

    organizer: {
      can_cancel: boolean
      can_change_people_count: boolean
      can_confirm: boolean
      change_people_count: Registration['change_people_count']
      channel: Registration['channel']
      event_id: Registration['event_id']
      event_time_utc: GameRow['event_time']
      event_timezone: GameRow['timezone']
      id: Registration['id']
      is_canceled: Registration['is_canceled']
      is_confirm: Registration['is_confirm']
      is_reserve: Registration['is_reserve']
      max_members_count: GameRow['max_members_count']
      people_count: Registration['people_count']
      team_name: Registration['team_name']
    }
  }

  'GET/Game/Set': {
    admin: Array<{
      id: Game['id']
      alias: Game['alias']
      number: Game['number']
      event_time: Game['event_time']
      status: Game['status']
      city: {
        alias: City['alias']
        id: City['id']
        name: City['name']
        vk_group_id: City['vk_group_id']
      }
      venue: {
        id: Venue['id']
        name: Venue['name']
      }
      theme: {
        id: Theme['id']
        name: Theme['name']
      }
      image: {
        id: ImageMedia['id']
      }
      media: {
        id: Media['id']
        path: Media['path']
        title: Media['title']
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
        alias: City['alias']
        id: City['id']
      }
      location: {
        house_number: Venue['house_number']
        id: Venue['id']
        info: Venue['location_info']
        name: Venue['name']
        street: Venue['street']
      }
      theme: {
        description: Theme['description']
        id: Theme['id']
        name: Theme['name']
        short_description: Theme['short_description']
      }
      media: {
        id: Media['id']
        path: Media['path']
      }
    }>

    organizer: Array<{
      id: Game['id']
      alias: Game['alias']
      number: Game['number']
      event_time: Game['event_time']
      status: Game['status']
      city: {
        alias: City['alias']
        id: City['id']
        name: City['name']
        vk_group_id: City['vk_group_id']
      }
      venue: {
        id: Venue['id']
        name: Venue['name']
      }
      theme: {
        id: Theme['id']
        name: Theme['name']
      }
      image: {
        id: ImageMedia['id']
      }
      media: {
        id: Media['id']
        path: Media['path']
        title: Media['title']
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

type EndpointHandler = (
  request: Request,
  checkin: ScopeRoleResponse['GET/Checkin/Unit'][Role],
  pattern: URLPatternResult,
) => any
