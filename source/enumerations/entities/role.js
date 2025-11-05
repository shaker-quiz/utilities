export var Role = /** @type {const} */ ({
  'admin': 'admin',
  'organizer': 'organizer',
  'captain': 'captain',
  'player': 'player',
  'user': 'user',
  'manager': 'manager',
  'default': 'default',
})

export var Roles = [
  Role['admin'],
  Role['organizer'],
  Role['captain'],
  Role['player'],
  Role['user'],
  Role['manager'],
  Role['default'],
]

export var RoleNumberGenderTitle = {
  singular: {
    masculine: {
      [Role['admin']]: 'Администратор',
      [Role['organizer']]: 'Организатор',
      [Role['captain']]: 'Капитан',
      [Role['player']]: 'Игрок',
      [Role['user']]: 'Пользователь',
      [Role['manager']]: 'Менеджер',
      [Role['default']]: 'Гость',
    },

    feminine: {
      [Role['admin']]: 'Администраторка',
      [Role['organizer']]: 'Организаторка',
      [Role['captain']]: 'Капитанша',
      [Role['player']]: 'Игрок',
      [Role['user']]: 'Пользовательница',
      [Role['manager']]: 'Менеджерка',
      [Role['default']]: 'Гостья',
    },

    neuter: {
      [Role['admin']]: 'Администратор',
      [Role['organizer']]: 'Организатор',
      [Role['captain']]: 'Капитан',
      [Role['player']]: 'Игрок',
      [Role['user']]: 'Пользователm',
      [Role['manager']]: 'Менеджер',
      [Role['default']]: 'Гость',
    },
  },

  plural: {
    masculine: {
      [Role['admin']]: 'Администраторы',
      [Role['organizer']]: 'Организаторы',
      [Role['captain']]: 'Капитаны',
      [Role['player']]: 'Игроки',
      [Role['user']]: 'Пользователи',
      [Role['manager']]: 'Менеджеры',
      [Role['default']]: 'Гости',
    },

    feminine: {
      [Role['admin']]: 'Администраторки',
      [Role['organizer']]: 'Организаторки',
      [Role['captain']]: 'Капитанши',
      [Role['player']]: 'Игроки',
      [Role['user']]: 'Пользовательницы',
      [Role['manager']]: 'Менеджерки',
      [Role['default']]: 'Гости',
    },

    indeterminate: {
      [Role['admin']]: 'Администраторы',
      [Role['organizer']]: 'Организаторы',
      [Role['captain']]: 'Капитаны',
      [Role['player']]: 'Игроки',
      [Role['user']]: 'Пользователи',
      [Role['manager']]: 'Менеджеры',
      [Role['default']]: 'Гости',
    },
  },
}

export var RoleIcon = {
  [Role['admin']]: 'hero/outline/user',
  [Role['organizer']]: 'hero/outline/user',
  [Role['captain']]: 'hero/outline/user',
  [Role['player']]: 'hero/outline/user',
  [Role['user']]: 'hero/outline/user',
  [Role['manager']]: 'hero/outline/user',
  [Role['default']]: 'hero/outline/user',
}

/**
 * @returns {keyof typeof Role}
 */
export var inferRole = value => {
  switch (typeof value) {
    case 'string':
      return value in Role ? Role[value] : Role['default']

    case 'object':
      return inferRole(value?.role?.name)

    default:
      return Role['default']
  }
}
