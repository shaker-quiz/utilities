type CityRow = {
  /**
   * @description "timestamp with time zone"
   */
  time_created: string
  /**
   * @description "integer"
   */
  timezone: Nullable<number>
  /**
   * @description "boolean"
   */
  is_default: Nullable<boolean>
  /**
   * @description "boolean"
   */
  is_franchise: Nullable<boolean>
  /**
   * @description "integer"
   */
  min_members_count: Nullable<number>
  /**
   * @description "integer"
   */
  max_members_count: Nullable<number>
  /**
   * @description "boolean"
   */
  chatapp_legacy: Nullable<boolean>
  /**
   * @description "timestamp with time zone"
   */
  time_updated: Nullable<string>
  /**
   * @description "double precision"
   */
  price: Nullable<number>
  /**
   * @description "uuid"
   */
  id: Nullable<string>
  /**
   * @description "character varying"
   */
  inst_login: Nullable<string>
  /**
   * @description "character varying"
   */
  inst_password: Nullable<string>
  /**
   * @description "character varying"
   */
  inst_comment: Nullable<string>
  /**
   * @description "character varying"
   */
  custom_script: Nullable<string>
  /**
   * @description "character varying"
   */
  custom_html: Nullable<string>
  /**
   * @description "character varying"
   */
  alias: Nullable<string>
  /**
   * @description "character varying"
   */
  vk_group_id: Nullable<string>
  /**
   * @description "character varying"
   */
  chatapp_line: Nullable<string>
  /**
   * @description "character varying"
   */
  chatapp_user: Nullable<string>
  /**
   * @description "character varying"
   */
  chatapp_tag: Nullable<string>
  /**
   * @description "character varying"
   */
  chatapp_category: Nullable<string>
  /**
   * @description "character varying"
   */
  telegram_chat_id: Nullable<string>
  /**
   * @description "character varying"
   */
  title: Nullable<string>
  /**
   * @description "character varying"
   */
  description: Nullable<string>
  /**
   * @description "character varying"
   */
  region: Nullable<string>
  /**
   * @description "character varying"
   */
  country: Nullable<string>
  /**
   * @description "character varying"
   */
  yandex_metrica: Nullable<string>
  /**
   * @description "character varying"
   */
  meta_title: Nullable<string>
  /**
   * @description "character varying"
   */
  meta_description: Nullable<string>
  /**
   * @description "character varying"
   */
  phone: Nullable<string>
  /**
   * @description "character varying"
   */
  email: Nullable<string>
  /**
   * @description "character varying"
   */
  name: Nullable<string>
  /**
   * @description "character varying"
   */
  address: Nullable<string>
  /**
   * @description "character varying"
   */
  currency: Nullable<string>
  /**
   * @description "character varying"
   */
  game_time: Nullable<string>
  /**
   * @description "character varying"
   */
  vk_link: Nullable<string>
  /**
   * @description "character varying"
   */
  vk_comment: Nullable<string>
  /**
   * @description "character varying"
   */
  tg_link: Nullable<string>
  /**
   * @description "character varying"
   */
  tg_login: Nullable<string>
  /**
   * @description "character varying"
   */
  tg_password: Nullable<string>
  /**
   * @description "character varying"
   */
  tg_comment: Nullable<string>
  /**
   * @description "character varying"
   */
  inst_link: Nullable<string>
}

type GameRow = {
  /**
   * @description "uuid"
   */
  city_id: Nullable<string>
  /**
   * @description "uuid"
   */
  game_pack_id: Nullable<string>
  /**
   * @description "uuid"
   */
  id: Nullable<string>
  /**
   * @description "timestamp with time zone"
   */
  time_created: string
  /**
   * @description "timestamp with time zone"
   */
  time_updated: Nullable<string>
  /**
   * @description "uuid"
   */
  owner_id: string
  /**
   * @description "integer"
   */
  timezone: Nullable<number>
  /**
   * @description "integer"
   */
  min_members_count: Nullable<number>
  /**
   * @description "integer"
   */
  max_members_count: Nullable<number>
  /**
   * @description "USER-DEFINED"
   */
  status: Nullable<string>
  /**
   * @description "timestamp without time zone"
   */
  event_time: Nullable<string>
  /**
   * @description "double precision"
   */
  price: Nullable<number>
  /**
   * @description "uuid"
   */
  created_by_id: string
  /**
   * @description "uuid"
   */
  image_id: Nullable<string>
  /**
   * @description "uuid"
   */
  location_id: string
  /**
   * @description "uuid"
   */
  theme_id: string
  /**
   * @description "character varying"
   */
  description: Nullable<string>
  /**
   * @description "character varying"
   */
  number: Nullable<string>
  /**
   * @description "character varying"
   */
  short_description: Nullable<string>
  /**
   * @description "character varying"
   */
  personal_comment: Nullable<string>
  /**
   * @description "character varying"
   */
  weekday: Nullable<string>
  /**
   * @description "character varying"
   */
  alias: Nullable<string>
  /**
   * @description "character varying"
   */
  name: Nullable<string>
  /**
   * @description "character varying"
   */
  currency: Nullable<string>
}

type ThemeRow = {
  /**
   * @description "timestamp with time zone"
   */
  time_updated: string
  /**
   * @description "uuid"
   */
  id: string
  /**
   * @description "timestamp with time zone"
   */
  time_created: Nullable<string>
  /**
   * @description "uuid"
   */
  image_id: string
  /**
   * @description "character varying"
   */
  short_description: Nullable<string>
  /**
   * @description "character varying"
   */
  description: Nullable<string>
  /**
   * @description "character varying"
   */
  name: Nullable<string>
}

type ImageMediaRow = {
  /**
   * @description "uuid"
   */
  media_id: string
  /**
   * @description "integer"
   */
  width: Nullable<number>
  /**
   * @description "integer"
   */
  height: Nullable<number>
  /**
   * @description "timestamp with time zone"
   */
  time_updated: Nullable<string>
  /**
   * @description "uuid"
   */
  id: string
  /**
   * @description "timestamp with time zone"
   */
  time_created: string
  /**
   * @description "character varying"
   */
  file_format: Nullable<string>
}

type LocationRow = {
  /**
   * @description "uuid"
   */
  id: string
  /**
   * @description "timestamp with time zone"
   */
  time_created: string
  /**
   * @description "timestamp with time zone"
   */
  time_updated: Nullable<string>
  /**
   * @description "double precision"
   */
  longitude: Nullable<number>
  /**
   * @description "uuid"
   */
  city_id: string
  /**
   * @description "double precision"
   */
  latitude: Nullable<number>
  /**
   * @description "integer"
   */
  people_capacity: Nullable<number>
  /**
   * @description "integer"
   */
  team_capacity: Nullable<number>
  /**
   * @description "boolean"
   */
  is_adult: Nullable<boolean>
  /**
   * @description "character varying"
   */
  name: Nullable<string>
  /**
   * @description "character varying"
   */
  house_number: Nullable<string>
  /**
   * @description "character varying"
   */
  comment: Nullable<string>
  /**
   * @description "character varying"
   */
  comment_responsible: Nullable<string>
  /**
   * @description "character varying"
   */
  comment_equipment: Nullable<string>
  /**
   * @description "character varying"
   */
  street: Nullable<string>
  /**
   * @description "character varying"
   */
  game_time: Nullable<string>
  /**
   * @description "character varying"
   */
  floor: Nullable<string>
  /**
   * @description "character varying"
   */
  metro: Nullable<string>
  /**
   * @description "character varying"
   */
  location_info: Nullable<string>
}

type MediaRow = {
  /**
   * @description "uuid"
   */
  id: string
  /**
   * @description "timestamp with time zone"
   */
  time_created: string
  /**
   * @description "timestamp with time zone"
   */
  time_updated: Nullable<string>
  /**
   * @description "character varying"
   */
  title: Nullable<string>
  /**
   * @description "character varying"
   */
  cached_link: Nullable<string>
  /**
   * @description "character varying"
   */
  description: Nullable<string>
  /**
   * @description "character varying"
   */
  path: Nullable<string>
}

type UserRow = {
  /**
   * @description "uuid"
   */
  role_id: string

  /**
   * @description "uuid"
   */
  id: string

  /**
   * @description "timestamp with time zone"
   */
  time_created: Nullable<string>

  /**
   * @description "timestamp with time zone"
   */
  time_updated: Nullable<string>

  /**
   * @description "boolean"
   */
  is_active: Nullable<boolean>

  /**
   * @description "boolean"
   */
  is_superuser: Nullable<boolean>

  /**
   * @description "boolean"
   */
  is_verified: Nullable<boolean>

  /**
   * @description "uuid"
   */
  image_id: Nullable<string>

  /**
   * @description "character varying"
   */
  mailru_link: Nullable<string>

  /**
   * @description "character varying"
   */
  telegram_id: Nullable<string>

  /**
   * @description "character varying"
   */
  hashed_password: Nullable<string>

  /**
   * @description "character varying"
   */
  telegram_data: Nullable<string>

  /**
   * @description "character varying"
   */
  third_name: Nullable<string>

  /**
   * @description "character varying"
   */
  phone: Nullable<string>

  /**
   * @description "character varying"
   */
  first_name: Nullable<string>

  /**
   * @description "character varying"
   */
  last_name: Nullable<string>

  /**
   * @description "character varying"
   */
  email: Nullable<string>

  /**
   * @description "character varying"
   */
  gmail_link: Nullable<string>
}
