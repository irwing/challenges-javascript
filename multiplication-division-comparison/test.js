const multiplicationDivisionComparisonOperators = require('./script.js');

// test case 1
(multiplicationDivisionComparisonOperators(10, 100) === 0.1)
    ? console.log('test case 1: passed')
    : console.log('test case 1: failed');

// test case 2
(multiplicationDivisionComparisonOperators(90, 45) === 4050)
    ? console.log('test case 2: passed')
    : console.log('test case 2: failed');

// test case 3
(multiplicationDivisionComparisonOperators(8, 20) === 0.4)
    ? console.log('test case 3: passed')
    : console.log('test case 3: failed');

// test case 4
(multiplicationDivisionComparisonOperators(2, 0.5) === 1)
    ? console.log('test case 4: passed')
    : console.log('test case 4: failed');

// test invalid input
(
    multiplicationDivisionComparisonOperators(1, null) === 'Invalid input' &&
    multiplicationDivisionComparisonOperators(1, 'a') === 'Invalid input' &&
    multiplicationDivisionComparisonOperators() === 'Invalid input'
) 
    ? console.log('test invalid input: passed')
    : console.log('test invalid input: failed');