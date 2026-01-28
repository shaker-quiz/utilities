import { Mode } from './mode.js'
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
  [Service['Procedures']]: Runtime['Bun'],
  [Service['Updates']]: Runtime['Bun'],
  [Service['Hub']]: Runtime['Next'],
  [Service['Landing']]: Runtime['Next'],
  [Service['Vkma']]: Runtime['Vite'],
  [Service['Telegram']]: Runtime['Bun'],
  [Service['Chatapp']]: Runtime['Bun'],
  [Service['Bitrix']]: Runtime['Bun'],
  [Service['Vercel']]: Runtime['Node'],
  [Service['Minio']]: Mode['Unknown'],
})
