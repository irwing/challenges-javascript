const groupArrayStringsFirstLetter = require("./script.js");

// Test case 1
JSON.stringify(groupArrayStringsFirstLetter(["Alf", "Alice", "Ben"])) == JSON.stringify({ a: ["Alf", "Alice"], b: ["Ben"] })
  ? console.log("test case 1: passed")
  : console.error("test case 1: failed");

// Test case 2
JSON.stringify(groupArrayStringsFirstLetter(["Ant", "Bear", "Bird"])) == JSON.stringify({ a: ["Ant"], b: ["Bear", "Bird"] })
  ? console.log("test case 2: passed")
  : console.error("test case 2: failed");

// Test case 3
JSON.stringify(groupArrayStringsFirstLetter(["Berlin", "Paris", "Prague"])) == JSON.stringify({ b: ["Berlin"], p: ["Paris", "Prague"] })
  ? console.log("test case 3: passed")
  : console.error("test case 3: failed");

// test case invalid input array
groupArrayStringsFirstLetter() === "invalid input array" &&
groupArrayStringsFirstLetter(false) === "invalid input array" &&
groupArrayStringsFirstLetter(1) === "invalid input array" &&
groupArrayStringsFirstLetter("string") === "invalid input array"
  ? console.log("test case invalid input array: passed")
  : console.log("test case invalid input array: failed");
