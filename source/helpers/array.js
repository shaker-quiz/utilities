export const filterUnique = (value, index, array) => array.indexOf(value) === index

export const filterUniqueBy = predicate => (value, index, array) =>
  array.findIndex(v => predicate(v) === predicate(value)) === index
