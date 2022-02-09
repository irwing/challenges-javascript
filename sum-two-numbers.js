const sum = (a, b) => {
    if(isNaN(a) || isNaN(b)) {
        return "Invalid input";
    }

    const result = a + b;
    return result;
};

// test case two integers
if(sum(1, -2) === 3) {
    console.log("Test sum two integers: passed");
} else {
    console.log("Test sum two integers: failed");
}

// test case two floats
if(sum(0.3, 2.7) === 3) {
    console.log("Test sum two floats: passed");
} else {
    console.log("Test sum two floats: failed");
}

// test case 1 number and 1 string
if(sum(10, "a") === "Invalid input") {
    console.log("Test sum invalid input: passed");
} else {
    console.log("Test sum invalid input: failed");
}