const getLastArrayElements = (array, lengthReturn) => {
  // validate if input array is empty, null, or not is a array or is a array empty
  if (array === null || array === undefined || !Array.isArray(array) || array.length === 0) {
    return "invalid input array";
  }

  // validate if input length is empty, null, or is a integer major than 0 or not a number
  if (lengthReturn === null || lengthReturn === undefined || !Number.isInteger(lengthReturn) || lengthReturn <= 0) {
    return "invalid inpunt lenght";
  }

  return array.slice(array.length - lengthReturn);
};

module.exports = getLastArrayElements;
