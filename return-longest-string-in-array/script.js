const returnLongestStringInArray = (array) => {
  // validate input
  if (!Array.isArray(array) || array.length === 0) {
    return "invalid input";
  }

  return array.reduce((longestString, currentString) => {
    return currentString.length > longestString.length ? currentString : longestString;
  });
};

module.exports = returnLongestStringInArray;
