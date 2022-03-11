const createRangeOfNumbers = (minRange, maxRange) => {
  //   validate what inputs minRange and maxRange are empty, null, or not integer numbers
  if (
    minRange === null ||
    minRange === undefined ||
    typeof minRange !== "number" ||
    minRange % 1 !== 0 ||
    maxRange === null ||
    maxRange === undefined ||
    typeof maxRange !== "number" ||
    maxRange % 1 !== 0
  ) {
    return "Invalid input number";
  }

  // create range array
  const range = [];
  while (min <= max) {
    range.push(min);
    min++;
  }
  return range;
};

module.exports = createRangeOfNumbers;
