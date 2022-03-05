const sortArrayOfNumbers = require("./script.js");

// Test case 1
JSON.stringify(sortArrayOfNumbers([1, 3, 2])) === JSON.stringify([3, 2, 1])
  ? console.log("test case 1: passed")
  : console.log("test case 1: failed");

// Test case 2
JSON.stringify(sortArrayOfNumbers([4, 2, 3, 1])) === JSON.stringify([4, 3, 2, 1])
  ? console.log("test case 2: passed")
  : console.log("test case 2: failed");

// Test case invalid input array
sortArrayOfNumbers(null) === "invalid input array" &&
sortArrayOfNumbers([]) === "invalid input array" &&
sortArrayOfNumbers({}) === "invalid input array" &&
sortArrayOfNumbers(true) === "invalid input array" &&
sortArrayOfNumbers("a") === "invalid input array"
  ? console.log("test case invalid input array: passed")
  : console.log("test case invalid input array: failed");
