type ThemeAdminResult = {
  id: ThemeRow['id']
  time_created: ThemeRow['time_created']
  name: ThemeRow['name']
  description: ThemeRow['description']
  short_description: ThemeRow['short_description']
  image_id: ImageMediaRow['id']
  media_title: MediaRow['title']
  media_path: MediaRow['path']
}

type ThemeDefaultResult = unknown

type ThemeOrganizerResult = {
  id: ThemeRow['id']
  time_created: ThemeRow['time_created']
  name: ThemeRow['name']
  description: ThemeRow['description']
  short_description: ThemeRow['short_description']
  image_id: ImageMediaRow['id']
  media_title: MediaRow['title']
  media_path: MediaRow['path']
}

type ThemeRow = {
  /**
   * @description "timestamp with time zone"
   */
  time_updated: string
  /**
   * @description "uuid"
   */
  id: string
  /**
   * @description "timestamp with time zone"
   */
  time_created: string
  /**
   * @description "uuid"
   */
  image_id: string
  /**
   * @description "character varying"
   */
  short_description: string | null
  /**
   * @description "character varying"
   */
  description: string | null
  /**
   * @description "character varying"
   */
  name: string | null
}
