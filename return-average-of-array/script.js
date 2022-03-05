const returnAverageOfArray = (array) => {
  // validate if array is empty, null or not array
  if (!Array.isArray(array) || array.length === 0) {
    return "invalid input array";
  }

  return array.reduce((acc, curr) => acc + curr) / array.length;
};

module.exports = returnAverageOfArray;
