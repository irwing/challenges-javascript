const removeSpecificArrayElement = require("./script.js");

// Test case 1
JSON.stringify(removeSpecificArrayElement([1, 2, 3], 2)) === JSON.stringify([1, 3])
  ? console.log("test case 1: passed")
  : console.log("test case 1: failed");

// Test case 2
JSON.stringify(removeSpecificArrayElement([1, 2, "2"], "2")) === JSON.stringify([1, 2])
  ? console.log("test case 2: passed")
  : console.log("test case 2: failed");

// Test case 3
JSON.stringify(removeSpecificArrayElement([false, "2", 1], false)) === JSON.stringify(["2", 1])
  ? console.log("test case 3: passed")
  : console.log("test case 3: failed");

// Test case 4
JSON.stringify(removeSpecificArrayElement([1, 2, "2", 1], 1)) === JSON.stringify([2, "2"])
  ? console.log("test case 4: passed")
  : console.log("test case 4: failed");

// Test case invalid input length
removeSpecificArrayElement([1, 2, "2", 1]) === "invalid input search" &&
removeSpecificArrayElement([1, 2, "2", 1], {}) === "invalid input search" &&
removeSpecificArrayElement([1, 2, "2", 1], []) === "invalid input search"
  ? console.log("test case invalid input search: passed")
  : console.log("test case invalid input search: failed");

// Test case invalid input array
removeSpecificArrayElement(null, 1) === "invalid input array" &&
removeSpecificArrayElement([], 1) === "invalid input array" &&
removeSpecificArrayElement({}, 1) === "invalid input array" &&
removeSpecificArrayElement(true, 1) === "invalid input array" &&
removeSpecificArrayElement("a", 1) === "invalid input array"
  ? console.log("test case invalid input array: passed")
  : console.log("test case invalid input array: failed");
