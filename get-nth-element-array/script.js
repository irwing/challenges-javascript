const getNthElementArray = (array, search) => {

    // validate input is empty, null or not an array
    if (array === null || array === undefined || !Array.isArray(array)) {
        return ("invalid input array");
    }

    // validate input is empty, null or not number
    if (search === null || search === undefined || typeof search !== 'number') {
        return ("invalid input search");
    }

    return array[search-1];
}

module.exports = getNthElementArray;
