const getLastNElementsArray = require("./script.js");

// Test case 1
JSON.stringify(getLastNElementsArray([1, 2, 3, 4], 3)) ===
JSON.stringify([1, 2, 3])
  ? console.log("test case 1: passed")
  : console.log("test case 1: failed");

// Test case 2
JSON.stringify(getLastNElementsArray([5, 4, 3, 2, 1, 0], 3)) ===
JSON.stringify([5, 4, 3])
  ? console.log("test case 2: passed")
  : console.log("test case 2: failed");

// Test case 3
JSON.stringify(getLastNElementsArray([99, 1, 1], 3)) ===
JSON.stringify([99, 1, 1])
  ? console.log("test case 3: passed")
  : console.log("test case 3: failed");

// Test invalid input
getLastNElementsArray() === "invalid input array" &&
getLastNElementsArray(null, 3) === "invalid input array" &&
getLastNElementsArray(1, 3) === "invalid input array" &&
getLastNElementsArray([1, 2, 3, 4, 5]) === "invalid input lenght" &&
getLastNElementsArray([1, 2, 3, 4, 5], null) === "invalid input lenght" &&
getLastNElementsArray([1, 2, 3, 4, 5], "a") === "invalid input lenght"
  ? console.log("test invalid input: passed")
  : console.log("test invalid input: failed");
