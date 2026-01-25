import { Runtime } from './runtimes.js'
import { Service } from './services.js'

export const ServiceRuntime = Object.freeze({
  [Service['Users']]: Runtime['Bun'],
  [Service['Roles']]: Runtime['Bun'],
  [Service['Checkin']]: Runtime['Bun'],
  [Service['Locations']]: Runtime['Bun'],
  [Service['Cities']]: Runtime['Bun'],
  [Service['Venues']]: Runtime['Bun'],
  [Service['Themes']]: Runtime['Bun'],
  [Service['Games']]: Runtime['Bun'],
  [Service['Registrations']]: Runtime['Bun'],
  [Service['Files']]: Runtime['Bun'],
  [Service['Procedures']]: Runtime['Bun'],
  [Service['Integrations']]: Runtime['Bun'],
  [Service['Updates']]: Runtime['Bun'],
  [Service['Hub']]: Runtime['Next'],
  [Service['Landing']]: Runtime['Next'],
  [Service['Telegram']]: Runtime['Node'],
  [Service['Vkma']]: Runtime['Vite'],
})
