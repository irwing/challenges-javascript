const checkIfNumberIsEven = require('./script.js');

// Test case 1
(checkIfNumberIsEven(10) === true)
    ? console.log('Test case 1: passed')
    : console.log('Test case 1: failed');

// Test case 2
(checkIfNumberIsEven(-4) === true)
    ? console.log('Test case 2: passed')
    : console.log('Test case 2: failed');

// Test case 3
(checkIfNumberIsEven(5) === false)
    ? console.log('Test case 3: passed')
    : console.log('Test case 3: failed');

// Test case 4
(checkIfNumberIsEven(-111) === false)
    ? console.log('Test case 4: passed')
    : console.log('Test case 4: failed');

// Test case invalid input
(
    checkIfNumberIsEven('') === 'Invalid input' &&
    checkIfNumberIsEven('a') === 'Invalid input' &&
    checkIfNumberIsEven() === 'Invalid input'
)
    ? console.log('Test case invalid input: passed')
    : console.log('Test case invalid input: failed');