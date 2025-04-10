type RegistrationAdminResult = unknown

type RegistrationDefaultResult = {
  id: RegistrationRow['id']
  event_id: RegistrationRow['event_id']
  team_name: RegistrationRow['team_name']
  is_canceled: RegistrationRow['is_canceled']
  is_confirm: RegistrationRow['is_confirm']
  is_reserve: RegistrationRow['is_reserve']
  change_people_count: RegistrationRow['change_people_count']
  people_count: RegistrationRow['people_count']
  channel: RegistrationRow['channel']
  event_time_utc: GameRow['event_time']
  event_timezone: GameRow['timezone']
  max_members_count: GameRow['max_members_count']
  can_cancel: boolean
  can_confirm: boolean
  can_change_people_count: boolean
}

type RegistrationOrganizerResult = unknown

type RegistrationRow = {
  /**
   * @description "boolean"
   */
  is_extensible: boolean | null
  /**
   * @description "integer"
   */
  people_count: number | null
  /**
   * @description "boolean"
   */
  is_first: boolean | null
  /**
   * @description "boolean"
   */
  is_canceled: boolean | null
  /**
   * @description "boolean"
   */
  is_actual_presence: boolean | null
  /**
   * @description "boolean"
   */
  is_confirm: boolean | null
  /**
   * @description "integer"
   */
  change_people_count: number | null
  /**
   * @description "integer"
   */
  fact_people_count: number | null
  /**
   * @description "boolean"
   */
  is_birthday: boolean | null
  /**
   * @description "uuid"
   */
  event_id: string
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
   * @description "boolean"
   */
  is_reserve: boolean | null
  /**
   * @description "boolean"
   */
  is_alone: boolean | null
  /**
   * @description "character varying"
   */
  utm_campaign: string | null
  /**
   * @description "character varying"
   */
  human_name: string | null
  /**
   * @description "character varying"
   */
  last_broadcast: string | null
  /**
   * @description "character varying"
   */
  email: string | null
  /**
   * @description "character varying"
   */
  phone: string | null
  /**
   * @description "character varying"
   */
  team_name: string | null
  /**
   * @description "character varying"
   */
  ads_from: string | null
  /**
   * @description "character varying"
   */
  comment: string | null
  /**
   * @description "character varying"
   */
  promocode: string | null
  /**
   * @description "character varying"
   */
  channel: string | null
  /**
   * @description "character varying"
   */
  vkontakte: string | null
  /**
   * @description "character varying"
   */
  telegramBot: string | null
  /**
   * @description "character varying"
   */
  chatapp_id: string | null
  /**
   * @description "character varying"
   */
  utm_term: string | null
  /**
   * @description "character varying"
   */
  utm_source: string | null
  /**
   * @description "character varying"
   */
  utm_medium: string | null
  /**
   * @description "character varying"
   */
  utm_content: string | null
}
