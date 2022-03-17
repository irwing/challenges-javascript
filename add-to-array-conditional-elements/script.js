const addToArrayConditionalElements = (array, element) => {
  // validate is input array is empty, null or not a array
  if (!array || !Array.isArray(array) || array.length === 0) {
    return "invalid input array";
  }

  // validate if input numeral is empty, null or not a number
  if (typeof element !== "number" || element === null || element === false) {
    return "invalid input number";
  }

  return [element >= 6 ? element : 0, ...array];
};

module.exports = addToArrayConditionalElements;
