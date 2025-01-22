type LocationAdminResult = LocationRow

type LocationDefaultResult = {
  address: LocationRow['address']
  alias: LocationRow['alias']
  country: LocationRow['country']
  custom_html: LocationRow['custom_html']
  custom_script: LocationRow['custom_script']
  email: LocationRow['email']
  id: LocationRow['id']
  inst_link: LocationRow['inst_link']
  max_members_count: LocationRow['max_members_count']
  meta_description: LocationRow['meta_description']
  meta_title: LocationRow['meta_title']
  min_members_count: LocationRow['min_members_count']
  name: LocationRow['name']
  phone: LocationRow['phone']
  tg_link: LocationRow['tg_link']
  vk_group_id: LocationRow['vk_group_id']
  vk_link: LocationRow['vk_link']
  yandex_metrica: LocationRow['yandex_metrica']
}

type LocationOrganizerResult = LocationRow

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
  city_id: Nullable<string>
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
