const countNumberNegativeValuesArray = (array) => {
  // validate if input array is empty, null, or not is a array or is a array empty
  if (array === null || array === undefined || !Array.isArray(array) || array.length === 0) {
    return "invalid input array";
  }

  return array.filter((element) => element < 0).length;
};

module.exports = countNumberNegativeValuesArray;
