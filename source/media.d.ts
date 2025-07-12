type MediaTable = {
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
