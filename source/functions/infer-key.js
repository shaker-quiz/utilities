/**
 * @template {any} E
 *
 * @param {E} Enumeration
 *
 * @returns {E[keyof E]}
 */
export var inferKey = (Enumeration, value) => {
  if (value in Enumeration)
    return Enumeration[value]
  else
    throw TypeError(`Cannot infer key of value: '${value}' for enum: '${Object.values(Enumeration).join(', ')}'.`)
}
