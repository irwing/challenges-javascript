const getTypeOfValue = (value) => {
    
    // validate value is not empty
    if (typeof value === 'undefined') {
        return 'invalid input';
    }

    return typeof value;
}

module.exports = getTypeOfValue;
