export const RegistrationMailing = /** @type {const} */ ({
  'Idle': 'Idle',
  'Pending': 'Pending',
  'Delivered': 'Delivered',
  'Failed': 'Failed',
})

export const RegistrationMailings = Object.values(RegistrationMailing)

export const RegistrationMailingColor = /** @type {const} */ ({
  [RegistrationMailing.Idle]: 'default',
  [RegistrationMailing.Pending]: 'warning',
  [RegistrationMailing.Delivered]: 'success',
  [RegistrationMailing.Failed]: 'danger',
})
