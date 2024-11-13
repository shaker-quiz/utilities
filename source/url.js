import { is } from '@yurkimus/types'

/**
 * @param {{ base: string } & Pick<URL, 'port' | 'pathname' | 'search' | 'hash'>} options
 */
export let url = options => {
  if (!is('Object', options))
    throw new TypeError(`Expected 'options' to be an object.`)

  let instance = new URL(options.pathname ?? '', options.base)

  for (let option of ['base', 'pathname']) delete options[option]

  for (let option in options) {
    switch (option) {
      case 'search':
        instance.search = new URLSearchParams(options.search)
        break

      case 'hash':
      case 'port':
        instance[option] = options[option]
        break

      default:
        throw new TypeError(`No predicate found for 'option': '${option}'.`)
    }
  }

  return instance
}
