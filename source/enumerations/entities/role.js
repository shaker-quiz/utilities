export var Role = /** @type {const} */ ({
  'admin': 'admin',
  'organizer': 'organizer',
  'captain': 'captain',
  'player': 'player',
  'user': 'user',
  'manager': 'manager',
  'Default': 'Default',
})

export var Roles = [
  Role['admin'],
  Role['organizer'],
  Role['captain'],
  Role['player'],
  Role['user'],
  Role['manager'],
  Role['Default'],
]

export var RoleTitle = {
  [Role['admin']]: 'Администратор',
  [Role['organizer']]: 'Организатор',
  [Role['captain']]: 'Капитан',
  [Role['player']]: 'Игрок',
  [Role['user']]: 'Пользователь',
  [Role['manager']]: 'Менеджер',
  [Role['Default']]: 'Без роли',
}

export var RoleIcon = {
  [Role['admin']]: 'hero/outline/user',
  [Role['organizer']]: 'hero/outline/user',
  [Role['captain']]: 'hero/outline/user',
  [Role['player']]: 'hero/outline/user',
  [Role['user']]: 'hero/outline/user',
  [Role['manager']]: 'hero/outline/user',
  [Role['Default']]: 'hero/outline/no-symbol',
}

/** @returns {typeof Role[keyof typeof Role]} */
var infer = value => value in Role ? Role[value] : Role['Default']

export var inferRole = value => {
  switch (typeof value) {
    case 'string':
      return infer(value)

    case 'object':
      return infer(value?.role?.name)

    default:
      return Role['Default']
  }
}
