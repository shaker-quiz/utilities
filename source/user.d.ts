type CheckinAdminResult = {
  id: UserRow['id']
  first_name: UserRow['first_name']
  last_name: UserRow['last_name']
  third_name: UserRow['third_name']
  phone: UserRow['phone']
  email: UserRow['email']
  image_id: ImageMediaRow['id']
  role_id: RoleRow['id']
  role_name: RoleRow['name']
}

type CheckinDefaultResult = {
  id: '00000000-0000-0000-0000-000000000000'
  role_id: '00000000-0000-0000-0000-000000000000'
  role_name: 'default'
}

type CheckinOrganizerResult = {
  id: UserRow['id']
  first_name: UserRow['first_name']
  last_name: UserRow['last_name']
  third_name: UserRow['third_name']
  phone: UserRow['phone']
  email: UserRow['email']
  image_id: ImageMediaRow['id']
  role_id: RoleRow['id']
  role_name: RoleRow['name']
}

type UserAdminResult = {
  id: UserRow['id']
  email: UserRow['email']
  phone: UserRow['phone']
  first_name: UserRow['first_name']
  last_name: UserRow['last_name']
  is_active: UserRow['is_active']
  gmail_link: UserRow['gmail_link']
  mailru_link: UserRow['mailru_link']
  role_id: RoleRow['id']
  role_name: RoleRow['name']
  cities: {
    id: CityRow['id']
    name: CityRow['name']
  }[]
}

type UserDefaultResult = unknown

type UserOrganizerResult = unknown

type UserRow = {
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
