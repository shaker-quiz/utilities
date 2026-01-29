export const Quantifiers = Object.freeze(
  /** @type {const} */ ([
    'Any',
    'None',
    'Single',
    'Many',
    'All',
  ]),
)

export const Quantifier = Object.freeze(
  /** @type {{ [x in typeof Quantifiers[number]]: x }} */ (
    Quantifiers.reduce(
      (o, x) => (o[x] = x, o),
      {},
    )
  ),
)

export const QuantifierQuantifiers = Object.freeze({
  [Quantifier['Any']]: Object.freeze([
    Quantifier['Any'],
    Quantifier['None'],
    Quantifier['Single'],
    Quantifier['Many'],
    Quantifier['All'],
  ]),

  [Quantifier['None']]: Object.freeze([
    Quantifier['None'],
  ]),

  [Quantifier['Single']]: Object.freeze([
    Quantifier['Single'],
  ]),

  [Quantifier['Many']]: Object.freeze([
    Quantifier['Many'],
  ]),

  [Quantifier['All']]: Object.freeze([
    Quantifier['All'],
  ]),
})
