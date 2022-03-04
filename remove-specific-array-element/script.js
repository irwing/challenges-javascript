const removeSpecificArrayElement = (array, search) => {
  // validate if input array is empty, null, or not is a array or is a array empty
  if (array === null || array === undefined || !Array.isArray(array) || array.length === 0) {
    return "invalid input array";
  }

  // validate if input search not is a string or a number or a boolean
  if (
    search === null ||
    search === undefined ||
    (typeof search !== "string" && typeof search !== "number" && typeof search !== "boolean")
  ) {
    return "invalid input search";
  }

  return array.filter((element) => element !== search);
};

module.exports = removeSpecificArrayElement;
