export const MessageStatuses = Object.freeze(
  /** @type {const} */ ([
    'Pending',
    'Delivered',
    'Failed',
  ]),
)

export const MessageStatus = Object.freeze(
  /** @type {{ [x in typeof MessageStatuses[number]]: x }} */ (
    MessageStatuses.reduce(
      (o, x) => (o[x] = x, o),
      {},
    )
  ),
)

export const MessageStatusColor = Object.freeze({
  'Pending': 'warning',
  'Delivered': 'success',
  'Failed': 'danger',
})
