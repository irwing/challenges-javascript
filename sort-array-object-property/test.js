const sortArrayObjectProperty = require("./script.js");

// Test case 1
JSON.stringify(
  sortArrayObjectProperty([
    { a: 1, b: 2 },
    { a: 5, b: 4 },
  ])
) ===
JSON.stringify([
  { a: 1, b: 2 },
  { a: 5, b: 4 },
])
  ? console.log("test case 1: passed")
  : console.log("test case 1: failed");

// Test case 2
JSON.stringify(
  sortArrayObjectProperty([
    { a: 2, b: 10 },
    { a: 5, b: 4 },
  ])
) ===
JSON.stringify([
  { a: 5, b: 4 },
  { a: 2, b: 10 },
])
  ? console.log("test case 2: passed")
  : console.log("test case 2: failed");

// Test case 3
JSON.stringify(
  sortArrayObjectProperty([
    { a: 1, b: 7 },
    { a: 2, b: 1 },
  ])
) ===
JSON.stringify([
  { a: 2, b: 1 },
  { a: 1, b: 7 },
])
  ? console.log("test case 2: passed")
  : console.log("test case 2: failed");

// Test case invalid input
sortArrayObjectProperty("") === "invalid input" &&
sortArrayObjectProperty(null) === "invalid input" &&
sortArrayObjectProperty(1) === "invalid input" &&
sortArrayObjectProperty(true) === "invalid input" &&
sortArrayObjectProperty({}) === "invalid input" &&
sortArrayObjectProperty([]) === "invalid input"
  ? console.log("test case invalid input: passed")
  : console.log("test case invalid input: failed");
