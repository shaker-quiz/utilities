import { URLOptions } from '@yurkimus/url'

export function getFeatureFetch<
  F extends Feature,
  S extends Service,
  N extends Network,
  K extends Kind,
>(
  configuration: F | {
    feature: F
    kind?: K
    service?: S
    network?: N
  },
): (input: URLOptions, init: RequestInit) => Promise<any>
