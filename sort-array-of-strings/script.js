const sortArrayOfStrings = (array) => {
  // validate if array is empty, null or not array
  if (!Array.isArray(array) || array.length === 0) {
    return "invalid input array";
  }

  // sort array string
  return array.sort();
};

module.exports = sortArrayOfStrings;
