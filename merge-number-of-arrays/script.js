const mergeNumberOfArrays = (...arrays) => {
  return arrays.flat().length > 0 ? arrays.flat() : "invalid input";
};

module.exports = mergeNumberOfArrays;
