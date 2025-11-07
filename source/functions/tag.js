/**
 * @returns {string}
 */
export var inferTag = value => Object.prototype.toString.call(value).slice(8, -1)

export var isTag = (tag, value) => tag === inferTag(value)
