export let settle = value =>
  Promise
    .resolve(value)
    .then(
      value => (/** @type {const} */ ({ status: 'fulfilled', value })),
      reason => (/** @type {const} */ ({ status: 'rejected', reason })),
    )

/**
 * @param {Parameters<typeof Promise.try>[0]} fn
 */
export let trySettle = (fn, ...args) =>
  Promise
    .try(fn, ...args)
    .then(
      value => (/** @type {const} */ ({ status: 'fulfilled', value })),
      reason => (/** @type {const} */ ({ status: 'rejected', reason })),
    )
