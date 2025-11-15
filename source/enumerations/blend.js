export const Blend = Object.freeze({
  'Unset': 'Unset',
  'Domain': 'Domain',
  'System': 'System',
  'Indifferent': 'Indifferent',
})

export const inferBlend = Object.freeze(
  /** @returns {typeof Blend[keyof typeof Blend]} */
  value => Blend[value] ?? 'Unset',
)
