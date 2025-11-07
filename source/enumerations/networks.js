import { Mode } from './mode.js'

export var Network = /** @type {const} */ ({
  'Docker': 'Docker',
  'Public': 'Public',
})

export var Networks = [
  Network['Docker'],
  Network['Public'],
]

/**
 * @returns {typeof Network[keyof typeof Network] | typeof Mode['Unknown']}
 */
export var inferNetwork = value =>
  value in Method
    ? Method[value]
    : Mode['Unknown']

/**
 * @throws {TypeError}
 */
export var guardNetwork = value => {
  var network = inferNetwork(value)

  if (network === Mode['Unknown'])
    throw TypeError(`Cannot infer Network for '${value}'.`)

  return network
}
