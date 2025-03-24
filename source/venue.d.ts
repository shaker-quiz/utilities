type VenueAdminResult = VenueRow

type VenueDefaultResult = {
  address: VenueRow['address']
  alias: VenueRow['alias']
  country: VenueRow['country']
  custom_html: VenueRow['custom_html']
  custom_script: VenueRow['custom_script']
  email: VenueRow['email']
  id: VenueRow['id']
  inst_link: VenueRow['inst_link']
  max_members_count: VenueRow['max_members_count']
  meta_description: VenueRow['meta_description']
  meta_title: VenueRow['meta_title']
  min_members_count: VenueRow['min_members_count']
  name: VenueRow['name']
  phone: VenueRow['phone']
  tg_link: VenueRow['tg_link']
  vk_group_id: VenueRow['vk_group_id']
  vk_link: VenueRow['vk_link']
  yandex_metrica: VenueRow['yandex_metrica']
}

type VenueOrganizerResult = VenueRow

type VenueRow = {
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
