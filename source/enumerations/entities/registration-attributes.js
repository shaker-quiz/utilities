import { getTag } from '../../functions/tag.js'

export var RegistrationAttributes = /** @type {const} */ ([
  'Alone',
  'Birthday',
  'Newcomer',
  'Public',
])

var RegistrationAttributeRegistrationProperties = /** @type {const} */ ([
  'is_alone',
  'is_birthday',
  'is_first',
  'is_extensible',
])

var RegistrationAttributeRegistrationProperty = /** @type {const} */ ({
  'Alone': 'is_alone',
  'Birthday': 'is_birthday',
  'Newcomer': 'is_first',
  'Public': 'is_extensible',
})

var RegistrationPropertyRegistrationAttribute = /** @type {const} */ ({
  'is_alone': 'Alone',
  'is_birthday': 'Birthday',
  'is_first': 'Newcomer',
  'is_extensible': 'Public',
})

/**
 * @param {RegistrationAttribute[] | Partial<Pick<RegistrationTable, 'is_alone' | 'is_birthday' | 'is_extensible' | 'is_first'>>} value
 */
export var getRegistrationAttributes = value => {
  switch (getTag(value)) {
    case 'Object':
      return RegistrationAttributeRegistrationProperties
        .map(property => value[property] ? RegistrationPropertyRegistrationAttribute[property] : '')
        .filter(Boolean)

    case 'Array':
      if (!value.every(attribute => RegistrationAttributes.includes(attribute)))
        throw TypeError(
          `[Function: getRegistrationAttributes] Parameter 'value': '${value}' of type 'Array' must include only members of 'RegistrationAttributes'.`,
        )

      return value.reduce((attributes, attribute) => {
        attributes[RegistrationAttributeRegistrationProperty[attribute]] = true
        return attributes
      }, {})

    default:
      throw TypeError(
        `[Function: getRegistrationAttributes] Parameter 'value': '${value}' must be of types: 'Object', 'Array'.`,
      )
  }
}
