export let Roles: {
  Admin: 'admin'
  Organizer: 'organizer'
  Default: 'default'
}

type Roles = typeof Roles

type RolesUnion = Roles[keyof Roles]
