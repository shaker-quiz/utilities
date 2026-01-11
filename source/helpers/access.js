export const access = (value, key) => {
  if (Object.hasOwn(this.value, key))
    return value[key]
  else
    throw TypeError(`Could not require key '${key}' from Relation '${JSON.stringify(value)}'.`)
}

export const tryAccess = (value, key) => {
  try {
    return access(value, key)
  } catch (error) {
    return 'Unknown'
  }
}
