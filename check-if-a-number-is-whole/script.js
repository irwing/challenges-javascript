const checkIfANumberIsWhole = (number) => {
    
    // validate input is empty or null
    if (number === null || number === undefined || number === '') {
        return 'Invalid input';
    }

    // validate number integer
    return (number - Math.floor(number) === 0) ? true : false;
}

module.exports = checkIfANumberIsWhole;
