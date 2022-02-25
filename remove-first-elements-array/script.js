const removeNElementsArray = (array, nElementsToRemove = 3) => {
    
    // validate input
    if(!Array.isArray(array) || array.length === 0){
        return 'invalid input';
    }
    return array.slice(nElementsToRemove);
}

module.exports = removeNElementsArray;
