import { driver } from 'neo4j'

import { Environment } from './environment.js'
import { url } from './url.js'

/**
 * @type {import("neo4j").AuthToken}
 */
let authorization = {
  scheme: 'basic',
  principal: Deno.env.get(Environment.CypherUsername),
  credentials: Deno.env.get(Environment.CypherPassword),
}

export let cypher = driver(
  url({
    base: `bolt://${Deno.env.get(Environment.CypherContainer)}/`,
    port: Deno.env.get(Environment.CypherBoltPort),
  }).href,
  authorization,
)
