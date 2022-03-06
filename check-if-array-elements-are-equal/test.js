const checkIfArrayElementsAreEqual = require("./script.js");

// Test case 1
checkIfArrayElementsAreEqual([true, true, true, true]) == true
  ? console.log("test case 1: passed")
  : console.log("test case 1: failed");

// Test case 2
checkIfArrayElementsAreEqual(["test", "test", "test"]) == true
  ? console.log("test case 2: passed")
  : console.log("test case 2: failed");

// Test case 3
checkIfArrayElementsAreEqual([1, 1, 1, 2]) == false
  ? console.log("test case 3: passed")
  : console.log("test case 3: failed");

// Test case 4
checkIfArrayElementsAreEqual(["10", 10, 10, 10]) == false
  ? console.log("test case 4: passed")
  : console.log("test case 4: failed");

// Test case invalid input
checkIfArrayElementsAreEqual("") === "invalid input" &&
checkIfArrayElementsAreEqual(null) === "invalid input" &&
checkIfArrayElementsAreEqual(1) === "invalid input" &&
checkIfArrayElementsAreEqual(true) === "invalid input" &&
checkIfArrayElementsAreEqual({}) === "invalid input" &&
checkIfArrayElementsAreEqual([]) === "invalid input"
  ? console.log("test case invalid input: passed")
  : console.log("test case invalid input: failed");
