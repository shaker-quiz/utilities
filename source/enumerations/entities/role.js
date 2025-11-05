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

export var RoleTitle = {
  [Role['admin']]: 'Админ',
  [Role['organizer']]: 'Организатор',
  [Role['captain']]: 'Капитан',
  [Role['player']]: 'Игрок',
  [Role['user']]: 'Пользователь',
  [Role['manager']]: 'Менеджер',
  [Role['default']]: 'Неавторизован',
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
