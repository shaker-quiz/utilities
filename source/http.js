/**
 * @param {Request | Response} message
 * @returns
 */
export let readContentType = message =>
  message
    .headers
    .get('content-type')
    ?.split(';')
    ?.at(0)
    ?? ''

/**
 * @param {Request | Response} message
 *
 * @returns {Promise<string | FormData | object | any[]>}
 */
export let readMessageBody = message => {
  let content = readContentType(message)

  switch (content) {
    case '':
      return null

    case 'text/plain':
      return message.text()

    case 'application/json':
      return message.json()

    case 'multipart/form-data':
    case 'application/x-www-form-urlencoded':
      return message.formData()

    default:
      throw new TypeError(`No handler found for media-type '${content}'.`)
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
 * @returns {[HttpMessage, Awaited<ReturnType<typeof readMessageBody>>]}
 */
export let readMessage = message =>
  Promise
    .resolve(message)
    .then(cloneMessage)
    .then(([message, clone]) => [message, readMessageBody(clone)])
    .then(Promise.all.bind(Promise))
