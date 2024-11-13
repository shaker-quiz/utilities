export let Environment = /** @type {const} */ ({
  /* --- (Jwt) --- */
  JwtAlgorithm: 'JwtAlgorithm',
  JwtHash: 'JwtHash',
  JwtSecret: 'JwtSecret',

  /* --- (Postgres) --- */
  PostgresContainer: 'PostgresContainer',
  PostgresPort: 'PostgresPort',
  PostgresDatabase: 'PostgresDatabase',
  PostgresUsername: 'PostgresUsername',
  PostgresPassword: 'PostgresPassword',

  /* --- (Cypher) --- */
  CypherContainer: 'CypherContainer',
  CypherWebsecurePort: 'CypherWebsecurePort',
  CypherBoltPort: 'CypherBoltPort',
  CypherUsername: 'CypherUsername',
  CypherPassword: 'CypherPassword',
  CypherHostname: 'CypherHostname',

  /* --- (Checkin) --- */
  CheckinContainer: 'CheckinContainer',
  CheckinPort: 'CheckinPort',
  CheckinHostname: 'CheckinHostname',

  /* --- (Games) --- */
  GamesContainer: 'GamesContainer',
  GamesPort: 'GamesPort',
  GamesHostname: 'GamesHostname',

  /* --- (Cities) --- */
  CitiesContainer: 'CitiesContainer',
  CitiesPort: 'CitiesPort',
  CitiesHostname: 'CitiesHostname',

  /* --- (Contents) --- */
  ContentsContainer: 'ContentsContainer',
  ContentsPort: 'ContentsPort',
  ContentsHostname: 'ContentsHostname',

  /* --- (Themes) --- */
  ThemesContainer: 'ThemesContainer',
  ThemesPort: 'ThemesPort',
  ThemesHostname: 'ThemesHostname',

  /* --- (Users) --- */
  UsersContainer: 'UsersContainer',
  UsersPort: 'UsersPort',
  UsersHostname: 'UsersHostname',
})

for (let variable in Environment)
  if (!Deno.env.has(variable))
    throw new TypeError(`Environmental variable '${variable}' must be set.`)
