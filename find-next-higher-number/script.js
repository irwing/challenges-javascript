const findNextHigherNumber = (dividend, divisor) => {

    //validate if dividend is empty, null, boolean, or not number
    if (dividend === null || dividend === undefined || dividend === false || isNaN(dividend)) {
        return 'invalid dividend';
    }

    //validate if divisor is empty, null, boolean, or not number
    if (divisor === null || divisor === undefined || divisor === false || isNaN(divisor)) {
        return 'invalid divisor';
    }

    while(dividend % divisor !== 0) {
        dividend++;
    }

    return dividend;
}

module.exports = findNextHigherNumber;
