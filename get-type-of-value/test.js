const getTypeOfValue = require('./script');

// test case number
(getTypeOfValue(1) == 'number')
    ? console.log('test case number: passed')
    : console.log('test case number: failed');

// test case boolean
(
    getTypeOfValue(false) == 'boolean' &&
    getTypeOfValue(true) == 'boolean'
) 
    ? console.log('test case boolean: passed')
    : console.log('test case boolean: failed');

// test case object empty
(getTypeOfValue({}) == 'object')
    ? console.log('test case object empty: passed')
    : console.log('test case object empty: failed');

// test case null
(getTypeOfValue(null) == 'object')
    ? console.log('test case null: passed')
    : console.log('test case null: failed');

// test case string
(getTypeOfValue('string') == 'string')
    ? console.log('test case string: passed')
    : console.log('test case string: failed');

// test case array
(getTypeOfValue(['string1', 'string2']) == 'object')
    ? console.log('test case array: passed')
    : console.log('test case array: failed');

// test case input undefined
(getTypeOfValue() == 'invalid input')
    ? console.log('test case input undefined: passed')
    : console.log('test case input undefined: failed');