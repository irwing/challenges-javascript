const checkIfStringContainsString = (find, string) => {
    
    // validate not empty or null
    if (
        typeof find == 'undefined' || find === '' || find === null ||
        typeof string == 'undefined' || string === '' || string === null
    ) {
        return 'Invalid input';
    }

    // validate find is in string
    return (string.indexOf(find) !== -1)
        ? `${string}${find}`
        : `${find}${string}`;
}

module.exports = checkIfStringContainsString;
