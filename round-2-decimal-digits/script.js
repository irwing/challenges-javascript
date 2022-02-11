const round2DecimalDigits = (number) => {
    
    // validate is empty or not a number
    if (number === '' || isNaN(number)) {
        return 'Invalid input';
    }

    return Number(number.toFixed(2));
}

module.exports = round2DecimalDigits;
