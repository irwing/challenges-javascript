const comparationStrictEquality = (a, b) => {

    // validate invalid input
    if (a === undefined || b === undefined) {
        return false;
    }

    if (a === b) {
        return true;
    }
    return false;
}

module.exports = comparationStrictEquality;