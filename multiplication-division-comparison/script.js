const multiplicationDivisionComparisonOperators = (numberA, numberB) => {
    
    // validate inputs empty or not a number
    if (
        numberA === '' || numberB === '' ||
        numberA === null || numberB === null ||
        isNaN(numberA) || isNaN(numberB)
    ) {
        return 'Invalid input';
    }

    return (numberA < numberB) ? numberA / numberB : numberA * numberB;
}

module.exports = multiplicationDivisionComparisonOperators;