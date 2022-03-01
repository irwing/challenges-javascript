const getLastNElementsArray = (array, lenghtNumber) => {
  // validate if array is empty, null or not array
  if (!Array.isArray(array) || array.length === 0) {
    return "invalid input array";
  }

  // validate if number is empty, null or not number
  if (!Number.isInteger(lenghtNumber) || lenghtNumber < 0) {
    return "invalid input lenght";
  }

  return array.slice(array.length - lenghtNumber);
};

module.exports = getLastNElementsArray;
