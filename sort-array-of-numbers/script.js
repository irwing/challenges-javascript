const sortArrayOfNumbers = (array) => {
  // validate if input array is empty, null, or not is a array or is a array empty
  if (array === null || array === undefined || !Array.isArray(array) || array.length === 0) {
    return "invalid input array";
  }

  // order array desc
  return array.sort((a, b) => b - a);
};

module.exports = sortArrayOfNumbers;
