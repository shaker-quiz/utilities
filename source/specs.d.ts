/**
 * Checkin
 */

type CheckinResultSpec =
  & {
    id: UserRow['id']
    first_name: UserRow['first_name']
    last_name: UserRow['last_name']
    third_name: UserRow['third_name']
    phone: UserRow['phone']
    email: UserRow['email']
  }
  & {
    image: {
      image_id: ImageMediaRow['id']
    }
  }
  & {
    role: {
      id: string
      name: string
    }
  }

/**
 * City
 */

type CityResultSpec =
  & {
    name: CityRow['name']
    id: CityRow['id']
    time_created: CityRow['time_created']
    time_updated: CityRow['time_updated']
    price: CityRow['price']
    currency: CityRow['currency']
    game_time: CityRow['game_time']
    timezone: CityRow['timezone']
    vk_link: CityRow['vk_link']
    vk_comment: CityRow['vk_comment']
    tg_link: CityRow['tg_link']
    tg_login: CityRow['tg_login']
    tg_password: CityRow['tg_password']
    tg_comment: CityRow['tg_comment']
    inst_link: CityRow['inst_link']
    inst_login: CityRow['inst_login']
    inst_password: CityRow['inst_password']
    inst_comment: CityRow['inst_comment']
    is_franchise: CityRow['is_franchise']
    alias: CityRow['alias']
    vk_group_id: CityRow['vk_group_id']
    chatapp_line: CityRow['chatapp_line']
    chatapp_user: CityRow['chatapp_user']
    chatapp_tag: CityRow['chatapp_tag']
    chatapp_category: CityRow['chatapp_category']
    telegram_chat_id: CityRow['telegram_chat_id']
    title: CityRow['title']
    description: CityRow['description']
    region: CityRow['region']
    country: CityRow['country']
    is_default: CityRow['is_default']
    yandex_metrica: CityRow['yandex_metrica']
    chatapp_legacy: CityRow['chatapp_legacy']
    phone: CityRow['phone']
    email: CityRow['email']
    address: CityRow['address']
  }
  & {
    analitycs: {
      custom_html: CityRow['custom_html']
      custom_script: CityRow['custom_script']
      yandex_metrica: CityRow['yandex_metrica']
    }
  }
  & {
    meta: {
      title: CityRow['title']
      description: CityRow['description']
    }
  }
  & {
    participants: {
      maximum: CityRow['max_members_count']
      minimum: CityRow['min_members_count']
    }
  }

type CityPublicResultSpec =
  & {
    address: CityRow['address']
    alias: CityRow['alias']
    country: CityRow['country']
    email: CityRow['email']
    id: CityRow['id']
    inst_link: CityRow['inst_link']
    name: CityRow['name']
    phone: CityRow['phone']
    tg_link: CityRow['tg_link']
    vk_group_id: CityRow['vk_group_id']
    vk_link: CityRow['vk_link']
  }
  & {
    analitycs: {
      custom_html: CityRow['custom_html']
      custom_script: CityRow['custom_script']
      yandex_metrica: CityRow['yandex_metrica']
    }
  }
  & {
    meta: {
      title: CityRow['title']
      description: CityRow['description']
    }
  }
  & {
    participants: {
      maximum: CityRow['max_members_count']
      minimum: CityRow['min_members_count']
    }
  }

/**
 * Game
 */

type GameResultSpec =
  & {
    id: GameRow['id']
    alias: GameRow['alias']
    number: GameRow['number']
    time: GameRow['event_time']
    status: GameRow['status']
  }
  & {
    location: {
      id: LocationRow['id']
      name: LocationRow['name']
    }
  }
  & {
    city: {
      id: CityRow['id']
      alias: CityRow['alias']
      name: CityRow['name']
      franchise: CityRow['is_franchise']
    }
  }
  & {
    theme: {
      id: ThemeRow['id']
      name: ThemeRow['name']
      media: {
        id: ImageMediaRow['id']
        title: ImageMediaRow['title']
        path: ImageMediaRow['path']
      }
    }
  }
  & {
    people: {
      amount: number
      reservation: number
    }
  }
  & {
    teams: {
      amount: number
      reservation: number
    }
  }

type GamePublicResultSpec =
  & {
    id: GameRow['id']
    alias: GameRow['alias']
    number: GameRow['number']
    event_time: GameRow['event_time']
    status: GameRow['status']
    price: GameRow['price']
    currency: GameRow['currency']
    min_members_count: GameRow['min_members_count']
    max_members_count: GameRow['max_members_count']
  }
  & {
    theme: {
      id: ThemeRow['id']
      name: ThemeRow['name']
      description: ThemeRow['description']
      short_description: ThemeRow['short_description']
    }
  }
  & {
    city: {
      id: CityRow['id']
      alias: CityRow['alias']
    }
  }
  & {
    location: {
      name: LocationRow['name']
      street: LocationRow['street']
      info: LocationRow['location_info']
      house_number: LocationRow['house_number']
    }
  }
  & {
    media: {
      id: MediaRow['id']
      path: MediaRow['path']
    }
  }
