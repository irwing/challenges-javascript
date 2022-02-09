const extractFirstHalf = (str) => {

    // validate string is not empty or undefined or null
    if(str === null || typeof str === 'undefined' || str.length === 0) {
        return 'invalid input';
    }

    return str.slice(0, str.length / 2);
}

module.exports = extractFirstHalf;