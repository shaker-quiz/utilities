import { Mode } from '../mode.js'

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

/** @returns {typeof Role[keyof typeof Role]} */
var infer = value => {
  if (value in Role)
    return Role[value]
  else
    throw TypeError(`Cannot infer role for value '${value}'.`)
}

export var inferRole = value => {
  switch (typeof value) {
    case 'string':
      return infer(value)

    case 'object':
      return infer(value?.role?.name)

    default:
      return infer(undefined)
  }
}

export var inferModedRole = value => {
  var mode = inferMode(value?.role)

  switch (mode) {
    case Mode['Known']:
      return inferRole(value)

    default:
      return mode
  }
}
