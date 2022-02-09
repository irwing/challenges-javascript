const accessObjectProperty = require('./script');

const objectTest1 = { continent: 'Asia',  country: 'Japan' };
const objectTest2 = { country: 'Sweden',  continent: 'Europe' };

// test case 1
(accessObjectProperty(objectTest1, 'country') === 'Japan')
    ? console.log('test case 1: passed')
    : console.log('test case 1: failed');

// test case 2
(accessObjectProperty(objectTest2, 'country') === 'Sweden')
    ? console.log('test case 2: passed')
    : console.log('test case 2: failed');

// test case invalid input
(
    accessObjectProperty(null, 'continent') === 'invalid input' &&
    accessObjectProperty(objectTest1, null) === 'invalid input' &&
    accessObjectProperty() === 'invalid input'
)
    ? console.log('test case invalid input: passed')
    : console.log('test case invalid input: failed');