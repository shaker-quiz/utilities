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
  time_updated: string | null
  /**
   * @description "double precision"
   */
  longitude: number | null
  /**
   * @description "uuid"
   */
  city_id: string | null
  /**
   * @description "double precision"
   */
  latitude: number | null
  /**
   * @description "integer"
   */
  people_capacity: number | null
  /**
   * @description "integer"
   */
  team_capacity: number | null
  /**
   * @description "boolean"
   */
  is_adult: boolean | null
  /**
   * @description "character varying"
   */
  name: string | null
  /**
   * @description "character varying"
   */
  house_number: string | null
  /**
   * @description "character varying"
   */
  comment: string | null
  /**
   * @description "character varying"
   */
  comment_responsible: string | null
  /**
   * @description "character varying"
   */
  comment_equipment: string | null
  /**
   * @description "character varying"
   */
  street: string | null
  /**
   * @description "character varying"
   */
  game_time: string | null
  /**
   * @description "character varying"
   */
  floor: string | null
  /**
   * @description "character varying"
   */
  metro: string | null
  /**
   * @description "character varying"
   */
  location_info: string | null
}
