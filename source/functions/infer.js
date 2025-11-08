import { Mode } from '../enumerations/mode.js'

/**
 * @template {*} E
 *
 * @param {E} Enumeration
 * @param {E[keyof E]} value
 *
 * @returns {E[keyof E]}
 */
export var inferKey = (Enumeration, value) =>
  value in Enumeration
    ? Enumeration[value]
    : Mode['Unknown']

/**
 * @template {*} E
 *
 * @param {E} Enumeration
 * @param {E[keyof E]} value
 */
export var guardKey = (Enumeration, value) => {
  var key = inferKey(Enumeration, value)

  if (key === Mode['Unknown'])
    throw TypeError(`Cannot infer enum key '${value}'.`)

  return key
}
