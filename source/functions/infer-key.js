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
    throw TypeError(`Cannot infer enum's '${Object.values(Enumeration).join(', ')}' key for value '${value}'.`)
}
