const checkIfTwoDatesEqual = require('./script.js');

// Test case 1
(checkIfTwoDatesEqual(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00')) === false)
    ? console.log('test case 1: passed')
    : console.log('test case 1: failed');

// Test case 2
(checkIfTwoDatesEqual(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00')) === true)
    ? console.log('test case 2: passed')
    : console.log('test case 2: failed');

// Test case 3
(checkIfTwoDatesEqual(new Date('2001/01/01 08:00:00'), new Date('2000/01/01 08:00:00')) === false)
    ? console.log('test case 3: passed')
    : console.log('test case 3: failed');