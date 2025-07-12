type CityTable = {
  /**
   * @description "timestamp with time zone"
   */
  time_created: string
  /**
   * @description "integer"
   */
  timezone: number | null
  /**
   * @description "boolean"
   */
  is_default: boolean | null
  /**
   * @description "boolean"
   */
  is_franchise: boolean | null
  /**
   * @description "integer"
   */
  min_members_count: number | null
  /**
   * @description "integer"
   */
  max_members_count: number | null
  /**
   * @description "boolean"
   */
  chatapp_legacy: boolean | null
  /**
   * @description "timestamp with time zone"
   */
  time_updated: string | null
  /**
   * @description "double precision"
   */
  price: number | null
  /**
   * @description "uuid"
   */
  id: string
  /**
   * @description "character varying"
   */
  inst_login: string | null
  /**
   * @description "character varying"
   */
  inst_password: string | null
  /**
   * @description "character varying"
   */
  inst_comment: string | null
  /**
   * @description "character varying"
   */
  custom_script: string | null
  /**
   * @description "character varying"
   */
  custom_html: string | null
  /**
   * @description "character varying"
   */
  alias: string | null
  /**
   * @description "character varying"
   */
  vk_group_id: string | null
  /**
   * @description "character varying"
   */
  chatapp_line: string | null
  /**
   * @description "character varying"
   */
  chatapp_user: string | null
  /**
   * @description "character varying"
   */
  chatapp_tag: string | null
  /**
   * @description "character varying"
   */
  chatapp_category: string | null
  /**
   * @description "character varying"
   */
  telegram_chat_id: string | null
  /**
   * @description "character varying"
   */
  title: string | null
  /**
   * @description "character varying"
   */
  description: string | null
  /**
   * @description "character varying"
   */
  region: string | null
  /**
   * @description "character varying"
   */
  country: string | null
  /**
   * @description "character varying"
   */
  yandex_metrica: string | null
  /**
   * @description "character varying"
   */
  meta_title: string | null
  /**
   * @description "character varying"
   */
  meta_description: string | null
  /**
   * @description "character varying"
   */
  phone: string | null
  /**
   * @description "character varying"
   */
  email: string | null
  /**
   * @description "character varying"
   */
  name: string | null
  /**
   * @description "character varying"
   */
  address: string | null
  /**
   * @description "character varying"
   */
  currency: string | null
  /**
   * @description "character varying"
   */
  game_time: string | null
  /**
   * @description "character varying"
   */
  vk_link: string | null
  /**
   * @description "character varying"
   */
  vk_comment: string | null
  /**
   * @description "character varying"
   */
  tg_link: string | null
  /**
   * @description "character varying"
   */
  tg_login: string | null
  /**
   * @description "character varying"
   */
  tg_password: string | null
  /**
   * @description "character varying"
   */
  tg_comment: string | null
  /**
   * @description "character varying"
   */
  inst_link: string | null
}

type CityResponse = {
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
