const isPrime = (number) => {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
};


const returnPrimeNumber = (number) => {
    
    // validate if input is empty, null, bollean or not a number
    if (number === null || number === undefined || typeof number !== 'number') {
        return 'invlaid input';
    }

    if(isPrime(number)) {
        return number;
    } else {
        while (!isPrime(number)) {
            number++;
        }

        return number;
    }
}

module.exports = returnPrimeNumber;
