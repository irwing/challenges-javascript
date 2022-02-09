const getLastNCharacters = (str, n) => {

    // validate string not empty
    if(str === null || str.length === 0) {
        return "invalid input string";
    }

    // validate length
    if(n === null || n.length === 0 || isNaN(n)) {
        return "invalid input length";
    }

    return str.slice(-n);
};

module.exports = getLastNCharacters;