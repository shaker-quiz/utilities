type ImageMediaRow = {
  /**
   * @description "uuid"
   */
  media_id: string
  /**
   * @description "integer"
   */
  width: Nullable<number>
  /**
   * @description "integer"
   */
  height: Nullable<number>
  /**
   * @description "timestamp with time zone"
   */
  time_updated: Nullable<string>
  /**
   * @description "uuid"
   */
  id: string
  /**
   * @description "timestamp with time zone"
   */
  time_created: string
  /**
   * @description "character varying"
   */
  file_format: Nullable<string>
}

type MediaRow = {
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
   * @description "character varying"
   */
  title: Nullable<string>
  /**
   * @description "character varying"
   */
  cached_link: Nullable<string>
  /**
   * @description "character varying"
   */
  description: Nullable<string>
  /**
   * @description "character varying"
   */
  path: Nullable<string>
}
