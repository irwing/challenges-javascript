const insertCharacterAfterEveryCharactersBackwards = (string, stringInsert) => {

    // validate input string not empty, null or not string
    if (typeof string !== 'string' || string === '' || string === null) {
        return 'invalid input string';
    }

    // validate input stringInsert not empty, null or not string
    if (typeof stringInsert !== 'string' || stringInsert === '' || stringInsert === null) {
        return 'invalid input string insert';
    }

    string = string.split('').reverse().join('');
    string = string.replaceAll(/.{3}/g, '$&' + stringInsert);
    string = string.split('').reverse().join('');

    return string;
}

module.exports = insertCharacterAfterEveryCharactersBackwards;
