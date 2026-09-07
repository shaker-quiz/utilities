export const RegistrationAttribute = /** @type {const} */ ({
  'Alone': 'Alone',
  'Newcomer': 'Newcomer',
  'Birthday': 'Birthday',
  'Public': 'Public',
})

export const RegistrationAttributes = Object.values(RegistrationAttribute)

export const RegistrationAttributeEmoji = {
  [RegistrationAttribute.Alone]: '👤',
  [RegistrationAttribute.Newcomer]: '✨',
  [RegistrationAttribute.Birthday]: '🎂',
  [RegistrationAttribute.Public]: '🫂',
}
