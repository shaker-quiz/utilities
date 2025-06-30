import { Methods } from '../enumerations/core/methods.js'
import { Scopes } from '../enumerations/core/scopes.js'

/**
 * @param {Response} response
 */
export var parseResponse = response => {
  let mime = response.headers.get('Content-Type') ?? ''

  if (mime.includes('application/json'))
    return Promise.all([
      response,
      response.json(),
    ])
  else if (mime.includes('multipart/form-data'))
    return Promise.all([
      response,
      response.formData(),
    ])
  else
    return Promise.all([
      response,
      response.text(),
    ])
}

/**
 * @param {Scope} scope
 * @param {[Response, any]} param1
 */
export var resolveResponse = (scope, [response, value]) => {
  let [method, feature, kind] = scope.split('/')

  if (response.ok) {
    switch (response.status) {
      case 204:
        switch (kind) {
          case 'Unit':
            return null

          case 'Set':
            return []
        }

      default:
        return value
    }
  } else
    throw value
}

/**
 * @template R
 *
 * @param {Scope} scope
 * @param {RequestInfo} input
 * @param {RequestInit} init
 *
 * @returns {Promise<R>}
 */
export var scopeRequest = (scope, input, init) => {
  if (!Scopes.includes(scope))
    throw TypeError(
      `Parameter 'scope' must be listed in 'Scopes'.`,
    )

  let [method, feature, kind] = scope.split('/')

  if (!('method' in init))
    init.method = method

  if (!Methods.includes(init.method))
    throw TypeError(
      `[featureFetch] Method '${init.method}' is not listed in 'Methods'.`,
    )

  return globalThis
    .fetch(input, init)
    .then(parseResponse)
    .then(resolveResponse.bind(null, scope))
}
