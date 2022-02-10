const basicMathOperators = require('./script.js');

// test case 1
(basicMathOperators(6, 5, 4, 3, 2, 1) === 10.5)
    ? console.log('test case 1: passed')
    : console.log('test case 1: failed');

// test case 2
(basicMathOperators(6, 2, 1, 4, 2, 3) === 2744)
    ? console.log('test case 2: passed')
    : console.log('test case 2: failed');

// test case 3
(basicMathOperators(2, 3, 6, 4, 2, 3) === -8)
    ? console.log('test case 3: passed')
    : console.log('test case 3: failed');

// test case invalid input
(
    basicMathOperators(null, null, null, null, null, null) === 'Invalid Input' &&
    basicMathOperators(6, 2, 1, 4, 2, 'a') === 'Invalid Input'
)
    ? console.log('test case invalid input: passed')
    : console.log('test case invalid input: failed');