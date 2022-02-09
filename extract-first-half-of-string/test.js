const extractFirstHalf = require('./script');

// array tests
const test = [
    {
        input: 'abcdefg',
        expected: 'abc',
        messageSuccess: 'test case 1: passed',
        messageFail: 'test case 1: failed'
    },
    {
        input: '1234',
        expected: '12',
        messageSuccess: 'test case 2: passed',
        messageFail: 'test case 2: failed'
    },
    {
        input: 'gedcba',
        expected: 'ged',
        messageSuccess: 'test case 3: passed',
        messageFail: 'test case 3: failed'
    }
];

// run tests
test.forEach(test => {
    const result = extractFirstHalf(test.input);
    if (result === test.expected) {
        console.log(test.messageSuccess);
    } else {
        console.log(test.messageFail);
    }
});