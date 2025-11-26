export const toStringTag = Object.freeze(x => Object.prototype.toString.call(x).slice(8, -1))

export const isStringTag = Object.freeze((tag, x) => tag === Object.prototype.toString.call(x).slice(8, -1))

export const isValue = Object.freeze((x, ...tags) => tags.includes(toStringTag(x)))
