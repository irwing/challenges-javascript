const returnAverageOfArray = require("./script.js");

// Test case 1
returnAverageOfArray([10, 100, 40]) === 50 ? console.log("test case 1: passed") : console.log("test case 1: failed");

// Test case 2
returnAverageOfArray([10, 100, 1000]) === 370 ? console.log("test case 2: passed") : console.log("test case 2: failed");

// Test case 3
returnAverageOfArray([-50, 0, 50, 200]) === 50
  ? console.log("test case 3: passed")
  : console.log("test case 3: failed");

// Test case invalid input
// Test invalid input
returnAverageOfArray() === "invalid input array" &&
returnAverageOfArray(null) === "invalid input array" &&
returnAverageOfArray(1) === "invalid input array" &&
returnAverageOfArray("a") === "invalid input array"
  ? console.log("test invalid input: passed")
  : console.log("test invalid input: failed");
