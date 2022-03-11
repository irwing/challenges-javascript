const getNthCharacterString = require("./script.js");

// Test case 1
getNthCharacterString("abcd", 1) == "a" ? console.log("test case 1: passed") : console.log("test case 1: failed");

// Test case 2
getNthCharacterString("zyxbwpl", 5) == "w" ? console.log("test case 2: passed") : console.log("test case 2: failed");

// Test case 3
getNthCharacterString("gfedcba", 3) == "e" ? console.log("test case 3: passed") : console.log("test case 3: failed");

// Test case invalid input string
getNthCharacterString(null, 1) == "Invalid input string" &&
getNthCharacterString(1, 1) == "Invalid input string" &&
getNthCharacterString(false, 1) == "Invalid input string"
  ? console.log("test case invalid input string: passed")
  : console.log("test case invalid input string: failed");

// Test case invalid input index search
getNthCharacterString("abcd") == "Invalid input index search" &&
getNthCharacterString("abcd", "a") == "Invalid input index search" &&
getNthCharacterString("abcd", false) == "Invalid input index search"
  ? console.log("test case invalid input index search: passed")
  : console.log("test case invalid index search: failed");
