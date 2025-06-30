import { DomainSchema } from '../enumerations/schemas.js'

/**
 * @param {Feature} feature
 * @param {*} object
 */
export function validateSchema(feature, object) {
  if (!(feature in DomainSchema))
    throw TypeError(
      `[validateSchema] Parameter 'feature' '${feature}' must be a member of 'Schemas'.`,
    )

  let schema = DomainSchema[feature]

  for (let property in object)
    if (!(property in schema))
      throw TypeError(
        `[validateSchema] Property '${property}' must be a member of '${columns}'.`,
      )

  for (let property in object) {
    let descriptor = schema[property]
    let value = value[property]

    if (!is(descriptor.type, value))
      throw TypeError(
        `[validateSchema] Property '${property}' must be of type '${descriptor.type}'.`,
      )

    switch (descriptor.type) {
      case 'String':
        if ('minLength' in descriptor) {
          if (!is('Number', descriptor.minLength))
            throw TypeError(
              `[validateSchema] Descriptor 'minLength' must be a 'Number' when presented.`,
            )

          if (value.length < descriptor.minLength)
            throw TypeError(
              `[validateSchema] String '${value}' length should not be less than '${descriptor.minLength}'.`,
            )
        }

        if ('maxLength' in descriptor) {
          if (!is('Number', descriptor.maxLength))
            throw TypeError(
              `[validateSchema] Descriptor 'maxLength' must be a 'Number' when presented.`,
            )

          if (value.length > descriptor.maxLength)
            throw TypeError(
              `[validateSchema] String '${value}' length should not be more than '${descriptor.maxLength}'.`,
            )
        }

        break
    }
  }
}
