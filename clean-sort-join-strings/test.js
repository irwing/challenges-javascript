const cleanSortJoinStrings = require('./script.js');

// test case 1
(cleanSortJoinStrings('java', 'tpi%rcs') === 'Javascript')
    ? console.log('test case 1: passed')
    : console.log('test case 1: failed');

// test case 2
(cleanSortJoinStrings('c%ountry', 'edis') === 'Countryside')
    ? console.log('test case 2: passed')
    : console.log('test case 2: failed');

// test case 3
(cleanSortJoinStrings('down', 'nw%ot') === 'Downtown')
    ? console.log('test case 3: passed')
    : console.log('test case 3: failed');

// test case invalid input
(
    cleanSortJoinStrings() === 'Invalid input' &&
    cleanSortJoinStrings('hola', 123) === 'Invalid input' &&
    cleanSortJoinStrings('hola', null) === 'Invalid input'
)
    ? console.log('test case invalid input: passed')
    : console.log('test case invalid input: failed');