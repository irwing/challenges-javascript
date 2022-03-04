const countNumberNegativeValuesArray = require("./script.js");

// Test case 1
countNumberNegativeValuesArray([1, -2, 2, -4]) === 2
  ? console.log("test case 1: passed")
  : console.log("test case 1: failed");

// Test case 2
countNumberNegativeValuesArray([0, 9, 1]) === 0
  ? console.log("test case 2: passed")
  : console.log("test case 2: failed");

// Test case 3
countNumberNegativeValuesArray([4, -3, 2, 1, 0]) === 1
  ? console.log("test case 3: passed")
  : console.log("test case 3: failed");

// Test case invalid input array
countNumberNegativeValuesArray(null) === "invalid input array" &&
countNumberNegativeValuesArray([]) === "invalid input array" &&
countNumberNegativeValuesArray({}) === "invalid input array" &&
countNumberNegativeValuesArray(true) === "invalid input array" &&
countNumberNegativeValuesArray("a") === "invalid input array"
  ? console.log("test case invalid input array: passed")
  : console.log("test case invalid input array: failed");
