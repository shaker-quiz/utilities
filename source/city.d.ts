type CityAdminResult = CityRow

type CityOrganizerResult = CityRow

type CityDefaultResult = {
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
  id: string
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
