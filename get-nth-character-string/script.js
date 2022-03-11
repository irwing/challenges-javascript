const getNthCharacterString = (string, indexSearch) => {
  if (string === null || string === undefined || typeof string !== "string") {
    return "Invalid input string";
  }

  if (indexSearch === null || indexSearch === undefined || typeof indexSearch !== "number" || indexSearch <= 0) {
    return "Invalid input index search";
  }

  return string.charAt(indexSearch - 1);
};

module.exports = getNthCharacterString;
