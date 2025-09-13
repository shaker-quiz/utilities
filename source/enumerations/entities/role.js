export var Role = /** @type {const} */ ({
  'admin': 'admin',
  'organizer': 'organizer',
  'captain': 'captain',
  'player': 'player',
  'default': 'default',
})

export var Roles = Object.values(Role)

export var RoleWeight = {
  [Role.admin]: 0,
  [Role.organizer]: 1,
  [Role.captain]: 2,
  [Role.player]: 3,
  [Role.default]: 2,
}

export var RoleTitle = {
  [Role.admin]: 'Админ',
  [Role.organizer]: 'Организатор',
  [Role.captain]: 'Капитан',
  [Role.player]: 'Игрок',
  [Role.default]: 'Пользователь',
}

export var RoleColor = {
  [Role.admin]: 'danger',
  [Role.organizer]: 'warning',
  [Role.captain]: 'primary',
  [Role.player]: 'secondary',
  [Role.default]: 'default',
}

export var RoleTextColor = {
  [Role.admin]: 'text-danger',
  [Role.organizer]: 'text-warning',
  [Role.captain]: 'text-primary',
  [Role.player]: 'text-secondary',
  [Role.default]: 'text-default',
}

/** @type {Record<Role, Icon>} */
export var RoleIcon = {
  [Role.admin]: 'hero/outline/user',
  [Role.organizer]: 'hero/outline/user',
  [Role.captain]: 'hero/outline/user',
  [Role.player]: 'hero/outline/user',
  [Role.default]: 'hero/outline/user',
}
