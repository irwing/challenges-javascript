const sum = (a, b) => {
    if(isNaN(a) || isNaN(b)) {
        return "Invalid input";
    }

    const result = a + b;
    return result;
};

console.log(sum(1, "a"));