export function Composable(...parameters) {
  if (!(this instanceof Composable))
    return new Composable(...parameters)

  this.parameters = parameters
}

Composable.prototype[Symbol.toStringTag] = 'Composable'

Composable.prototype.toString = function(separator = '/') {
  return this.parameters.join(separator)
}

Composable.prototype.toNumber = function() {
  return this.parameters.length - 1
}

Composable.prototype[Symbol.toPrimitive] = function(hint) {
  switch (hint) {
    case 'number':
      return this.toNumber()

    case 'string':
    default:
      return this.toString()
  }
}
