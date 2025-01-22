type RegistrationAdminResult = unknown

type RegistrationDefaultResult = unknown

type RegistrationOrganizerResult = unknown

type RegistrationRow = {
  /**
   * @description "boolean"
   */
  is_extensible: Nullable<boolean>
  /**
   * @description "integer"
   */
  people_count: Nullable<number>
  /**
   * @description "boolean"
   */
  is_first: Nullable<boolean>
  /**
   * @description "boolean"
   */
  is_canceled: Nullable<boolean>
  /**
   * @description "boolean"
   */
  is_actual_presence: Nullable<boolean>
  /**
   * @description "boolean"
   */
  is_confirm: Nullable<boolean>
  /**
   * @description "integer"
   */
  change_people_count: Nullable<number>
  /**
   * @description "integer"
   */
  fact_people_count: Nullable<number>
  /**
   * @description "boolean"
   */
  is_birthday: Nullable<boolean>
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
  time_updated: Nullable<string>
  /**
   * @description "boolean"
   */
  is_reserve: Nullable<boolean>
  /**
   * @description "boolean"
   */
  is_alone: Nullable<boolean>
  /**
   * @description "character varying"
   */
  utm_campaign: Nullable<string>
  /**
   * @description "character varying"
   */
  human_name: Nullable<string>
  /**
   * @description "character varying"
   */
  last_broadcast: Nullable<string>
  /**
   * @description "character varying"
   */
  email: Nullable<string>
  /**
   * @description "character varying"
   */
  phone: Nullable<string>
  /**
   * @description "character varying"
   */
  team_name: Nullable<string>
  /**
   * @description "character varying"
   */
  ads_from: Nullable<string>
  /**
   * @description "character varying"
   */
  comment: Nullable<string>
  /**
   * @description "character varying"
   */
  promocode: Nullable<string>
  /**
   * @description "character varying"
   */
  channel: Nullable<string>
  /**
   * @description "character varying"
   */
  vkontakte: Nullable<string>
  /**
   * @description "character varying"
   */
  telegramBot: Nullable<string>
  /**
   * @description "character varying"
   */
  chatapp_id: Nullable<string>
  /**
   * @description "character varying"
   */
  utm_term: Nullable<string>
  /**
   * @description "character varying"
   */
  utm_source: Nullable<string>
  /**
   * @description "character varying"
   */
  utm_medium: Nullable<string>
  /**
   * @description "character varying"
   */
  utm_content: Nullable<string>
}
