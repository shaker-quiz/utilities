export const Pattern = Object.freeze({
  UUID: /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/,
  JWT: /^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/,
  ZONE: /[A-Za-z]+\/(?:[A-Za-z]+(?:_[A-Za-z]+)?)+/,
})
