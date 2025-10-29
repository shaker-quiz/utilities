export var PasswordMode = /** @type {const} */ ({
  'known': 'known',
  'unknown': 'unknown',
})

export var RoleModes = Object.values(PasswordMode)

export var RoleModeTitle = {
  [PasswordMode.known]: 'Назначен',
  [PasswordMode.unknown]: 'Неизвестно',
}

export var RoleModeWeight = {
  [PasswordMode.known]: 0,
  [PasswordMode.unknown]: 1,
}

/**
 * @param {keyof typeof PasswordMode} value
 */
var getter = value =>
  value in PasswordMode
    ? value
    : PasswordMode['unknown']

export var getPasswordMode = value => {
  switch (typeof value) {
    case 'string':
      return getter(value)

    case 'object':
      return getter(value?.mode)

    default:
      return getter(undefined)
  }
}
