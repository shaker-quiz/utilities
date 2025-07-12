type VenueTable = {
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

type VenueResponse = {
  id: VenueTable['id']
  time_created: VenueTable['time_created']
  time_updated: VenueTable['time_updated']
  longitude: VenueTable['longitude']
  latitude: VenueTable['latitude']
  people_capacity: VenueTable['people_capacity']
  team_capacity: VenueTable['team_capacity']
  is_adult: VenueTable['is_adult']
  name: VenueTable['name']
  house_number: VenueTable['house_number']
  comment: VenueTable['comment']
  comment_responsible: VenueTable['comment_responsible']
  comment_equipment: VenueTable['comment_equipment']
  street: VenueTable['street']
  game_time: VenueTable['game_time']
  floor: VenueTable['floor']
  metro: VenueTable['metro']
  location_info: VenueTable['location_info']
  city: CityResponse
}
