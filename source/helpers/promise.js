export let settle = value =>
  Promise
    .resolve(value)
    .then(
      value => ({ status: 'fulfilled', value }),
      reason => ({ status: 'rejected', reason }),
    )

export let trySettle = (fn, ...args) =>
  Promise
    .try(fn, ...args)
    .then(
      value => ({ status: 'fulfilled', value }),
      reason => ({ status: 'rejected', reason }),
    )
