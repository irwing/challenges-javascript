const findNextHigherNumber = require('./script.js');

// test case 1
(findNextHigherNumber(1, 23) === 23)
    ? console.log('test case 1: passed')
    : console.log('test case 1: failed');

// test case 2
(findNextHigherNumber(23, 23) === 23)
    ? console.log('test case 2: passed')
    : console.log('test case 2: failed');

// test case 3
(findNextHigherNumber(7, 3) === 9)
    ? console.log('test case 3: passed')
    : console.log('test case 3: failed');

// test case 4
(findNextHigherNumber(-5, 7) === 0)
    ? console.log('test case 4: passed')
    : console.log('test case 4: failed');

// test case invalid dividend
(
    findNextHigherNumber(null, 23) === 'invalid dividend' &&
    findNextHigherNumber(false, 23) === 'invalid dividend' &&
    findNextHigherNumber('abcd', 23) === 'invalid dividend'
)
    ? console.log('test case invalid dividend: passed')
    : console.log('test case invalid dividend: failed');

// test case invalid divisor
(
    findNextHigherNumber(23, null) === 'invalid divisor' &&
    findNextHigherNumber(23, false) === 'invalid divisor' &&
    findNextHigherNumber(23, 'abcd') === 'invalid divisor'
)
    ? console.log('test case invalid divisor: passed')
    : console.log('test case invalid divisor: failed');