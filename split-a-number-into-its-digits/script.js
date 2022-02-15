const splitANumberIntoItsDigits = (number) => {
    
    // vaidate is empty, null or not a number
    if (number === '' || number === null || isNaN(number)) {
        return 'Invalid Input';
    }

    return number.toString().split('').map(Number);
}

module.exports = splitANumberIntoItsDigits;
