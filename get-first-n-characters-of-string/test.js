const getFirstNCharactersOfString = require('./script');

// test case 1
(getFirstNCharactersOfString('abcdefg', 3) === 'abc')
    ? console.log('test case 1: passed')
    : console.log('test case 1: failed');

// test case 2
(getFirstNCharactersOfString('1234', 3) === '123')
    ? console.log('test case 2: passed')
    : console.log('test case 2: failed');

// test case 3
(getFirstNCharactersOfString('fgedcba', 3) === 'fge')
    ? console.log('test case 3: passed')
    : console.log('test case 3: failed');

// test case invalid input
(getFirstNCharactersOfString(null) === 'invalid input')
    ? console.log('test case invalid input: passed')
    : console.log('test case invalid input: failed');

// test case invalid input length
(getFirstNCharactersOfString('abcdefg', 'abc') === 'invalid input length')
    ? console.log('test case invalid input length: passed')
    : console.log('test case invalid input length: failed');