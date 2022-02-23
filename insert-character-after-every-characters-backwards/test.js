const insertCharacterAfterEveryCharactersBackwards = require('./script.js');

// Test case 1
(insertCharacterAfterEveryCharactersBackwards('1234567','.') === '1.234.567')
    ? console.log('test case 1: passed')
    : console.log('test case 1: failed');

// Test case 2
(insertCharacterAfterEveryCharactersBackwards('abcde','$') === 'ab$cde')
    ? console.log('test case 2: passed')
    : console.log('test case 2: failed');

// Test case 3
(insertCharacterAfterEveryCharactersBackwards('zxyzxyzxyzxyzxyz','w') === 'zwxyzwxyzwxyzwxyzwxyz')
    ? console.log('test case 3: passed')
    : console.log('test case 3: failed');

// Test case invalid input string
(
    insertCharacterAfterEveryCharactersBackwards(null,'.') === 'invalid input string' &&
    insertCharacterAfterEveryCharactersBackwards(true,'.') === 'invalid input string' &&
    insertCharacterAfterEveryCharactersBackwards(0,'.') === 'invalid input string' &&
    insertCharacterAfterEveryCharactersBackwards([],'.') === 'invalid input string' &&
    insertCharacterAfterEveryCharactersBackwards({},'.') === 'invalid input string'
)
    ? console.log('test case invalid input string: passed')
    : console.log('test case invalid input string: failed');

// Test case invalid input string insert
(
    insertCharacterAfterEveryCharactersBackwards('abcde', null) === 'invalid input string insert' &&
    insertCharacterAfterEveryCharactersBackwards('abcde', true) === 'invalid input string insert' &&
    insertCharacterAfterEveryCharactersBackwards('abcde', 0) === 'invalid input string insert' &&
    insertCharacterAfterEveryCharactersBackwards('abcde', []) === 'invalid input string insert' &&
    insertCharacterAfterEveryCharactersBackwards('abcde', {}) === 'invalid input string insert'
)
    ? console.log('test case invalid input string insert: passed')
    : console.log('test case invalid input string insert: failed');