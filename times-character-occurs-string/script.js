const timesCharacterOccursString = (find, string) => {

    // validate inputs is empty or null
    if (
        typeof find !== 'string' || typeof string !== 'string' ||
        string === '' || string === null ||
        find === '' || find === null
        
    ) {
        return 'Invalid input';
    }

    // count occurs of find in string
    let counter = string.split(find).length - 1;

    // return count
    return counter;
}

module.exports = timesCharacterOccursString;
