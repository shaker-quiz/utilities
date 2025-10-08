export var RoleMode = /** @type {const} */ ({
  'known': 'known',
  'unknown': 'unknown',
})

export var RoleModes = Object.values(RoleMode)

export var RoleModeTitle = {
  [RoleMode.known]: 'Любая',
  [RoleMode.unknown]: 'Не назначено',
}

export var RoleModeWeight = {
  [RoleMode.known]: 0,
  [RoleMode.unknown]: 1,
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
