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
 * @param {keyof typeof RoleMode} value
 */
var getter = value =>
  value in RoleMode
    ? value
    : RoleMode['unknown']

export var getRoleMode = value => {
  if (value === null)
    return getter(undefined)

  switch (typeof value) {
    case 'string':
      return getter(value)

    case 'object':
      return getter(value?.mode)

    default:
      return getter(undefined)
  }
}
