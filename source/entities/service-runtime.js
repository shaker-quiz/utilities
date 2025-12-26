import { Mode } from './mode.js'
import { Runtime } from './runtime.js'

export const ServiceRuntime = Object.freeze({
  'Users': Runtime['Deno'],
  'Roles': Runtime['Deno'],
  'Checkin': Runtime['Deno'],
  'Locations': Runtime['Deno'],
  'Cities': Runtime['Deno'],
  'Venues': Runtime['Deno'],
  'Themes': Runtime['Deno'],
  'Games': Runtime['Deno'],
  'Registrations': Runtime['Deno'],
  'Files': Runtime['Bun'],
  'Procedures': Runtime['Bun'],
  'Integrations': Runtime['Bun'],
  'Updates': Runtime['Bun'],
  'Hub': Runtime['Node'],
  'Landing': Runtime['Node'],
  'Vkma': Runtime['Vite'],
  'Minio': Mode['Unknown'],
})
