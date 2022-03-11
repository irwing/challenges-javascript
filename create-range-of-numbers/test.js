const createRangeOfNumbers = require("./script.js");

// Test case 1
JSON.stringify(createRangeOfNumbers(2, 10)) == JSON.stringify([2, 3, 4, 5, 6, 7, 8, 9, 10])
  ? console.log("test case 1: passed")
  : console.log("test case 1: failed");

// Test case 2
JSON.stringify(createRangeOfNumbers(1, 3)) == JSON.stringify([1, 2, 3])
  ? console.log("test case 2: passed")
  : console.log("test case 2: failed");

// Test case 3
JSON.stringify(createRangeOfNumbers(-5, 5)) == JSON.stringify([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5])
  ? console.log("test case 3: passed")
  : console.log("test case 3: failed");

// Test case 4
JSON.stringify(createRangeOfNumbers(2, 7)) == JSON.stringify([2, 3, 4, 5, 6, 7])
  ? console.log("test case 4: passed")
  : console.log("test case 4: failed");

// Test case invalid inputs
createRangeOfNumbers(null, 1) == "Invalid input number" &&
createRangeOfNumbers("a", 1) == "Invalid input number" &&
createRangeOfNumbers(false, 1) == "Invalid input number" &&
createRangeOfNumbers(1, null) == "Invalid input number" &&
createRangeOfNumbers(1, "a") == "Invalid input number" &&
createRangeOfNumbers(1, false) == "Invalid input number"
  ? console.log("test case invalid input number: passed")
  : console.log("test case invalid input number: failed");
