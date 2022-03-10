const sortArrayObjectProperty = (array) => {
  if (!array || !Array.isArray(array) || array.length === 0) {
    return "invalid input";
  }

  return array.sort((a, b) => a.b - b.b);
};

module.exports = sortArrayObjectProperty;
