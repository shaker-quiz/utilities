export const Blend = Object.freeze({
  'Unset': 'Unset',
  'Domain': 'Domain',
  'System': 'System',
  'Indifferent': 'Indifferent',
})

/** @returns {typeof Blend[keyof typeof Blend]} */
export const inferBlend = value =>
  Blend[value]
    ?? 'Unset'
