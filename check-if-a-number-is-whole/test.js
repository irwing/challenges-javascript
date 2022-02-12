const checkIfANumberIsWhole = require('./script.js');

// test case 1
(checkIfANumberIsWhole(4) === true )
    ? console.log('test case 1: passed')
    : console.log('test case 1: failed');

// test case 2
(checkIfANumberIsWhole(1.123) === false )
    ? console.log('test case 2: passed')
    : console.log('test case 2: failed');

// test case 3
(checkIfANumberIsWhole(1048) === true )
    ? console.log('test case 3: passed')
    : console.log('test case 3: failed');

// test case 4
(checkIfANumberIsWhole(10.48) === false )
    ? console.log('test case 4: passed')
    : console.log('test case 4: failed');

// test invalid input
(
    checkIfANumberIsWhole('') === 'Invalid input' &&
    checkIfANumberIsWhole(null) === 'Invalid input' &&
    checkIfANumberIsWhole() === 'Invalid input'
)
    ? console.log('test invalid input: passed')
    : console.log('test invalid input: failed');