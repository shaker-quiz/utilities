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
  location_id: LocationRow['id']
  location_name: LocationRow['name']
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
  location_house_number: LocationRow['house_number']
  location_id: LocationRow['id']
  location_info: LocationRow['location_info']
  location_name: LocationRow['name']
  location_street: LocationRow['street']
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
  location_id: LocationRow['id']
  location_name: LocationRow['name']
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
