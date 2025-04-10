type GameAdminResult = {
  // City
  city_alias: CityRow['alias']
  city_id: CityRow['id']
  city_is_franchise: CityRow['is_franchise']
  city_name: CityRow['name']
  // Event
  event_alias: GameRow['alias']
  event_id: GameRow['id']
  event_number: GameRow['number']
  event_status: GameRow['status']
  event_time: GameRow['event_time']
  // Location
  location_id: VenueRow['id']
  location_name: VenueRow['name']
  // Media
  media_id: ImageMediaRow['id']
  media_path: ImageMediaRow['path']
  media_title: ImageMediaRow['title']
  // Custom
  people_amount: number
  people_reserve_amount: number
  teams_amount: number
  teams_reserve_amount: number
  // Theme
  theme_id: ThemeRow['id']
  theme_name: ThemeRow['name']
}

type GameDefaultResult = {
  // City
  city_alias: CityRow['alias']
  city_id: CityRow['id']
  // Event
  event_alias: GameRow['alias']
  event_currency: GameRow['currency']
  event_id: GameRow['id']
  event_max_members_count: GameRow['max_members_count']
  event_min_members_count: GameRow['min_members_count']
  event_number: GameRow['number']
  event_price: GameRow['price']
  event_status: GameRow['status']
  event_time: GameRow['event_time']
  // Image
  image_id: ImageMediaRow['id']
  // Location
  location_house_number: VenueRow['house_number']
  location_id: VenueRow['id']
  location_info: VenueRow['location_info']
  location_name: VenueRow['name']
  location_street: VenueRow['street']
  // Media
  media_id: MediaRow['id']
  media_path: MediaRow['path']
  // Theme
  theme_description: ThemeRow['description']
  theme_id: ThemeRow['id']
  theme_name: ThemeRow['name']
  theme_short_description: ThemeRow['short_description']
}

type GameOrginizerResult = {
  // City
  city_alias: CityRow['alias']
  city_id: CityRow['id']
  city_is_franchise: CityRow['is_franchise']
  city_name: CityRow['name']
  // Event
  event_alias: GameRow['alias']
  event_id: GameRow['id']
  event_number: GameRow['number']
  event_status: GameRow['status']
  event_time: GameRow['event_time']
  // Location
  location_id: VenueRow['id']
  location_name: VenueRow['name']
  // Media
  media_id: ImageMediaRow['id']
  media_path: ImageMediaRow['path']
  media_title: ImageMediaRow['title']
  // Custom
  people_amount: number
  people_reserve_amount: number
  teams_amount: number
  teams_reserve_amount: number
  // Theme
  theme_id: ThemeRow['id']
  theme_name: ThemeRow['name']
}

type GameRow = {
  /**
   * @description "uuid"
   */
  city_id: string | null
  /**
   * @description "uuid"
   */
  game_pack_id: string | null
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
   * @description "uuid"
   */
  owner_id: string
  /**
   * @description "integer"
   */
  timezone: number | null
  /**
   * @description "integer"
   */
  min_members_count: number | null
  /**
   * @description "integer"
   */
  max_members_count: number | null
  /**
   * @description "USER-DEFINED"
   */
  status:
    | 'MODERATION'
    | 'PUBLISHED'
    | 'REJECTED'
    | 'APPROVED'
    | 'FINISHED'
    | 'ARCHIVE'
    | 'FORINVITES'
    | 'IS_RESERVE'
    | 'CLOSED'
  /**
   * @description "timestamp without time zone"
   */
  event_time: string | null
  /**
   * @description "double precision"
   */
  price: number | null
  /**
   * @description "uuid"
   */
  created_by_id: string
  /**
   * @description "uuid"
   */
  image_id: string | null
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
  description: string | null
  /**
   * @description "character varying"
   */
  number: string | null
  /**
   * @description "character varying"
   */
  short_description: string | null
  /**
   * @description "character varying"
   */
  personal_comment: string | null
  /**
   * @description "character varying"
   */
  weekday: string | null
  /**
   * @description "character varying"
   */
  alias: string | null
  /**
   * @description "character varying"
   */
  name: string | null
  /**
   * @description "character varying"
   */
  currency: string | null
}
