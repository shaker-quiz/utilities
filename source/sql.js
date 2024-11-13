import postgresjs from 'postgresjs'

import { Environment } from './environment.js'

let Options = {
  [Environment.PostgresContainer]: 'host',
  [Environment.PostgresPort]: 'port',
  [Environment.PostgresDatabase]: 'database',
  [Environment.PostgresUsername]: 'username',
  [Environment.PostgresPassword]: 'password',
}

let options = [
  Environment.PostgresContainer,
  Environment.PostgresPort,
  Environment.PostgresDatabase,
  Environment.PostgresUsername,
  Environment.PostgresPassword,
]
  .reduce(
    (object, key) => (object[Options[key]] = Deno.env.get(key), object),
    {},
  )

export let sql = postgresjs(options)
