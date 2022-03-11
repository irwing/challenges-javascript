const returnLongestStringInArray = require("./script.js");

// Test case 1
returnLongestStringInArray(["help", "me"]) === "help"
  ? console.log("test case 1: passed")
  : console.log("test case 1: failed");

// Test case 2
returnLongestStringInArray(["I", "need", "candy"]) === "candy"
  ? console.log("test case 2: passed")
  : console.log("test case 2: failed");

// Test case invalid input
returnLongestStringInArray("") === "invalid input" &&
returnLongestStringInArray(null) === "invalid input" &&
returnLongestStringInArray(1) === "invalid input" &&
returnLongestStringInArray(true) === "invalid input" &&
returnLongestStringInArray({}) === "invalid input" &&
returnLongestStringInArray([]) === "invalid input"
  ? console.log("test case invalid input: passed")
  : console.log("test case invalid input: failed");
