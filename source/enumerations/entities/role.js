export const Role = Object.freeze({
  'admin': 'admin',
  'organizer': 'organizer',
  'captain': 'captain',
  'player': 'player',
  'user': 'user',
  'manager': 'manager',
})

export const Roles = Object.freeze([
  Role['admin'],
  Role['organizer'],
  Role['captain'],
  Role['player'],
  Role['user'],
  Role['manager'],
])

export const RoleTitle = Object.freeze({
  [Role['admin']]: 'Администратор',
  [Role['organizer']]: 'Организатор',
  [Role['captain']]: 'Капитан',
  [Role['player']]: 'Игрок',
  [Role['user']]: 'Пользователь',
  [Role['manager']]: 'Менеджер',
})

export const RoleIcon = Object.freeze({
  [Role['admin']]: 'hero/outline/user',
  [Role['organizer']]: 'hero/outline/user',
  [Role['captain']]: 'hero/outline/user',
  [Role['player']]: 'hero/outline/user',
  [Role['user']]: 'hero/outline/user',
  [Role['manager']]: 'hero/outline/user',
})

export const inferRole = Object.freeze(
  /** @returns {keyof typeof Role | 'Unknown'} */
  x => Role[x?.role?.name ?? x] ?? 'Unknown',
)
