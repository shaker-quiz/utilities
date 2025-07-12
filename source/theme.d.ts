type ThemeTable = {
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

type ThemeResponse = {
  description: ThemeTable['description']
  id: ThemeTable['id']
  image_id: ImageMediaTable['id']
  media_path: MediaTable['path']
  media_title: MediaTable['title']
  name: ThemeTable['name']
  short_description: ThemeTable['short_description']
  time_created: ThemeTable['time_created']
}
