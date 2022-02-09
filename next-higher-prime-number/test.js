const getNextPrimeNumber = require('./script');

// test case 1
(getNextPrimeNumber(38) === 41)
    ? console.log('test case 1: passed')
    : console.log('test case 1: failed');

// test case 2
(getNextPrimeNumber(7) === 11)
    ? console.log('test case 2: passed')
    : console.log('test case 2: failed');

// test case 3
(getNextPrimeNumber(115) === 127)
    ? console.log('test case 3: passed')
    : console.log('test case 3: failed');

// test case 4
(getNextPrimeNumber(2000) === 2003)
    ? console.log('test case 4: passed')
    : console.log('test case 4: failed');

// test case invalid input
(
    getNextPrimeNumber(null) === 'invalid input' &&
    getNextPrimeNumber(NaN) === 'invalid input' &&
    getNextPrimeNumber(undefined) === 'invalid input' &&
    getNextPrimeNumber('') === 'invalid input' &&
    getNextPrimeNumber('abc') === 'invalid input' &&
    getNextPrimeNumber(true) === 'invalid input' &&
    getNextPrimeNumber(false) === 'invalid input' &&
    getNextPrimeNumber(2.3) === 'invalid input'
)
    ? console.log('test case invalid input: passed')
    : console.log('test case invalid input: failed');