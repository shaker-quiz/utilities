type VenueAdminResult = {
  // Venue
  id: VenueRow['id']
  time_created: VenueRow['time_created']
  time_updated: VenueRow['time_updated']
  longitude: VenueRow['longitude']
  latitude: VenueRow['latitude']
  people_capacity: VenueRow['people_capacity']
  team_capacity: VenueRow['team_capacity']
  is_adult: VenueRow['is_adult']
  name: VenueRow['name']
  house_number: VenueRow['house_number']
  comment: VenueRow['comment']
  comment_responsible: VenueRow['comment_responsible']
  comment_equipment: VenueRow['comment_equipment']
  street: VenueRow['street']
  game_time: VenueRow['game_time']
  floor: VenueRow['floor']
  metro: VenueRow['metro']
  location_info: VenueRow['location_info']
  // City
  city_id: CityRow['id']
  city_name: CityRow['name']
  city_timezone: CityRow['timezone']
  city_price: CityRow['price']
  city_currency: CityRow['currency']
  city_min_members_count: CityRow['min_members_count']
  city_max_members_count: CityRow['max_members_count']
}

type VenueDefaultResult = unknown

type VenueOrganizerResult = {
  // Venue
  id: VenueRow['id']
  time_created: VenueRow['time_created']
  time_updated: VenueRow['time_updated']
  longitude: VenueRow['longitude']
  latitude: VenueRow['latitude']
  people_capacity: VenueRow['people_capacity']
  team_capacity: VenueRow['team_capacity']
  is_adult: VenueRow['is_adult']
  name: VenueRow['name']
  house_number: VenueRow['house_number']
  comment: VenueRow['comment']
  comment_responsible: VenueRow['comment_responsible']
  comment_equipment: VenueRow['comment_equipment']
  street: VenueRow['street']
  game_time: VenueRow['game_time']
  floor: VenueRow['floor']
  metro: VenueRow['metro']
  location_info: VenueRow['location_info']
  // City
  city_id: CityRow['id']
  city_name: CityRow['name']
  city_timezone: CityRow['timezone']
  city_price: CityRow['price']
  city_currency: CityRow['currency']
  city_min_members_count: CityRow['min_members_count']
  city_max_members_count: CityRow['max_members_count']
}

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
