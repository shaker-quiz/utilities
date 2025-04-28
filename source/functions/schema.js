import { Schemas } from '../enumerations/schemas.js'

/**
 * @param {Feature} feature
 * @param {*} object
 */
export function validateSchema(feature, object) {
  if (!(feature in Schemas))
    throw TypeError(
      `Parameter 'feature' '${feature}' must be a member of 'Schemas'.`,
    )

  let schema = Schemas[feature]

  for (let property in object)
    if (!(property in schema)) {
      let message = `Property '${property}' must be a member of '${columns}'.`

      throw TypeError(message)
    }

  for (let property in object) {
    let descriptor = schema[property]
    let value = value[property]

    if (!is(descriptor.type, value)) {
      let message =
        `Property '${property}' must be of type '${descriptor.type}'.`

      throw TypeError(message)
    }

    switch (descriptor.type) {
      case 'String':
        if ('minLength' in descriptor) {
          if (!is('Number', descriptor.minLength)) {
            let message =
              `Descriptor 'minLength' must be a 'Number' when presented.`

            throw TypeError(message)
          }

          if (value.length < descriptor.minLength) {
            let message =
              `String '${value}' length should not be less than '${descriptor.minLength}'.`

            throw TypeError(message)
          }
        }

        if ('maxLength' in descriptor) {
          if (!is('Number', descriptor.maxLength)) {
            let message =
              `Descriptor 'maxLength' must be a 'Number' when presented.`

            throw TypeError(message)
          }

          if (value.length > descriptor.maxLength) {
            let message =
              `String '${value}' length should not be more than '${descriptor.maxLength}'.`

            throw TypeError(message)
          }
        }

        break
    }
  }
}
