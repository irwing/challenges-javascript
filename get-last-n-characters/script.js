const getLastNCharacters = (str, n) => {

    // validate string not empty
    if(str === null || str.length === 0) {
        return "invalid input string";
    }

    // validate length
    if(typeof n !== 'number') {
        return "invalid input length";
    }

    return str.slice(-n);
};

module.exports = getLastNCharacters;