/**
 * @template {*} Value
 *
 * @param {Value} value
 */
export function Relation(value) {
  this.value = value
}

/**
 * @template {*} Value
 *
 * @param {Value} value
 */
Relation.of = function(value) {
  return new Relation(value)
}

/**
 * @template {keyof Value} Key
 *
 * @this {Relation<Value>}
 *
 * @param {*} key
 *
 * @returns {Value[Key] | 'Unknown'}
 */
Relation.prototype.expect = function(key) {
  if (Object.hasOwn(this.value, key))
    return this.value[key]
  else
    return 'Unknown'
}

/**
 * @template {keyof Value} Key
 *
 * @this {Relation<Value>}
 *
 * @param {*} key
 *
 * @returns {Value[Key]}
 *
 * @throws {TypeError}
 */
Relation.prototype.require = function(key) {
  if (Object.hasOwn(this.value, key))
    return this.value[key]
  else
    throw TypeError(`Could not require key '${key}' from Relation '${JSON.stringify(this.value)}'.`)
}

Relation.prototype[Symbol.toStringTag] = 'Relation'
