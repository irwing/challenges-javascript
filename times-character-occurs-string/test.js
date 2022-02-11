const timesCharacterOccursString = require('./script.js');

console.log(timesCharacterOccursString('m', 'how many times does the character occur in this sentence?'));

// test case 1
(timesCharacterOccursString('m', 'how many times does the character occur in this sentence?') === 2)
    ? console.log('test case 1: Passed')
    : console.log('test case 1: Failed');

// test case 2
(timesCharacterOccursString('h', 'how many times does the character occur in this sentence?') === 4)
    ? console.log('test case 2: Passed')
    : console.log('test case 2: Failed');

// test case 3
(timesCharacterOccursString('?', 'how many times does the character occur in this sentence?') === 1)
    ? console.log('test case 3: Passed')
    : console.log('test case 3: Failed');

// test case 4
(timesCharacterOccursString('z', 'how many times does the character occur in this sentence?') === 0)
    ? console.log('test case 4: Passed')
    : console.log('test case 4: Failed');

// test case invalid input
(
    timesCharacterOccursString('', 'how many times does the character occur in this sentence?') === 'Invalid input' &&
    timesCharacterOccursString(null, 'how many times does the character occur in this sentence?') === 'Invalid input' &&
    timesCharacterOccursString() === 'Invalid input'
)
    ? console.log('test case invalid input: Passed')
    : console.log('test case invalid input: Failed');