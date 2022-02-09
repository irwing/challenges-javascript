const convertArrayToObjectWithCounter = require('./script');

// test case 1
(JSON.stringify(convertArrayToObjectWithCounter([1,2,2,3])) == JSON.stringify({1:1,2:2,3:1}))
    ? console.log('test case 1: passed')
    : console.log('test case 1: failed');

// test case 2
(JSON.stringify(convertArrayToObjectWithCounter([9,9,9,99])) == JSON.stringify({9:3,99:1}))
    ? console.log('test case 2: passed')
    : console.log('test case 2: failed');

// test case 3
(JSON.stringify(convertArrayToObjectWithCounter([4,3,2,1])) == JSON.stringify({1:1,2:1,3:1,4:1}))
    ? console.log('test case 3: passed')
    : console.log('test case 3: failed');

// test case invalid input
(
    convertArrayToObjectWithCounter('abc') == 'invalid input' &&
    convertArrayToObjectWithCounter(123) == 'invalid input' &&
    convertArrayToObjectWithCounter(true) == 'invalid input' &&
    convertArrayToObjectWithCounter(null) == 'invalid input' &&
    convertArrayToObjectWithCounter() == 'invalid input' && 
    convertArrayToObjectWithCounter({}) == 'invalid input' &&
    convertArrayToObjectWithCounter([]) == 'invalid input'
)
    ? console.log('test case invalid input: passed')
    : console.log('test case invalid input: failed');