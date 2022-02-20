const getNthElementArray = require('./script.js');

// test case 1
(getNthElementArray([1,2,3,4,5],3) === 3)
    ? console.log('test case 1: passed')
    : console.log('test case 1: failed');

// test case 2
(getNthElementArray([10,9,8,7,6],5) === 6)
    ? console.log('test case 2: passed')
    : console.log('test case 2: failed');

// test case 3
(getNthElementArray([7,2,1,6,3],1) === 7)
    ? console.log('test case 3: passed')
    : console.log('test case 3: failed');

// test case invalid input array
(
    getNthElementArray(null,1) === "invalid input array" &&
    getNthElementArray(1,1) === "invalid input array" &&
    getNthElementArray("qwerty",1) === "invalid input array"
)
    ? console.log('test case invalid input array: passed')
    : console.log('test case invalid input array: failed');

// test case invalid input search
(
    getNthElementArray([1,2,3,4,5],null) === "invalid input search" &&
    getNthElementArray([1,2,3,4,5],"qwerty") === "invalid input search" &&
    getNthElementArray([1,2,3,4,5],true) === "invalid input search" &&
    getNthElementArray([1,2,3,4,5],{}) === "invalid input search" &&
    getNthElementArray([1,2,3,4,5],[]) === "invalid input search"
)
    ? console.log('test case invalid input search: passed')
    : console.log('test case invalid input search: failed');