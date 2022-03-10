const mergeArraysDuplicates = (array1, array2) => {
  // ...arrays
  //   validate what all props are arrays
  //   if (!arrays.every((array) => Array.isArray(array) && array.length > 0)) {
  //     return "invalid input";
  //   }
  //   return [...new Set(arrays.flat())].sort((a, b) => a - b);
  if (!Array.isArray(array1) || typeof array2 === "undefined" || !Array.isArray(array2)) {
    return "invalid input";
  }

  return Array.from(new Set(array1.concat(array2).sort((a, b) => a - b)));
};

module.exports = mergeArraysDuplicates;
