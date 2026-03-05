/**
 * @param {object} router
 * @param {string | Partial<URL>} input
 * @param {{ shallow?: boolean }} [transition]
 */
export const push = (router, input, transition) => {
  if (!Object.hasOwn(router, 'push'))
    throw TypeError(`Parameter 'router.push' is not defined.`)

  if (typeof router.push !== 'function')
    throw TypeError(`Parameter 'router.push' is not a function.`)

  return router.push(input, undefined, transition)
}

/**
 * @param {object} router
 * @param {string | Partial<URL>} input
 * @param {{ shallow?: boolean }} [transition]
 */
export const replace = (router, input, transition) => {
  if (!Object.hasOwn(router, 'replace'))
    throw TypeError(`Parameter 'router.replace' is not defined.`)

  if (typeof router.replace !== 'function')
    throw TypeError(`Parameter 'router.replace' is not a function.`)

  return router.replace(input, undefined, transition)
}
