export const Pattern = Object.freeze({
  UUID: /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/,
  JWT: /^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/,
  COUNTRY_CODE: /[A-Z]{2}/,
  CURRENCY_CODE: /[A-Z]{3}/,
  TIMEZONE_NAME: /[A-Za-z]+\/(?:[A-Za-z]+(?:_[A-Za-z]+)?)+/,
})
