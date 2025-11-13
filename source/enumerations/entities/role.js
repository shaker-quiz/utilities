export var Role = /** @type {const} */ ({
  'admin': 'admin',
  'organizer': 'organizer',
  'captain': 'captain',
  'player': 'player',
  'user': 'user',
  'manager': 'manager',
})

export var Roles = [
  Role['admin'],
  Role['organizer'],
  Role['captain'],
  Role['player'],
  Role['user'],
  Role['manager'],
]

export var RoleTitle = {
  [Role['admin']]: 'Администратор',
  [Role['organizer']]: 'Организатор',
  [Role['captain']]: 'Капитан',
  [Role['player']]: 'Игрок',
  [Role['user']]: 'Пользователь',
  [Role['manager']]: 'Менеджер',
}

export var RoleIcon = {
  [Role['admin']]: 'hero/outline/user',
  [Role['organizer']]: 'hero/outline/user',
  [Role['captain']]: 'hero/outline/user',
  [Role['player']]: 'hero/outline/user',
  [Role['user']]: 'hero/outline/user',
  [Role['manager']]: 'hero/outline/user',
}

/** @returns {keyof typeof Role | 'Unknown'} */
export var inferRole = value =>
  Role[value?.role?.name ?? value]
    ?? 'Unknown'
