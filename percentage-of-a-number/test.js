const porcentageANumber = require('./script');

// test case 1
(porcentageANumber(100,50) === 50)
    ? console.log('test case 1: passed')
    : console.log('test case 1: failed');

// test case 2
(porcentageANumber(10,1) === 0.1)
    ? console.log('test case 2: passed')
    : console.log('test case 2: failed');

// test case 3
(porcentageANumber(500,25) === 125)
    ? console.log('test case 3: passed')
    : console.log('test case 3: failed');

// test invalid input
(
    porcentageANumber() === 'Invalid input' &&
    porcentageANumber(100) === 'Invalid input' &&
    porcentageANumber(100, 'a') === 'Invalid input' &&
    porcentageANumber('a', 100) === 'Invalid input' &&
    porcentageANumber(100, null) === 'Invalid input' &&
    porcentageANumber(null, null) === 'Invalid input'
)
    ? console.log('test case invalid input: passed')
    : console.log('test case invalid input: failed');