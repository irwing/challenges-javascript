const returnPrimeNumber = require('./script.js');

// test case 1
(returnPrimeNumber(38) === 41)
    ? console.log('test case 1: passed')
    : console.log('test case 1: failed');

// test case 2
(returnPrimeNumber(7) === 7)
    ? console.log('test case 2: passed')
    : console.log('test case 2: failed');

// test case 3
(returnPrimeNumber(115) === 127)
    ? console.log('test case 3: passed')
    : console.log('test case 3: failed');

// test case 4
(returnPrimeNumber(2000) === 2003)
    ? console.log('test case 4: passed')
    : console.log('test case 4: failed');

// test case invalid input
(
    returnPrimeNumber() === 'invlaid input' &&
    returnPrimeNumber(null) === 'invlaid input' &&
    returnPrimeNumber("abcd") === 'invlaid input' &&
    returnPrimeNumber(true) === 'invlaid input'
)
    ? console.log('test case invalid input: passed')
    : console.log('test case invalid input: failed');