const comparationStrictEquality = require('./script');

// test case equal not strict
(comparationStrictEquality(1, 1) === true)
    ? console.log('test case equal not strict: passed')
    : console.log('test case equal not strict: failed');

// test case not equal not strict
(comparationStrictEquality(1, 2) === false)
    ? console.log('test case not equal not strict: passed')
    : console.log('test case not equal not strict: failed');

// test case equal strict
(comparationStrictEquality(1, 1) === true)
    ? console.log('test case equal strict: passed')
    : console.log('test case equal strict: failed');

// test case invalid input
(comparationStrictEquality() === false)
    ? console.log('test case invalid input: passed')
    : console.log('test case invalid input: failed');