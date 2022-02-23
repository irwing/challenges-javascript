const incrementingLettersAlphabet = (string) => {

    // validate input is empty, null, or not a string
    if (string === '' || string === null || typeof string !== 'string') {
        return 'invalid input';
    }

    let newString = string
        .split('')
        .map(char => String.fromCharCode(char.charCodeAt(0) + 1))
        .join('');
    
    return newString;
}

module.exports = incrementingLettersAlphabet;
