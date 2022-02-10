const basicMathOperators = require('./script');

// test case 1
(basicMathOperators(6,5,4,3,2,1) === 10.5)
    ? console.log('test case 1: passed')
    : console.log('test case 1: failed');

// test case 2
(basicMathOperators(6,2,1,4,2,3) === 2744)
    ? console.log('test case 1: passed')
    : console.log('test case 1: failed');

// test case 3
(basicMathOperators(2,3,6,4,2,3) === -8)
    ? console.log('test case 1: passed')
    : console.log('test case 1: failed');

// test case invalid input
(
    basicMathOperators() === 'invalid input' &&
    basicMathOperators('string') === 'invalid input' &&
    basicMathOperators(null) === 'invalid input'
)
    ? console.log('test case invalid input: passed')
    : console.log('test case invalid input: failed');