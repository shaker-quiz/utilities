import { toStringTag } from '../../functions/string-tag.js'

export var RegistrationAttribute = /** @type {const} */ ({
  'Alone': 'Alone',
  'Newcomer': 'Newcomer',
  'Birthday': 'Birthday',
  'Public': 'Public',
})

export var RegistrationAttributes = Object.values(RegistrationAttribute)

export var RegistrationAttributeWeight = {
  [RegistrationAttribute.Alone]: 0,
  [RegistrationAttribute.Newcomer]: 1,
  [RegistrationAttribute.Birthday]: 2,
  [RegistrationAttribute.Public]: 3,
}

export var RegistrationAttributeTitle = {
  [RegistrationAttribute.Alone]: 'Без команды',
  [RegistrationAttribute.Newcomer]: 'Новичок',
  [RegistrationAttribute.Birthday]: 'День рождения',
  [RegistrationAttribute.Public]: 'Принимаем людей',
}

/** @type {Record<RegistrationAttribute, Icon>} */
export var RegistrationAttributeIcon = {
  [RegistrationAttribute.Alone]: 'hero/outline/user',
  [RegistrationAttribute.Newcomer]: 'hero/outline/sparkles',
  [RegistrationAttribute.Birthday]: 'hero/outline/cake',
  [RegistrationAttribute.Public]: 'hero/outline/user-plus',
}

export var RegistrationAttributeEmoji = {
  [RegistrationAttribute.Alone]: '👤',
  [RegistrationAttribute.Newcomer]: '✨',
  [RegistrationAttribute.Birthday]: '🎂',
  [RegistrationAttribute.Public]: '🫂',
}

export var RegistrationAttributeRegistrationProperty = /** @type {const} */ ({
  [RegistrationAttribute.Alone]: 'is_alone',
  [RegistrationAttribute.Newcomer]: 'is_first',
  [RegistrationAttribute.Birthday]: 'is_birthday',
  [RegistrationAttribute.Public]: 'is_extensible',
})

export var RegistrationAttributeRegistrationProperties = Object.values(RegistrationAttributeRegistrationProperty)

export var RegistrationPropertyRegistrationAttribute = {
  [RegistrationAttributeRegistrationProperty[RegistrationAttribute.Alone]]: RegistrationAttribute.Alone,
  [RegistrationAttributeRegistrationProperty[RegistrationAttribute.Newcomer]]: RegistrationAttribute.Newcomer,
  [RegistrationAttributeRegistrationProperty[RegistrationAttribute.Birthday]]: RegistrationAttribute.Birthday,
  [RegistrationAttributeRegistrationProperty[RegistrationAttribute.Public]]: RegistrationAttribute.Public,
}

/**
 * @param {RegistrationAttribute[] | Partial<Pick<RegistrationTable, 'is_alone' | 'is_birthday' | 'is_extensible' | 'is_first'>>} value
 */
export var getRegistrationAttributes = value => {
  switch (toStringTag(value)) {
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
