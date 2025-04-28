export var CitySchema = /** @type {const} */ ({
  address: {
    type: 'String',
    minLength: 1,
    maxLength: 255,
  },

  alias: {
    type: 'String',
    minLength: 1,
    maxLength: 255,
  },

  chatapp_category: {
    type: 'String',
  },

  chatapp_legacy: {
    type: 'Boolean',
  },

  chatapp_line: {
    type: 'String',
    minLength: 1,
    maxLength: 255,
  },

  chatapp_tag: {
    type: 'String',
    minLength: 1,
    maxLength: 255,
  },

  chatapp_user: {
    type: 'String',
    minLength: 1,
    maxLength: 255,
  },

  country: {
    type: 'String',
    minLength: 2,
    maxLength: 2,
  },

  currency: {
    type: 'String',
    minLength: 3,
    maxLength: 3,
  },

  custom_html: {
    type: 'String',
  },

  custom_script: {
    type: 'String',
  },

  description: {
    type: 'String',
    minLength: 1,
    maxLength: 255,
  },

  email: {
    type: 'String',
    minLength: 1,
    maxLength: 255,
    format: 'email',
  },

  game_time: {
    type: 'String',
    format: 'time',
  },

  id: {
    type: 'String',
    format: 'uuid',
  },

  inst_comment: {
    type: 'String',
    deprecated: true,
  },

  inst_link: {
    type: 'String',
    deprecated: true,
  },

  inst_login: {
    type: 'String',
    deprecated: true,
  },

  inst_password: {
    type: 'String',
    deprecated: true,
  },

  is_default: {
    type: 'Boolean',
  },

  is_franchise: {
    type: 'Boolean',
  },

  max_members_count: {
    type: 'Number',
    format: 'integer',
  },

  meta_description: {
    type: 'String',
    minLength: 1,
    maxLength: 255,
  },

  meta_title: {
    type: 'String',
    minLength: 1,
    maxLength: 255,
  },

  min_members_count: {
    type: 'Number',
    format: 'integer',
  },

  name: {
    type: 'String',
    minLength: 1,
    maxLength: 255,
  },

  phone: {
    type: 'String',
    minLength: 1,
    maxLength: 255,
  },

  price: {
    type: 'Number',
    format: 'float',
  },

  region: {
    type: 'String',
    minLength: 1,
    maxLength: 255,
  },

  telegram_chat_id: {
    type: 'String',
    minLength: 1,
    maxLength: 255,
  },

  tg_comment: {
    type: 'String',
    minLength: 1,
    maxLength: 255,
  },

  tg_link: {
    type: 'String',
    minLength: 1,
    maxLength: 255,
  },

  tg_login: {
    type: 'String',
    deprecated: true,
    minLength: 1,
    maxLength: 255,
  },

  tg_password: {
    type: 'String',
    deprecated: true,
    minLength: 1,
    maxLength: 255,
  },

  time_created: {
    type: 'String',
    format: 'Date',
  },

  time_updated: {
    type: 'String',
    format: 'Date',
  },

  timezone: {
    type: 'String',
    format: 'integer',
  },

  title: {
    type: 'String',
    minLength: 1,
    maxLength: 255,
  },

  vk_comment: {
    type: 'String',
  },

  vk_group_id: {
    type: 'String',
  },

  vk_link: {
    type: 'String',
  },

  yandex_metrica: {
    type: 'String',
  },
})
