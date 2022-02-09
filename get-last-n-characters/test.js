const getLastNCharacters = require('./script');

// test case 1
if(getLastNCharacters('abcdefg', 4) === 'defg') {
    console.log('test case 1 passed');
} else {
    console.log('test case 1 failed');
}

// test case 2
if(getLastNCharacters('1234', 3) === '234') {
    console.log('test case 2 passed');
} else {
    console.log('test case 2 failed');
}

// test case 3
if(getLastNCharacters('fgedcba', 1) === 'a') {
    console.log('test case 3 passed');
} else {
    console.log('test case 3 failed');
}

// test case input empty string
if(getLastNCharacters('', 1) === 'invalid input string') {
    console.log('test case invalid input string: passed');
} else {
    console.log('test case invalid input string: failed');
}

// test case input length
if(getLastNCharacters('abcdefg', null) === 'invalid input length') {
    console.log('test case invalid input length: passed');
} else {
    console.log('test case invalid input length: failed');
}