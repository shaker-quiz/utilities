export var Role = /** @type {const} */ ({
  'admin': 'admin',
  'organizer': 'organizer',
  'default': 'default',
})

export var RoleWeight = {
  [Role.admin]: 0,
  [Role.organizer]: 1,
  [Role.default]: 2,
}

export var Roles = Object.values(Role)
