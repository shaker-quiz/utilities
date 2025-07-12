type RoleTable = {
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
  name: Role
  /**
   * @description "character varying"
   */
  description: string | null
}

type RoleResponse = {
  id: RoleTable['id']
  time_created: RoleTable['time_created']
  time_updated: RoleTable['time_updated']
  name: RoleTable['name']
  description: RoleTable['description']
}
