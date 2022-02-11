const checkIfNumberIsEven = (number) => {
    
    // validate is empty or not a number
    if (number === '' || isNaN(number)) {
        return 'Invalid input';
    }

    return number % 2 === 0;
}

module.exports = checkIfNumberIsEven;
