export var RegistrationMailing = /** @type {const} */ ({
  'Idle': 'Idle',
  'Pending': 'Pending',
  'Delivered': 'Delivered',
  'Failed': 'Failed',
})

export var RegistrationMailings = Object.values(RegistrationMailing)

/** @type {Record<RegistrationMailing, number>} */
export var RegistrationMailingWeight = {
  [RegistrationMailing.Idle]: 0,
  [RegistrationMailing.Pending]: 1,
  [RegistrationMailing.Delivered]: 2,
  [RegistrationMailing.Failed]: 3,
}

/** @type {Record<RegistrationMailing, string>} */
export var RegistrationMailingColor = {
  [RegistrationMailing.Idle]: 'default',
  [RegistrationMailing.Pending]: 'warning',
  [RegistrationMailing.Delivered]: 'success',
  [RegistrationMailing.Failed]: 'danger',
}
