const sum = (a, b) => {
    if(isNaN(a) || isNaN(b)) {
        return "Invalid input";
    }

    const result = a + b;
    return result;
};

module.exports = sum;