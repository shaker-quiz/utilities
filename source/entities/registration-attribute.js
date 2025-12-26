// import { toStringTag } from '../helpers/string-tag.js'

export const RegistrationAttribute = Object.freeze({
  'Alone': 'Alone',
  'Newcomer': 'Newcomer',
  'Birthday': 'Birthday',
  'Public': 'Public',
})

export const RegistrationAttributes = Object.freeze(Object.values(RegistrationAttribute))

export const RegistrationAttributeIcon = Object.freeze({
  [RegistrationAttribute.Alone]: 'hero/outline/user',
  [RegistrationAttribute.Newcomer]: 'hero/outline/sparkles',
  [RegistrationAttribute.Birthday]: 'hero/outline/cake',
  [RegistrationAttribute.Public]: 'hero/outline/user-plus',
})

export const RegistrationAttributeEmoji = Object.freeze({
  [RegistrationAttribute.Alone]: '👤',
  [RegistrationAttribute.Newcomer]: '✨',
  [RegistrationAttribute.Birthday]: '🎂',
  [RegistrationAttribute.Public]: '🫂',
})

// export var RegistrationAttributeRegistrationProperty = /** @type {const} */ ({
//   [RegistrationAttribute.Alone]: 'is_alone',
//   [RegistrationAttribute.Newcomer]: 'is_first',
//   [RegistrationAttribute.Birthday]: 'is_birthday',
//   [RegistrationAttribute.Public]: 'is_extensible',
// })

// export var RegistrationAttributeRegistrationProperties = Object.values(RegistrationAttributeRegistrationProperty)

// export var RegistrationPropertyRegistrationAttribute = {
//   [RegistrationAttributeRegistrationProperty[RegistrationAttribute.Alone]]: RegistrationAttribute.Alone,
//   [RegistrationAttributeRegistrationProperty[RegistrationAttribute.Newcomer]]: RegistrationAttribute.Newcomer,
//   [RegistrationAttributeRegistrationProperty[RegistrationAttribute.Birthday]]: RegistrationAttribute.Birthday,
//   [RegistrationAttributeRegistrationProperty[RegistrationAttribute.Public]]: RegistrationAttribute.Public,
// }

// /**
//  * @param {RegistrationAttribute[] | Partial<Pick<RegistrationTable, 'is_alone' | 'is_birthday' | 'is_extensible' | 'is_first'>>} value
//  */
// export var getRegistrationAttributes = value => {
//   switch (toStringTag(value)) {
//     case 'Object':
//       return RegistrationAttributeRegistrationProperties
//         .map(property => value[property] ? RegistrationPropertyRegistrationAttribute[property] : '')
//         .filter(Boolean)

//     case 'Array':
//       if (!value.every(attribute => RegistrationAttributes.includes(attribute)))
//         throw TypeError(
//           `[Function: getRegistrationAttributes] Parameter 'value': '${value}' of type 'Array' must include only members of 'RegistrationAttributes'.`,
//         )

//       return value.reduce((attributes, attribute) => {
//         attributes[RegistrationAttributeRegistrationProperty[attribute]] = true
//         return attributes
//       }, {})

//     default:
//       throw TypeError(
//         `[Function: getRegistrationAttributes] Parameter 'value': '${value}' must be of types: 'Object', 'Array'.`,
//       )
//   }
// }
