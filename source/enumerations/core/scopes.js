import { Features } from './features.js'
import { Kinds } from './kinds.js'
import { Methods } from './methods.js'

/**
 * @type {Scope[]}
 */
export var Scopes = Object
  .values(Methods)
  .flatMap(method => Object.values(Features).map(feature => [method, feature]))
  .flatMap(array => Object.values(Kinds).map(kind => array.concat(kind)))
  .map(array => array.join('/'))
