const isPrime = (number) => {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
};

const getNextPrimeNumber = (number) => {

    // validate is number not is a integer
    if (typeof number !== 'number' || number % 1 !== 0) {
        return 'invalid input';
    }

    // validate if init number is prime
    let initNumberIsPrime = isPrime(number);

    let prime = (initNumberIsPrime) ? number + 1 : number;
    while (!isPrime(prime)) {
        prime++;
    }
    return prime;
}

module.exports = getNextPrimeNumber;