type RegistrationTable = {
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

type RegistrationResponse = {
  can_cancel: boolean
  can_change_people_count: boolean
  can_confirm: boolean
  change_people_count: RegistrationTable['change_people_count']
  channel: RegistrationTable['channel']
  event_id: RegistrationTable['event_id']
  event_time_utc: GameRow['event_time']
  event_timezone: GameRow['timezone']
  id: RegistrationTable['id']
  is_canceled: RegistrationTable['is_canceled']
  is_confirm: RegistrationTable['is_confirm']
  is_reserve: RegistrationTable['is_reserve']
  max_members_count: GameRow['max_members_count']
  people_count: RegistrationTable['people_count']
  team_name: RegistrationTable['team_name']
}
