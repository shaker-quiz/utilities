export var Role = /** @type {const} */ ({
  'admin': 'admin',
  'organizer': 'organizer',
  'captain': 'captain',
  'player': 'player',
  'user': 'user',
  'manager': 'manager',
  'default': 'default',
  'unknown': 'unknown',
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
  [Role.unknown]: 7,
}

export var RoleTitle = {
  [Role.admin]: 'Админ',
  [Role.organizer]: 'Организатор',
  [Role.captain]: 'Капитан',
  [Role.player]: 'Игрок',
  [Role.user]: 'Пользователь',
  [Role.manager]: 'Менеджер',
  [Role.default]: 'Неавторизован',
  [Role.unknown]: 'Неизвестно',
}

export var RoleActionTitle = {
  [Role.admin]: 'Сделать админом',
  [Role.organizer]: 'Сделать организатором',
  [Role.captain]: 'Сделать капитаном',
  [Role.player]: 'Сделать игрокок',
  [Role.user]: 'Сделать пользователем',
  [Role.manager]: 'Сделать менеджером',
  [Role.default]: 'Сделать неавторизованым',
  [Role.unknown]: 'Неизвестно',
}

export var RoleActionDescription = {
  [Role.admin]: 'Назначить роль: Админ',
  [Role.organizer]: 'Назначить роль: Организатор',
  [Role.captain]: 'Назначить роль: Капитан',
  [Role.player]: 'Назначить роль: Игрок',
  [Role.user]: 'Назначить роль: Пользователь',
  [Role.manager]: 'Назначить роль: Менеджер',
  [Role.default]: 'Назначить роль: Неавторизован',
  [Role.unknown]: 'Неизвестно',
}

export var RoleColor = {
  [Role.admin]: 'danger',
  [Role.organizer]: 'warning',
  [Role.captain]: 'primary',
  [Role.player]: 'secondary',
  [Role.user]: 'default',
  [Role.manager]: 'default',
  [Role.default]: 'default',
  [Role.unknown]: 'danger',
}

export var RoleTextColor = {
  [Role.admin]: 'text-danger',
  [Role.organizer]: 'text-warning',
  [Role.captain]: 'text-primary',
  [Role.player]: 'text-secondary',
  [Role.user]: 'text-default',
  [Role.manager]: 'text-default',
  [Role.default]: 'text-default',
  [Role.unknown]: 'text-danger',
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
  [Role.unknown]: 'hero/outline/no-symbol',
}

/**
 * @param {*} value
 */
export var getRoleMode = value => {
  switch (typeof value) {
    case 'string':
      return value

    case 'object':
      if (typeof value?.mode === 'string')
        return value.mode
      else
        return Role.unknown

    default:
      return Role.unknown
  }
}
