const checkIfStringContainsString = require('./script.js');

// test case 1
(checkIfStringContainsString('cheese', 'cake') === 'cheesecake')
    ? console.log('test case 1: passed')
    : console.log('test case 1: failed');

// test case 2
(checkIfStringContainsString('lips', 's') === 'slips')
    ? console.log('test case 2: passed')
    : console.log('test case 2: failed');

// test case 3
(checkIfStringContainsString('Java', 'script') === 'Javascript')
    ? console.log('test case 3: passed')
    : console.log('test case 3: failed');

// test case 4
(checkIfStringContainsString(' think, therefore I am', 'I') === 'I think, therefore I am')
    ? console.log('test case 4: passed')
    : console.log('test case 4: failed');

// test invalid input
(
    checkIfStringContainsString() === 'Invalid input' &&
    checkIfStringContainsString(' think, therefore I am', null) === 'Invalid input'
)
    ? console.log('test invalid input: passed')
    : console.log('test invalid input: failed');

