const removeLastNCharactersOfString = (str, n) => {

    // validate string is not empty or undefined or null
    if(str === null || typeof str === 'undefined' || str.length === 0) {
        return 'invalid input';
    }

    // validate what n is not null or undefined or not a number
    if(n === null || typeof n === 'undefined' || isNaN(n)) {
        return 'invalid input length';
    }

    return str.slice(0, -n);
}

module.exports = removeLastNCharactersOfString;