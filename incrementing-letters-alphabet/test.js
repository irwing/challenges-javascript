const incrementingLettersAlphabet = require('./script.js');

// Test case 1
(incrementingLettersAlphabet('bnchmf') === 'coding')
    ? console.log('test case 1: passed')
    : console.log('test case 1: failed');

// Test case 2
(incrementingLettersAlphabet('bgddrd') === 'cheese')
    ? console.log('test case 2: passed')
    : console.log('test case 2: failed');

// Test case 3
(incrementingLettersAlphabet('sdrshmf') === 'testing')
    ? console.log('test case 3: passed')
    : console.log('test case 3: failed');

// Test case invalid input
(
    incrementingLettersAlphabet('') === 'invalid input' &&
    incrementingLettersAlphabet(null) === 'invalid input' &&
    incrementingLettersAlphabet(1) === 'invalid input' &&
    incrementingLettersAlphabet(true) === 'invalid input' &&
    incrementingLettersAlphabet({}) === 'invalid input' &&
    incrementingLettersAlphabet([]) === 'invalid input'
)
    ? console.log('test case invalid input: passed')
    : console.log('test case invalid input: failed');