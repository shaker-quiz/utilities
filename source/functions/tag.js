/**
 * @param {*} value
 * @returns {string}
 */
export var getTag = value => Object.prototype.toString.call(value).slice(8, -1)
