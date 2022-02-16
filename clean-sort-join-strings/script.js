const cleanSortJoinStrings = (stringA, stringB) => {
    
    // validate if inputs empty, null or not string
    if (
        stringA === '' || stringA === null || typeof stringA !== 'string' || 
        stringB === '' || stringB === null || typeof stringB !== 'string'
    ) {
        return 'Invalid input';
    }

    // remove all non-alphabet characters
    const cleanStringA = stringA.replace(/[^a-zA-Z]/g, '');
    const cleanStringB = stringB.replace(/[^a-zA-Z]/g, '');

    // invert string B
    const invertedStringB = cleanStringB.split('').reverse().join('');

    // join string A and inverted string B
    const joinedString = cleanStringA + invertedStringB;

    // capitalize string
    let capitalizedString = joinedString.split('');
    capitalizedString = capitalizedString[0].toUpperCase() + capitalizedString.slice(1).join('');

    return capitalizedString;
}

module.exports = cleanSortJoinStrings;
