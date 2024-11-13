/**
 * @type {WeakMap<Request | Response, any>}
 */
let cache = new WeakMap()

/**
 * @param {Request | Response} message
 *
 * @returns {Promise<string | FormData | object | any[]>}
 */
export let readBody = message => {
  let content = message
    .headers
    .get('content-type')
    ?.split(';')
    ?.at(0)

  switch (content) {
    case undefined:
      return null

    case 'text/plain':
      return message.text()

    case 'application/json':
      return message.json()

    case 'multipart/form-data':
    case 'application/x-www-form-urlencoded':
      return message.formData()

    default:
      throw new TypeError(
        `No handler for media-type '${content}' has been registered yet.`,
      )
  }
}

/**
 * @template {Request | Response} HttpMessage
 *
 * @param {HttpMessage} message
 *
 * @returns {[message: HttpMessage, clone: HttpMessage]}
 */
export let cloneMessage = message => [message, message.clone()]

/**
 * @template {Request | Response} HttpMessage
 *
 * @param {HttpMessage} message
 *
 * @returns {[HttpMessage, Awaited<ReturnType<typeof readBody>>]}
 */
export let readMessage = message => {
  if (cache.has(message))
    return Promise
      .resolve([message, cache.get(message)])
  else
    return Promise
      .all([message, readBody(message)])
      .then(pair => (cache.set(...pair), pair))
}
