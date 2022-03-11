const sumUpArrayGreater = (array, numberSum) => {
  if (array === null || array === undefined || !Array.isArray(array) || array.length === 0) {
    return "Invalid input array";
  }

  if (numberSum === null || numberSum === undefined || typeof numberSum !== "number") {
    return "Invalid input number sum";
  }

  return array.reduce((sum, number) => (number > numberSum ? sum + number : sum), 0);
};

module.exports = sumUpArrayGreater;
