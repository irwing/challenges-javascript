const sortArrayOfStrings = require("./script.js");

// Test case 1
JSON.stringify(sortArrayOfStrings(["b", "c", "d", "a"])) === JSON.stringify(["a", "b", "c", "d"])
  ? console.log("test case 1: passed")
  : console.log("test case 1: failed");

// Test case 2
JSON.stringify(sortArrayOfStrings(["z", "c", "d", "a", "y", "a", "w"])) ===
JSON.stringify(["a", "a", "c", "d", "w", "y", "z"])
  ? console.log("test case 2: passed")
  : console.log("test case 2: failed");

// Test case invalid input
// Test invalid input
sortArrayOfStrings() === "invalid input array" &&
sortArrayOfStrings(null) === "invalid input array" &&
sortArrayOfStrings(1) === "invalid input array" &&
sortArrayOfStrings("a") === "invalid input array"
  ? console.log("test invalid input: passed")
  : console.log("test invalid input: failed");
