export var UserRoleMode = /** @type {const} */ ({
  'Any': 'Any',
  'Known': 'Known',
  'Unknown': 'Unknown',
})

export var UserRoleModes = [
  UserRoleMode['Any'],
  UserRoleMode['Known'],
  UserRoleMode['Unknown'],
]

export var UserRoleModeTitle = {
  [UserRoleMode['Any']]: 'Любая',
  [UserRoleMode['Known']]: 'Назначено',
  [UserRoleMode['Unknown']]: 'Неизвестно',
}

/**
 * @returns {keyof typeof UserRoleMode}
 */
export var inferUserRoleMode = value => {
  switch (typeof value) {
    case 'string':
      return value in UserRoleMode ? value : UserRoleMode['Unknown']

    case 'object':
      return inferUserRoleMode(value?.mode)

    default:
      return UserRoleMode['Unknown']
  }
}
