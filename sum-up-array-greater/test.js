const sumUpArrayGreater = require("./script.js");

// Test case 1
sumUpArrayGreater([1, 2, 3, 4, 5, 6, 7], 2) == 25 ? console.log("test case 1: passed") : console.log("test case 1: failed");

// Test case 2
sumUpArrayGreater([-10, -11, -3, 1, -4], -3) == 1 ? console.log("test case 2: passed") : console.log("test case 2: failed");

// Test case 3
sumUpArrayGreater([78, 99, 100, 101, 401], 99) == 602 ? console.log("test case 3: passed") : console.log("test case 3: failed");

// Test case invalid input array
sumUpArrayGreater(null) == "Invalid input array" &&
sumUpArrayGreater(1) == "Invalid input array" &&
sumUpArrayGreater(false) == "Invalid input array"
  ? console.log("test case invalid input array: passed")
  : console.log("test case invalid input array: failed");

// Test case invalid input number sum
sumUpArrayGreater([1, 2, 3, 4, 5, 6, 7], "a") == "Invalid input number sum" &&
sumUpArrayGreater([1, 2, 3, 4, 5, 6, 7], false) == "Invalid input number sum"
  ? console.log("test case invalid input number sum: passed")
  : console.log("test case invalid input number sum: failed");
