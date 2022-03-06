const mergeNumberOfArrays = require("./script.js");

// Test case 1
JSON.stringify(mergeNumberOfArrays([1, 2, 3], [4, 5, 6])) === JSON.stringify([1, 2, 3, 4, 5, 6])
  ? console.log("test case 1: passed")
  : console.log("test case 1: failed");

// Test case 2
JSON.stringify(mergeNumberOfArrays(["a", "b", "c"], [4, 5, 6])) === JSON.stringify(["a", "b", "c", 4, 5, 6])
  ? console.log("test case 2: passed")
  : console.log("test case 2: failed");

// Test case 3
JSON.stringify(mergeNumberOfArrays([true, true], [1, 2], ["a", "b"])) === JSON.stringify([true, true, 1, 2, "a", "b"])
  ? console.log("test case 3: passed")
  : console.log("test case 3: failed");

// Test case invalid input
mergeNumberOfArrays("") === "invalid input" &&
mergeNumberOfArrays(null) === "invalid input" &&
mergeNumberOfArrays(1) === "invalid input" &&
mergeNumberOfArrays(true) === "invalid input" &&
mergeNumberOfArrays({}) === "invalid input" &&
mergeNumberOfArrays([]) === "invalid input"
  ? console.log("test case invalid input: passed")
  : console.log("test case invalid input: failed");
