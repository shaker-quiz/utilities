import { inferMethod } from '../enumerations/method.js'

import { hydrateRoutePathname } from './hydrate-route-pathname.js'

export const tag = Object.freeze((m, r, p) => {
  var method = inferMethod(m)

  if (method === 'Unknown')
    throw TypeError(`Could not infer method of: '${m}'.`)

  return method + '/' + hydrateRoutePathname(r, p)
})

export const tagexp = Object.freeze((m, r, p) => new RegExp(`^${tag(m, r, p)}$`))
