const countNumberElementsArray = (array) => {
    
    // validate input is empty, null or not an array
    if (array === null || array === undefined || !Array.isArray(array)) {
        return ("invalid input array");
    }
    
    return array.length;
}

module.exports = countNumberElementsArray;
