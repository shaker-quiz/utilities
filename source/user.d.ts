type UserTable = {
  /**
   * @description "uuid"
   */
  role_id: string

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
  is_active: boolean | null

  /**
   * @description "boolean"
   */
  is_superuser: boolean | null

  /**
   * @description "boolean"
   */
  is_verified: boolean | null

  /**
   * @description "uuid"
   */
  image_id: string | null

  /**
   * @description "character varying"
   */
  mailru_link: string | null

  /**
   * @description "character varying"
   */
  telegram_id: string | null

  /**
   * @description "character varying"
   */
  hashed_password: string | null

  /**
   * @description "character varying"
   */
  telegram_data: string | null

  /**
   * @description "character varying"
   */
  third_name: string | null

  /**
   * @description "character varying"
   */
  phone: string | null

  /**
   * @description "character varying"
   */
  first_name: string | null

  /**
   * @description "character varying"
   */
  last_name: string | null

  /**
   * @description "character varying"
   */
  email: string | null

  /**
   * @description "character varying"
   */
  gmail_link: string | null
}

type UserResponse = {
  email: UserTable['email']
  first_name: UserTable['first_name']
  gmail_link: UserTable['gmail_link']
  id: UserTable['id']
  is_active: UserTable['is_active']
  last_name: UserTable['last_name']
  mailru_link: UserTable['mailru_link']
  phone: UserTable['phone']
  role: RoleResponse
  cities: CityResponse[]
}
