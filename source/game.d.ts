type GameAdminResult = {
  // City
  city_alias: CityTable['alias']
  city_id: CityTable['id']
  city_is_franchise: CityTable['is_franchise']
  city_name: CityTable['name']
  // Event
  event_alias: GameRow['alias']
  event_id: GameRow['id']
  event_number: GameRow['number']
  event_status: GameRow['status']
  event_time: GameRow['event_time']
  // Location
  location_id: VenueTable['id']
  location_name: VenueTable['name']
  // Media
  media_id: ImageMediaTable['id']
  media_path: ImageMediaTable['path']
  media_title: ImageMediaTable['title']
  // Custom
  people_amount: number
  people_reserve_amount: number
  teams_amount: number
  teams_reserve_amount: number
  // Theme
  theme_id: ThemeTable['id']
  theme_name: ThemeTable['name']
}

type GameDefaultResult = {
  // City
  city_alias: CityTable['alias']
  city_id: CityTable['id']
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
  image_id: ImageMediaTable['id']
  // Location
  location_house_number: VenueTable['house_number']
  location_id: VenueTable['id']
  location_info: VenueTable['location_info']
  location_name: VenueTable['name']
  location_street: VenueTable['street']
  // Media
  media_id: MediaTable['id']
  media_path: MediaTable['path']
  // Theme
  theme_description: ThemeTable['description']
  theme_id: ThemeTable['id']
  theme_name: ThemeTable['name']
  theme_short_description: ThemeTable['short_description']
}

type GameOrginizerResult = {
  // City
  city_alias: CityTable['alias']
  city_id: CityTable['id']
  city_is_franchise: CityTable['is_franchise']
  city_name: CityTable['name']
  // Event
  event_alias: GameRow['alias']
  event_id: GameRow['id']
  event_number: GameRow['number']
  event_status: GameRow['status']
  event_time: GameRow['event_time']
  // Location
  location_id: VenueTable['id']
  location_name: VenueTable['name']
  // Media
  media_id: ImageMediaTable['id']
  media_path: ImageMediaTable['path']
  media_title: ImageMediaTable['title']
  // Custom
  people_amount: number
  people_reserve_amount: number
  teams_amount: number
  teams_reserve_amount: number
  // Theme
  theme_id: ThemeTable['id']
  theme_name: ThemeTable['name']
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
  status: GameStatus
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
