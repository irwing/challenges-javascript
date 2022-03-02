const getLastArrayElements = require("./script.js");

// Test case 1
JSON.stringify(getLastArrayElements([1, 2, 3, 4, 5], 2)) === JSON.stringify([4, 5])
  ? console.log("test case 1: passed")
  : console.log("test case 1: failed");

// Test case 2
JSON.stringify(getLastArrayElements([1, 2, 3], 6)) === JSON.stringify([1, 2, 3])
  ? console.log("test case 2: passed")
  : console.log("test case 2: failed");

// Test case 3
JSON.stringify(getLastArrayElements([1, 2, 3, 4, 5, 6, 7, 8], 3)) === JSON.stringify([6, 7, 8])
  ? console.log("test case 3: passed")
  : console.log("test case 3: failed");

// Test case invalid input length
getLastArrayElements([1, 2, 3, 4, 5, 6, 7, 8]) === "invalid inpunt lenght" &&
getLastArrayElements([1, 2, 3, 4, 5, 6, 7, 8], -1) === "invalid inpunt lenght" &&
getLastArrayElements([1, 2, 3, 4, 5, 6, 7, 8], 0) === "invalid inpunt lenght" &&
getLastArrayElements([1, 2, 3, 4, 5, 6, 7, 8], "a") === "invalid inpunt lenght" &&
getLastArrayElements([1, 2, 3, 4, 5, 6, 7, 8], {}) === "invalid inpunt lenght" &&
getLastArrayElements([1, 2, 3, 4, 5, 6, 7, 8], []) === "invalid inpunt lenght"
  ? console.log("test case invalid input length: passed")
  : console.log("test case invalid input length: failed");

// Test case invalid input array
getLastArrayElements(null, 3) === "invalid input array" &&
getLastArrayElements([], 3) === "invalid input array" &&
getLastArrayElements({}, 3) === "invalid input array" &&
getLastArrayElements(true, 3) === "invalid input array" &&
getLastArrayElements("a", 3) === "invalid input array"
  ? console.log("test case invalid input array: passed")
  : console.log("test case invalid input array: failed");
