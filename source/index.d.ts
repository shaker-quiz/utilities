export * from './enumerations/core/features.js'
export * from './enumerations/core/kinds.js'
export * from './enumerations/core/methods.js'
export * from './enumerations/core/scopes.js'

export * from './enumerations/misc/constants.js'
export * from './enumerations/misc/cookies.js'
export * from './enumerations/misc/icons.js'
export * from './enumerations/misc/phases.js'
export * from './enumerations/misc/regexps.js'

export * from './enumerations/entities/affilations.js'
export * from './enumerations/entities/game-statuses.js'
export * from './enumerations/entities/lineups.js'
export * from './enumerations/entities/registration-statuses.js'
export * from './enumerations/entities/roles.js'

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

type User = {
  email: string | null
  first_name: string | null
  gmail_link: string | null
  hashed_password: string | null
  id: string
  image_id: string | null
  is_active: boolean | null
  is_superuser: boolean | null
  is_verified: boolean | null
  last_name: string | null
  mailru_link: string | null
  phone: string | null
  role_id: string
  telegram_data: string | null
  telegram_id: string | null
  third_name: string | null
  time_created: string
  time_updated: string | null
}

type Role = {
  description: string | null
  id: string
  name: Role
  time_created: string
  time_updated: string | null
}

type City = {
  address: string | null
  alias: string | null
  chatapp_category: string | null
  chatapp_legacy: boolean | null
  chatapp_line: string | null
  chatapp_tag: string | null
  chatapp_user: string | null
  country: string | null
  currency: string | null
  custom_html: string | null
  custom_script: string | null
  description: string | null
  email: string | null
  game_time: string | null
  id: string
  inst_comment: string | null
  inst_link: string | null
  inst_login: string | null
  inst_password: string | null
  is_default: boolean | null
  is_franchise: boolean | null
  max_members_count: number | null
  meta_description: string | null
  meta_title: string | null
  min_members_count: number | null
  name: string | null
  phone: string | null
  price: number | null
  region: string | null
  telegram_chat_id: string | null
  tg_comment: string | null
  tg_link: string | null
  tg_login: string | null
  tg_password: string | null
  time_created: string
  time_updated: string | null
  timezone: number | null
  title: string | null
  vk_comment: string | null
  vk_group_id: string | null
  vk_link: string | null
  yandex_metrica: string | null
}

type Venue = {
  city_id: string | null
  comment_equipment: string | null
  comment_responsible: string | null
  comment: string | null
  floor: string | null
  game_time: string | null
  house_number: string | null
  id: string
  is_adult: boolean | null
  latitude: number | null
  location_info: string | null
  longitude: number | null
  metro: string | null
  name: string | null
  people_capacity: number | null
  street: string | null
  team_capacity: number | null
  time_created: string
  time_updated: string
}

type Theme = {
  description: string | null
  id: string
  image_id: string
  name: string | null
  short_description: string | null
  time_created: string
  time_updated: string
}

type Game = {
  alias: string | null
  city_id: string | null
  created_by_id: string
  currency: string | null
  description: string | null
  event_time: string | null
  game_pack_id: string | null
  id: string
  image_id: string | null
  location_id: string
  max_members_count: number | null
  min_members_count: number | null
  name: string | null
  number: string | null
  owner_id: string
  personal_comment: string | null
  price: number | null
  short_description: string | null
  status: GameStatus
  theme_id: string
  time_created: string
  time_updated: string | null
  timezone: number | null
  weekday: string | null
}

type Registration = {
  ads_from: string | null
  change_people_count: number | null
  channel: string | null
  chatapp_id: string | null
  comment: string | null
  email: string | null
  event_id: string
  fact_people_count: number | null
  human_name: string | null
  id: string
  is_actual_presence: boolean | null
  is_alone: boolean | null
  is_birthday: boolean | null
  is_canceled: boolean | null
  is_confirm: boolean | null
  is_extensible: boolean | null
  is_first: boolean | null
  is_reserve: boolean | null
  last_broadcast: string | null
  people_count: number | null
  phone: string | null
  promocode: string | null
  team_name: string | null
  telegramBot: string | null
  time_created: string
  time_updated: string | null
  utm_campaign: string | null
  utm_content: string | null
  utm_medium: string | null
  utm_source: string | null
  utm_term: string | null
  vkontakte: string | null
}

type Media = {
  id: string
  time_created: string
  time_updated: string | null
  title: string | null
  cached_link: string | null
  description: string | null
  path: string | null
}

type ImageMedia = {
  file_format: string | null
  height: number | null
  id: string
  media_id: string
  time_created: string
  time_updated: string | null
  width: number | null
}

/**
 * Mixins
 */

interface RequestInit {
  /**
   * @description A method string defined by RFC7231 @see {@link https://datatracker.ietf.org/doc/html/rfc7231#section-4.3}
   */
  method?: Method
}

/**
 * React
 */

type UseState<T> = [
  T,
  import('react').Dispatch<import('react').SetStateAction<T>>,
]

/**
 * Core
 */

type Method = (typeof import('./enumerations/core/methods.js').Methods)[number]

type Domain = (typeof import('./enumerations/core/features.js').Domains)[number]

type Procedure =
  (typeof import('./enumerations/core/features.js').Procedures)[number]

type Feature = Domain | Procedure

type Kind = (typeof import('./enumerations/core/kinds.js').Kinds)[number]

type Scope = `${Method}/${Feature}/${Kind}`

type Role = (typeof import('./enumerations/entities/roles.js').Roles)[number]

type GameStatus =
  (typeof import('./enumerations/entities/game-statuses.js').GameStatuses)[
    number
  ]

type RegistrationStatus =
  (typeof import('./enumerations/entities/registration-statuses.js').RegistrationStatuses)[
    number
  ]

type Lineup =
  (typeof import('./enumerations/entities/lineups.js').Lineups)[number]

type Affilation =
  (typeof import('./enumerations/entities/affilations.js').Affilations)[number]

/**
 * Misc
 */

type Icon = (typeof import('./enumerations/misc/icons.js').Icons)[number]

type Phase = (typeof import('./enumerations/misc/phases.js').Phases)[number]

/**
 * Products
 */

type ScopePhase = Record<Scope, Phase>

type ScopeState = Record<Scope, any>

type ScopeController = Record<Scope, AbortController | null>
