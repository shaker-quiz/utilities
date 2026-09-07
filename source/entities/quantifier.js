export const Quantifier = /** @type {const} */ ({
  'Any': 'Any',
  'None': 'None',
  'Single': 'Single',
  'Many': 'Many',
  'All': 'All',
})

export const Quantifiers = Object.values(Quantifier)

export const QuantifierQuantifiers = {
  [Quantifier.Any]: [
    Quantifier.Any,
    Quantifier.None,
    Quantifier.Single,
    Quantifier.Many,
    Quantifier.All,
  ],

  [Quantifier.None]: [
    Quantifier.None,
  ],

  [Quantifier.Single]: [
    Quantifier.Single,
  ],

  [Quantifier.Many]: [
    Quantifier.Many,
  ],

  [Quantifier.All]: [
    Quantifier.All,
  ],
}
