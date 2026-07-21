import { Mode } from './mode.js'
import { Runtime } from './runtimes.js'
import { Service } from './services.js'

export let ServiceRuntime = {
  [Service.Users]: Runtime.Bun,
  [Service.Roles]: Runtime.Bun,
  [Service.Checkin]: Runtime.Bun,
  [Service.Locations]: Runtime.Bun,
  [Service.Cities]: Runtime.Bun,
  [Service.Venues]: Runtime.Bun,
  [Service.Themes]: Runtime.Bun,
  [Service.Games]: Runtime.Bun,
  [Service.Registrations]: Runtime.Bun,
  [Service.Procedures]: Runtime.Bun,
  [Service.Updates]: Runtime.Bun,
  [Service.Hub]: Runtime.Next,
  [Service.Landing]: Runtime.Next,
  [Service.Vkma]: Runtime.Vite,
  [Service.Telegram]: Runtime.Bun,
  [Service.Chatapp]: Runtime.Bun,
  [Service.Bitrix]: Runtime.Bun,
  [Service.Vk]: Runtime.Bun,
  [Service.Max]: Runtime.Bun,
  [Service.VkOrganizer]: Runtime.Bun,
  [Service.Reposter]: Runtime.Node,
  [Service.Raffle]: Runtime.Node,
  [Service.Minio]: Mode['Unknown'],
}
