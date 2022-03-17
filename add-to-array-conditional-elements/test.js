const addToArrayConditionalElements = require("./script.js");

// Test case 1
JSON.stringify(addToArrayConditionalElements([1, 2, 3], 6)) === JSON.stringify([6, 1, 2, 3])
  ? console.log("test case 1: passed")
  : console.error("test case 1: failed");

// Test case 2
JSON.stringify(addToArrayConditionalElements(["a", "b"], 2)) === JSON.stringify([0, "a", "b"])
  ? console.log("test case 2: passed")
  : console.error("test case 2: failed");

// Test case 3
JSON.stringify(addToArrayConditionalElements([null, false], 11)) === JSON.stringify([11, null, false])
  ? console.log("test case 3: passed")
  : console.error("test case 3: failed");

// test case invalid input array
addToArrayConditionalElements(null, 1) === "invalid input array" &&
addToArrayConditionalElements(false, 1) === "invalid input array" &&
addToArrayConditionalElements(1, 1) === "invalid input array" &&
addToArrayConditionalElements("string", 1) === "invalid input array"
  ? console.log("test case invalid input array: passed")
  : console.log("test case invalid input array: failed");

// test case invalid input number
addToArrayConditionalElements(["a", "b"]) === "invalid input number" &&
addToArrayConditionalElements(["a", "b"], null) === "invalid input number" &&
addToArrayConditionalElements(["a", "b"], false) === "invalid input number" &&
addToArrayConditionalElements(["a", "b"], "string") === "invalid input number"
  ? console.log("test case invalid input array: passed")
  : console.log("test case invalid input array: failed");
