const accessObjectProperty = (object, property) => {

    // validate input is not object or null
    if (typeof object !== 'object' || object === null) {
        return 'invalid input';
    }

    // validate input property is not null or undefined
    if (property === null || property === undefined) {
        return 'invalid input';
    }

    return object[property];
}

module.exports = accessObjectProperty;