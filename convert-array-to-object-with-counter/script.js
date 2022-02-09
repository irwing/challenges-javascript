const convertArrayToObjectWithCounter = (arr) => {

    // validate is a array
    if(!Array.isArray(arr) || arr.length === 0) {
        return 'invalid input';
    }

    let obj = {};
    arr.forEach(item => (obj[item]) ? obj[item]++ : obj[item] = 1);

    return obj;
}

module.exports = convertArrayToObjectWithCounter;