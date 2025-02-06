import { Features } from './features.d.ts'

export let FeaturePatterns: {
  /**
   * Users
   */
  [Features.Checkin]: InstanceType<typeof URLPattern>

  [Features.User]: InstanceType<typeof URLPattern>

  [Features.Users]: InstanceType<typeof URLPattern>

  /**
   * Games
   */
  [Features.Theme]: InstanceType<typeof URLPattern>

  [Features.Themes]: InstanceType<typeof URLPattern>

  [Features.Game]: InstanceType<typeof URLPattern>

  [Features.Games]: InstanceType<typeof URLPattern>

  [Features.Registration]: InstanceType<typeof URLPattern>

  [Features.Registrations]: InstanceType<typeof URLPattern>

  /**
   * Locations
   */
  [Features.City]: InstanceType<typeof URLPattern>

  [Features.Cities]: InstanceType<typeof URLPattern>

  [Features.Location]: InstanceType<typeof URLPattern>

  [Features.Locations]: InstanceType<typeof URLPattern>
}
