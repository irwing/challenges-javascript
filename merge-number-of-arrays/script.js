const mergeNumberOfArrays = (array1, array2, array3) => {
  if (!Array.isArray(array1) || array1.length === 0 || !Array.isArray(array2) || array2.length === 0) {
    return "invalid input";
  }

  if (!Array.isArray(array3)) {
    return [...array1, ...array2];
  } else {
    return [...array1, ...array2, ...array3];
  }
};

module.exports = mergeNumberOfArrays;
