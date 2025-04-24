export var CityColumns = /** @type {const} */ ({
  address: 'address',
  alias: 'alias',
  chatapp_category: 'chatapp_category',
  chatapp_legacy: 'chatapp_legacy',
  chatapp_line: 'chatapp_line',
  chatapp_tag: 'chatapp_tag',
  chatapp_user: 'chatapp_user',
  country: 'country',
  currency: 'currency',
  custom_html: 'custom_html',
  custom_script: 'custom_script',
  description: 'description',
  email: 'email',
  game_time: 'game_time',
  id: 'id',
  inst_comment: 'inst_comment',
  inst_link: 'inst_link',
  inst_login: 'inst_login',
  inst_password: 'inst_password',
  is_default: 'is_default',
  is_franchise: 'is_franchise',
  max_members_count: 'max_members_count',
  meta_description: 'meta_description',
  meta_title: 'meta_title',
  min_members_count: 'min_members_count',
  name: 'name',
  phone: 'phone',
  price: 'price',
  region: 'region',
  telegram_chat_id: 'telegram_chat_id',
  tg_comment: 'tg_comment',
  tg_link: 'tg_link',
  tg_login: 'tg_login',
  tg_password: 'tg_password',
  time_created: 'time_created',
  time_updated: 'time_updated',
  timezone: 'timezone',
  title: 'title',
  vk_comment: 'vk_comment',
  vk_group_id: 'vk_group_id',
  vk_link: 'vk_link',
  yandex_metrica: 'yandex_metrica',
})

export var CityColumnDescriptors = /** @type {const} */ ({
  [CityColumns.address]: {
    type: 'String',
    nullable: true,
    minLength: 1,
    maxLength: 255,
  },

  [CityColumns.alias]: {
    type: 'String',
    minLength: 1,
    maxLength: 255,
  },

  [CityColumns.chatapp_category]: {
    type: 'String',
    nullable: true,
  },

  [CityColumns.chatapp_legacy]: {
    type: 'Boolean',
    nullable: true,
  },

  [CityColumns.chatapp_line]: {
    type: 'String',
    nullable: true,
    minLength: 1,
    maxLength: 255,
  },

  [CityColumns.chatapp_tag]: {
    type: 'String',
    nullable: true,
    minLength: 1,
    maxLength: 255,
  },

  [CityColumns.chatapp_user]: {
    type: 'String',
    nullable: true,
    minLength: 1,
    maxLength: 255,
  },

  [CityColumns.country]: {
    type: 'String',
    nullable: true,
    minLength: 2,
    maxLength: 2,
  },

  [CityColumns.currency]: {
    type: 'String',
    minLength: 3,
    maxLength: 3,
  },

  [CityColumns.custom_html]: {
    type: 'String',
    nullable: true,
  },

  [CityColumns.custom_script]: {
    type: 'String',
    nullable: true,
  },

  [CityColumns.description]: {
    type: 'String',
    nullable: true,
    minLength: 1,
    maxLength: 255,
  },

  [CityColumns.email]: {
    type: 'String',
    nullable: true,
    minLength: 1,
    maxLength: 255,
    format: 'email',
  },

  [CityColumns.game_time]: {
    type: 'String',
    format: 'time',
  },

  [CityColumns.id]: {
    type: 'String',
    nullable: true,
    format: 'uuid',
  },

  [CityColumns.inst_comment]: {
    type: 'String',
    nullable: true,
    deprecated: true,
  },

  [CityColumns.inst_link]: {
    type: 'String',
    nullable: true,
    deprecated: true,
  },

  [CityColumns.inst_login]: {
    type: 'String',
    nullable: true,
    deprecated: true,
  },

  [CityColumns.inst_password]: {
    type: 'String',
    nullable: true,
    deprecated: true,
  },

  [CityColumns.is_default]: {
    type: 'Boolean',
    nullable: true,
  },

  [CityColumns.is_franchise]: {
    type: 'Boolean',
  },

  [CityColumns.max_members_count]: {
    type: 'Number',
    nullable: true,
    format: 'integer',
  },

  [CityColumns.meta_description]: {
    type: 'String',
    nullable: true,
    minLength: 1,
    maxLength: 255,
  },

  [CityColumns.meta_title]: {
    type: 'String',
    nullable: true,
    minLength: 1,
    maxLength: 255,
  },

  [CityColumns.min_members_count]: {
    type: 'Number',
    nullable: true,
    format: 'integer',
  },

  [CityColumns.name]: {
    type: 'String',
    minLength: 1,
    maxLength: 255,
  },

  [CityColumns.phone]: {
    type: 'String',
    nullable: true,
    minLength: 1,
    maxLength: 255,
  },

  [CityColumns.price]: {
    type: 'String',
    nullable: true,
    format: 'float',
  },

  [CityColumns.region]: {
    type: 'String',
    nullable: true,
    minLength: 1,
    maxLength: 255,
  },

  [CityColumns.telegram_chat_id]: {
    type: 'String',
    nullable: true,
    minLength: 1,
    maxLength: 255,
  },

  [CityColumns.tg_comment]: {
    type: 'String',
    nullable: true,
    minLength: 1,
    maxLength: 255,
  },

  [CityColumns.tg_link]: {
    type: 'String',
    nullable: true,
    minLength: 1,
    maxLength: 255,
  },

  [CityColumns.tg_login]: {
    type: 'String',
    nullable: true,
    deprecated: true,
    minLength: 1,
    maxLength: 255,
  },

  [CityColumns.tg_password]: {
    type: 'String',
    nullable: true,
    deprecated: true,
    minLength: 1,
    maxLength: 255,
  },

  [CityColumns.time_created]: {
    type: 'String',
    nullable: true,
    format: 'Date',
  },

  [CityColumns.time_updated]: {
    type: 'String',
    nullable: true,
    format: 'Date',
  },

  [CityColumns.timezone]: {
    type: 'String',
    nullable: true,
    format: 'integer',
  },

  [CityColumns.title]: {
    type: 'String',
    nullable: true,
    minLength: 1,
    maxLength: 255,
  },

  [CityColumns.vk_comment]: {
    type: 'String',
    nullable: true,
  },

  [CityColumns.vk_group_id]: {
    type: 'String',
    nullable: true,
  },

  [CityColumns.vk_link]: {
    type: 'String',
    nullable: true,
  },

  [CityColumns.yandex_metrica]: {
    type: 'String',
    nullable: true,
  },
})
