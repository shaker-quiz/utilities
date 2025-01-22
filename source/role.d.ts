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
  time_updated: Nullable<string>
  /**
   * @description "character varying"
   */
  name: 'admin' | 'manager' | 'default'
  /**
   * @description "character varying"
   */
  description: Nullable<string>
}
