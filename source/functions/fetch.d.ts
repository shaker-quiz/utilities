import { URLOptions } from '@yurkimus/url'

export function useFeatureFetch<
  F extends Feature,
  S extends Service,
  N extends Network,
  K extends Kind,
>(
  feature: F,
  kind?: K,
  service?: S,
  network?: N,
): (input: URLOptions, init: RequestInit) => Promise<any>
