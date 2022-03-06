const checkIfArrayElementsAreEqual = (array) => {
  // validate input
  if (!Array.isArray(array) || array.length === 0) {
    return "invalid input";
  }

  let result = true;
  array.map((element) => {
    result = element === array[0] && result == true ? true : false;
  });

  return result;
};

module.exports = checkIfArrayElementsAreEqual;
