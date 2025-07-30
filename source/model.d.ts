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
