const splitANumberIntoItsDigits = require('./script.js');

// test case 1
(JSON.stringify(splitANumberIntoItsDigits(10)) === JSON.stringify([1,0]))
    ? console.log('test case 1: passed')
    : console.log('test case 1: failed');

// test case 2
(JSON.stringify(splitANumberIntoItsDigits(931)) === JSON.stringify([9,3,1]))
    ? console.log('test case 2: passed')
    : console.log('test case 2: failed');

// test case 3
(JSON.stringify(splitANumberIntoItsDigits(193278)) === JSON.stringify([1,9,3,2,7,8]))
    ? console.log('test case 3: passed')
    : console.log('test case 3: failed');

// test case invalid input
(
    splitANumberIntoItsDigits() === 'Invalid Input' &&
    splitANumberIntoItsDigits(null) === 'Invalid Input' &&
    splitANumberIntoItsDigits('a') === 'Invalid Input'
)
    ? console.log('test case invalid input: passed')
    : console.log('test case invalid input: failed');