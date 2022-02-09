const removeFirstNCharacters = (str, n) => {

    // validate null or undefined
    if(str === null || typeof str === 'undefined' || str.length === 0) {
        return 'invalid input';
    }

    // validate what n is not null or undefined or not a number
    if(typeof n !== 'number') {
        return 'invalid input length';
    }

    return str.slice(n);
}

module.exports = removeFirstNCharacters;