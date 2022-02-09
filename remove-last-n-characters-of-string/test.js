const removeLastNCharactersOfString = require('./script');

// test case 1
(removeLastNCharactersOfString('abcdefg', 3) === 'abcd')
    ? console.log('test case 1: passed')
    : console.log('test case 1: failed');

// test case 2
(removeLastNCharactersOfString('1234', 3) === '1')
    ? console.log('test case 2: passed')
    : console.log('test case 2: failed');

// test case 3
(removeLastNCharactersOfString('fgedcba', 3) === 'fged')
    ? console.log('test case 3: passed')
    : console.log('test case 3: failed');

// test case invalid input
(removeLastNCharactersOfString(null, 3) === 'invalid input')
    ? console.log('test case invalid input: passed')
    : console.log('test case invalid input: failed');

// test case invalid input length
(removeLastNCharactersOfString('abcdefg', null) === 'invalid input length')
    ? console.log('test case invalid input length: passed')
    : console.log('test case invalid input length: failed');