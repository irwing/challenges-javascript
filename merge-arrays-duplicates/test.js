const mergeArraysDuplicates = require("./script.js");

// Test case 1
JSON.stringify(mergeArraysDuplicates([1, 2, 3], [3, 4, 5])) === JSON.stringify([1, 2, 3, 4, 5])
  ? console.log("test case 1: passed")
  : console.log("test case 1: failed");

// Test case 2
JSON.stringify(mergeArraysDuplicates([-10, 22, 333, 42], [-11, 5, 22, 41, 42])) === JSON.stringify([-11, -10, 5, 22, 41, 42, 333])
  ? console.log("test case 2: passed")
  : console.log("test case 2: failed");

// Test case invalid input
mergeArraysDuplicates("") === "invalid input" &&
mergeArraysDuplicates(null) === "invalid input" &&
mergeArraysDuplicates(1) === "invalid input" &&
mergeArraysDuplicates(true) === "invalid input" &&
mergeArraysDuplicates({}) === "invalid input" &&
mergeArraysDuplicates([]) === "invalid input"
  ? console.log("test case invalid input: passed")
  : console.log("test case invalid input: failed");
