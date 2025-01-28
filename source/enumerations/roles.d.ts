export let Roles: {
  Admin: 'admin'
  Organizer: 'organizer'
  Default: 'default'
}

export type Roles = typeof Roles

export type RolesUnion = Roles[keyof Roles]
