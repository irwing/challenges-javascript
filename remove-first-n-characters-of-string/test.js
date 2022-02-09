const removeFirstNCharacters = require('./script');

// test case 1
(removeFirstNCharacters('abcdefg', 3) === 'defg')
    ? console.log('test case 1: passed')
    : console.log('test case 1: failed');

// test 
(removeFirstNCharacters('1234', 3) === '4')
    ? console.log('test case 2: passed')
    : console.log('test case 2: failed');

// test 
(removeFirstNCharacters('fgedcba', 3) === 'dcba')
    ? console.log('test case 3: passed')
    : console.log('test case 3: failed');

// test invalid input
(
    removeFirstNCharacters() === 'invalid input' &&
    removeFirstNCharacters(null) === 'invalid input'
)
    ? console.log('test case 4: passed')
    : console.log('test case 4: failed');

// test invalid input length
(
    removeFirstNCharacters('abcdefg') === 'invalid input length' && 
    removeFirstNCharacters('abcdefg', null) === 'invalid input length'
)
    ? console.log('test case 5: passed')
    : console.log('test case 5: failed');
