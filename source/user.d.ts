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

type UserAdminResult = unknown

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
  time_updated: Nullable<string>

  /**
   * @description "boolean"
   */
  is_active: Nullable<boolean>

  /**
   * @description "boolean"
   */
  is_superuser: Nullable<boolean>

  /**
   * @description "boolean"
   */
  is_verified: Nullable<boolean>

  /**
   * @description "uuid"
   */
  image_id: Nullable<string>

  /**
   * @description "character varying"
   */
  mailru_link: Nullable<string>

  /**
   * @description "character varying"
   */
  telegram_id: Nullable<string>

  /**
   * @description "character varying"
   */
  hashed_password: Nullable<string>

  /**
   * @description "character varying"
   */
  telegram_data: Nullable<string>

  /**
   * @description "character varying"
   */
  third_name: Nullable<string>

  /**
   * @description "character varying"
   */
  phone: Nullable<string>

  /**
   * @description "character varying"
   */
  first_name: Nullable<string>

  /**
   * @description "character varying"
   */
  last_name: Nullable<string>

  /**
   * @description "character varying"
   */
  email: Nullable<string>

  /**
   * @description "character varying"
   */
  gmail_link: Nullable<string>
}
