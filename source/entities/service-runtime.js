import { Runtime } from './runtime.js'
import { Service } from './service.js'

export const ServiceRuntime = Object.freeze({
  [Service['Users']]: Runtime['Deno'],
  [Service['Roles']]: Runtime['Deno'],
  [Service['Checkin']]: Runtime['Deno'],
  [Service['Locations']]: Runtime['Deno'],
  [Service['Cities']]: Runtime['Deno'],
  [Service['Venues']]: Runtime['Deno'],
  [Service['Themes']]: Runtime['Deno'],
  [Service['Games']]: Runtime['Deno'],
  [Service['Registrations']]: Runtime['Deno'],
  [Service['Files']]: Runtime['Bun'],
  [Service['Procedures']]: Runtime['Bun'],
  [Service['Integrations']]: Runtime['Bun'],
  [Service['Updates']]: Runtime['Bun'],
  [Service['Hub']]: Runtime['Node'],
  [Service['Landing']]: Runtime['Node'],
  [Service['Vkma']]: Runtime['Vite'],
})
