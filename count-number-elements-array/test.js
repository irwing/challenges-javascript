const countNumberElementsArray = require('./script.js');

// test case 1
(countNumberElementsArray([1,2,2,4]) === 4)
    ? console.log('test case 1: passed')
    : console.log('test case 1: failed');

// test case 2
(countNumberElementsArray([9,9,9]) === 3)
    ? console.log('test case 2: passed')
    : console.log('test case 2: failed');

// test case 3
(countNumberElementsArray([4,3,2,1,0]) === 5)
    ? console.log('test case 3: passed')
    : console.log('test case 3: failed');

// test invalid input
(
    countNumberElementsArray(null) === 'invalid input array' &&
    countNumberElementsArray(undefined) === 'invalid input array' &&
    countNumberElementsArray(true) === 'invalid input array' &&
    countNumberElementsArray('false') === 'invalid input array' &&
    countNumberElementsArray('') === 'invalid input array' &&
    countNumberElementsArray({}) === 'invalid input array' &&
    countNumberElementsArray([]) === 0
)
    ? console.log('test invalid input: passed')
    : console.log('test invalid input: failed');