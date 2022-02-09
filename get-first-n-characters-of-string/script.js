const getFirstNCharactersOfString = (string, n) => {

    // validate string is not empty or undefined or null
    if(string === null || typeof string === 'undefined' || string.length === 0) {
        return 'invalid input';
    }
    
    // validate length is not null or undefined or not a number
    if(typeof n !== 'number') {
        return 'invalid input length';
    }

    return string.slice(0, n);
}

module.exports = getFirstNCharactersOfString;