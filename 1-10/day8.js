// For today's problem, I had to write a function to return the 
// nth prime number with the first prime being 2.
// for example, the third prime number is 3 (2, 3, 5).

// First I wrote a simple function to test if a number is prime.

// Prime numbers are a mysterious thing in math. There is no
// prime number formula, so there's no better way than to test
// if every number is found. Every time one is found, increment
// the numPrimes variable and terminate the loop once it reaches
// a certain value.


// Returns 104743
console.log(nthPrime(10001));

function nthPrime(n) {

    let i = 2;
    let numPrimes = 0;

    while (true) {
        if (isPrime(i)) {
            numPrimes++;
        }

        if (numPrimes === n) {
            break;
        }

        i++;
    }

    return i;
}

function isPrime(n) {

    let flag = true;

    if (n === 1) {
        // 1 is prime.
        return true;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            flag = false;
        }
    }
    return flag;
}