const basicMathOperators = (a, b, c, d, e, f) => {
    
    // validate is empty or not a number
    if(
        a === null || isNaN(a) ||
        b === null || isNaN(b) ||
        c === null || isNaN(c) ||
        d === null || isNaN(d) ||
        e === null || isNaN(e) ||
        f === null || isNaN(f)
    ) {
        return 'invalid input';
    }

    return (((((a+b)-c)*d)/e)**f);
}

module.exports = basicMathOperators;