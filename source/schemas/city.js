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
  },

  [CityColumns.chatapp_legacy]: {
    type: 'Boolean',
  },

  [CityColumns.chatapp_line]: {
    type: 'String',
    minLength: 1,
    maxLength: 255,
  },

  [CityColumns.chatapp_tag]: {
    type: 'String',
    minLength: 1,
    maxLength: 255,
  },

  [CityColumns.chatapp_user]: {
    type: 'String',
    minLength: 1,
    maxLength: 255,
  },

  [CityColumns.country]: {
    type: 'String',
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
  },

  [CityColumns.custom_script]: {
    type: 'String',
  },

  [CityColumns.description]: {
    type: 'String',
    minLength: 1,
    maxLength: 255,
  },

  [CityColumns.email]: {
    type: 'String',
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
    format: 'uuid',
  },

  [CityColumns.inst_comment]: {
    type: 'String',
    deprecated: true,
  },

  [CityColumns.inst_link]: {
    type: 'String',
    deprecated: true,
  },

  [CityColumns.inst_login]: {
    type: 'String',
    deprecated: true,
  },

  [CityColumns.inst_password]: {
    type: 'String',
    deprecated: true,
  },

  [CityColumns.is_default]: {
    type: 'Boolean',
  },

  [CityColumns.is_franchise]: {
    type: 'Boolean',
  },

  [CityColumns.max_members_count]: {
    type: 'Number',
    format: 'integer',
  },

  [CityColumns.meta_description]: {
    type: 'String',
    minLength: 1,
    maxLength: 255,
  },

  [CityColumns.meta_title]: {
    type: 'String',
    minLength: 1,
    maxLength: 255,
  },

  [CityColumns.min_members_count]: {
    type: 'Number',
    format: 'integer',
  },

  [CityColumns.name]: {
    type: 'String',
    minLength: 1,
    maxLength: 255,
  },

  [CityColumns.phone]: {
    type: 'String',
    minLength: 1,
    maxLength: 255,
  },

  [CityColumns.price]: {
    type: 'Number',
    format: 'float',
  },

  [CityColumns.region]: {
    type: 'String',
    minLength: 1,
    maxLength: 255,
  },

  [CityColumns.telegram_chat_id]: {
    type: 'String',
    minLength: 1,
    maxLength: 255,
  },

  [CityColumns.tg_comment]: {
    type: 'String',
    minLength: 1,
    maxLength: 255,
  },

  [CityColumns.tg_link]: {
    type: 'String',
    minLength: 1,
    maxLength: 255,
  },

  [CityColumns.tg_login]: {
    type: 'String',
    deprecated: true,
    minLength: 1,
    maxLength: 255,
  },

  [CityColumns.tg_password]: {
    type: 'String',
    deprecated: true,
    minLength: 1,
    maxLength: 255,
  },

  [CityColumns.time_created]: {
    type: 'String',
    format: 'Date',
  },

  [CityColumns.time_updated]: {
    type: 'String',
    format: 'Date',
  },

  [CityColumns.timezone]: {
    type: 'String',
    format: 'integer',
  },

  [CityColumns.title]: {
    type: 'String',
    minLength: 1,
    maxLength: 255,
  },

  [CityColumns.vk_comment]: {
    type: 'String',
  },

  [CityColumns.vk_group_id]: {
    type: 'String',
  },

  [CityColumns.vk_link]: {
    type: 'String',
  },

  [CityColumns.yandex_metrica]: {
    type: 'String',
  },
})
