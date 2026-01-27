export const RegistrationMailings = Object.freeze(
  /** @type {const} */ ([
    'Idle',
    'Pending',
    'Delivered',
    'Failed',
  ]),
)

export const RegistrationMailing = Object.freeze(
  /** @type {{ [x in typeof RegistrationMailings[number]]: x }} */ (
    RegistrationMailings.reduce(
      (o, x) => (o[x] = x, o),
      {},
    )
  ),
)

export const RegistrationMailingColor = Object.freeze({
  'Idle': 'default',
  'Pending': 'warning',
  'Delivered': 'success',
  'Failed': 'danger',
})
