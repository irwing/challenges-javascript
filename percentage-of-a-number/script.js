const porcentageANumber = (numberA, numberB) => {

    // validate is empty or not a number
    if (numberA === null || numberB === null || isNaN(numberA) || isNaN(numberB)) {
        return 'Invalid input';
    }

    return numberA * numberB / 100;
}

module.exports = porcentageANumber;