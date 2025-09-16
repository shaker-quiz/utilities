export var Role = /** @type {const} */ ({
  'admin': 'admin',
  'organizer': 'organizer',
  'captain': 'captain',
  'player': 'player',
  'user': 'user',
  'manager': 'manager',
  'default': 'default',
})

export var Roles = Object.values(Role)

export var RoleWeight = {
  [Role.admin]: 0,
  [Role.organizer]: 1,
  [Role.captain]: 2,
  [Role.player]: 3,
  [Role.user]: 4,
  [Role.manager]: 5,
  [Role.default]: 6,
}

export var RoleTitle = {
  [Role.admin]: 'Админ',
  [Role.organizer]: 'Организатор',
  [Role.captain]: 'Капитан',
  [Role.player]: 'Игрок',
  [Role.user]: 'Пользователь',
  [Role.manager]: 'Менеджер',
  [Role.default]: 'Неавторизован',
}

export var RoleColor = {
  [Role.admin]: 'danger',
  [Role.organizer]: 'warning',
  [Role.captain]: 'primary',
  [Role.player]: 'secondary',
  [Role.user]: 'default',
  [Role.manager]: 'default',
  [Role.default]: 'default',
}

export var RoleTextColor = {
  [Role.admin]: 'text-danger',
  [Role.organizer]: 'text-warning',
  [Role.captain]: 'text-primary',
  [Role.player]: 'text-secondary',
  [Role.user]: 'text-default',
  [Role.manager]: 'text-default',
  [Role.default]: 'text-default',
}

/** @type {Record<Role, Icon>} */
export var RoleIcon = {
  [Role.admin]: 'hero/outline/user',
  [Role.organizer]: 'hero/outline/user',
  [Role.captain]: 'hero/outline/user',
  [Role.player]: 'hero/outline/user',
  [Role.user]: 'hero/outline/user',
  [Role.manager]: 'hero/outline/user',
  [Role.default]: 'hero/outline/user',
}
