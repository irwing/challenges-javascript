const round2DecimalDigits = require('./script.js');

// Test case 1
(round2DecimalDigits(2.12397) === 2.12)
    ? console.log('Test case 1: passed')
    : console.log('Test case 1: failed');

// Test case 2
(round2DecimalDigits(3.136) === 3.14)
    ? console.log('Test case 2: passed')
    : console.log('Test case 2: failed');

// Test case 3
(round2DecimalDigits(1.12397) === 1.12)
    ? console.log('Test case 3: passed')
    : console.log('Test case 3: failed');

// Test case 4
(round2DecimalDigits(26.1379) === 26.14)
    ? console.log('Test case 4: passed')
    : console.log('Test case 4: failed');

// Test invalid input
(
    round2DecimalDigits('a') === 'Invalid input' &&
    round2DecimalDigits() === 'Invalid input'
)
    ? console.log('Test invalid input: passed')
    : console.log('Test invalid input: failed');