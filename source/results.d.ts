/**
 * Checkin
 */

type CheckinResult =
  & {
    id: UserRow['id']
    first_name: UserRow['first_name']
    last_name: UserRow['last_name']
    third_name: UserRow['third_name']
    phone: UserRow['phone']
    email: UserRow['email']
  }
  & {
    image_id: ImageMediaRow['id']
  }
  & {
    role_id: string
    role_name: string
  }

/**
 * City
 */

type CityResult = CityRow

type CityPublicResult = {
  address: CityRow['address']
  alias: CityRow['alias']
  country: CityRow['country']
  custom_html: CityRow['custom_html']
  custom_script: CityRow['custom_script']
  email: CityRow['email']
  id: CityRow['id']
  inst_link: CityRow['inst_link']
  max_members_count: CityRow['max_members_count']
  meta_description: CityRow['meta_description']
  meta_title: CityRow['meta_title']
  min_members_count: CityRow['min_members_count']
  name: CityRow['name']
  phone: CityRow['phone']
  tg_link: CityRow['tg_link']
  vk_group_id: CityRow['vk_group_id']
  vk_link: CityRow['vk_link']
  yandex_metrica: CityRow['yandex_metrica']
}

/**
 * Theme
 */

type ThemeResult = {
  id: ThemeRow['id']
  time_created: ThemeRow['time_created']
  name: ThemeRow['name']
  description: ThemeRow['description']
  short_description: ThemeRow['short_description']
  image_id: ImageMediaRow['id']
  media_title: MediaRow['title']
  media_path: MediaRow['path']
}

/**
 * Game
 */

type GameResult =
  & {
    event_id: GameRow['id']
    event_alias: GameRow['alias']
    event_number: GameRow['number']
    event_time: GameRow['event_time']
    event_status: GameRow['status']
  }
  & {
    location_id: LocationRow['id']
    location_name: LocationRow['name']
  }
  & {
    city_id: CityRow['id']
    city_alias: CityRow['alias']
    city_name: CityRow['name']
    city_is_franchise: CityRow['is_franchise']
  }
  & {
    theme_id: ThemeRow['id']
    theme_name: ThemeRow['name']
  }
  & {
    media_id: ImageMediaRow['id']
    media_title: ImageMediaRow['title']
    media_path: ImageMediaRow['path']
  }
  & {
    people_amount: number
    people_reserve_amount: number
    teams_amount: number
    teams_reserve_amount: number
  }

type GamePublicResult =
  & {
    theme_description: ThemeRow['description']
    theme_id: ThemeRow['id']
    theme_name: ThemeRow['name']
    theme_short_description: ThemeRow['short_description']
  }
  & {
    alias: GameRow['alias']
    currency: GameRow['currency']
    id: GameRow['id']
    max_members_count: GameRow['max_members_count']
    min_members_count: GameRow['min_members_count']
    number: GameRow['number']
    price: GameRow['price']
    status: GameRow['status']
    event_time: GameRow['event_time']
  }
  & {
    city_alias: CityRow['alias']
    city_id: CityRow['id']
  }
  & {
    location_house_number: LocationRow['house_number']
    location_id: LocationRow['id']
    location_info: LocationRow['location_info']
    location_name: LocationRow['name']
    location_street: LocationRow['street']
  }
  & {
    media_id: MediaRow['id']
    media_path: MediaRow['path']
  }
  & {
    image_id: ImageMediaRow['id']
  }
