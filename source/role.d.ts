type RoleRow = {
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
  name: 'admin' | 'manager'
  /**
   * @description "character varying"
   */
  description: string | null
}
