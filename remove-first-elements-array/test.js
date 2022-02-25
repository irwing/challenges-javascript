const removeNElementsArray = require('./script.js');

// Test case 1
(JSON.stringify(removeNElementsArray([1,2,3,4])) === JSON.stringify([4]))
    ? console.log('test case 1: passed')
    : console.log('test case 1: failed');

// Test case 2
(JSON.stringify(removeNElementsArray([5,4,3,2,1,0])) === JSON.stringify([2,1,0]))
    ? console.log('test case 2: passed')
    : console.log('test case 2: failed');

// Test case 3
(removeNElementsArray([99,1,1]).length === 0)
    ? console.log('test case 3: passed')
    : console.log('test case 3: failed');

// Test case invalid input
(
    removeNElementsArray('') === 'invalid input' &&
    removeNElementsArray(null) === 'invalid input' &&
    removeNElementsArray(1) === 'invalid input' &&
    removeNElementsArray(true) === 'invalid input' &&
    removeNElementsArray({}) === 'invalid input' &&
    removeNElementsArray([]) === 'invalid input'
)
    ? console.log('test case invalid input: passed')
    : console.log('test case invalid input: failed');