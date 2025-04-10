type ImageMediaRow = {
  /**
   * @description "uuid"
   */
  media_id: string
  /**
   * @description "integer"
   */
  width: number | null
  /**
   * @description "integer"
   */
  height: number | null
  /**
   * @description "timestamp with time zone"
   */
  time_updated: string | null
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
  file_format: string | null
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
  time_updated: string | null
  /**
   * @description "character varying"
   */
  title: string | null
  /**
   * @description "character varying"
   */
  cached_link: string | null
  /**
   * @description "character varying"
   */
  description: string | null
  /**
   * @description "character varying"
   */
  path: string | null
}
