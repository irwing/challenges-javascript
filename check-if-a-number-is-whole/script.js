const checkIfANumberIsWhole = (number) => {
    
    // validate input is empty or null
    if (number === null || number === undefined || number === '') {
        return 'Invalid input';
    }

    // validate number integer
    return (number % 1 !== 0) ? false : true;
}

module.exports = checkIfANumberIsWhole;
