// THE MATH
// According to the Online Encyclopedia of Integer Sequences, the sequence 1, 2, 3,
// 6, 12, 60, 420, 840, 2520 is a(n) = lcm{ 1,2,...,x } where x is the n-th prime
// power. Prime numbers are the building blocks of all numbers. Every number can be
// expressed as the products of primes raised to certain powers. Every number can be
// factorized until it's prime. For example, 60 can be expressed as 2^3 * 3 * 5.
// When finding the next number in the sequence, it's a matter of finding the GCD
// between lcm(1, 2, ..., x) and x+1. Them we multiply the number by the extra
// factor. Sometimes there may not be an extra factor at all.

// THE EUCLIDIAN ALGORITHM
// This is an algorithm that I didn't know about until after I solved the problem
// and did some digging with ChatGPT. Clearly I must have solved this problem the
// hard way! The Euclidian Algorithm is an ancient algorithm for finding the
// greatest common divisor (GCD) between two numbers. Basically, the GCD of two
// numbers is the same as the GCD of the smaller number and the remainder when the
// two numbers are divided.


// THE JAVASCRIPT
// I set global variables for lcm(1, 2, ..., x), x, and factors of x. When I call
// the smallestMult function, I simply keep on incrementing x and the other globals
// until x = n.
// I made three helper functions for making a prime factors array, populating a map
// of factors of x, and populating the map of factors of inc (increment, or x+1).
// The incrementX function compares the two maps to determine if there's an extra
// prime factor in the incremented map. If there is, set the flag to true and update
// the globals later. If there's not, we only update one of the globals (x).


let lcmOfX = 2;
let x = 2;
let xFactors = [2];

console.log("The LCM of all integers from 1 to 20 is " + smallestMult(20));


function smallestMult(n) {
    while (n > x) {
        incrementX();
    }
    return lcmOfX;
}

function primeFactorize(n) {

    let factors = [];

    while (true) { // Only terminate the loop when n is prime.
        let isPrime = true;

        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) { // i is a factor of n.
                n = n / i;
                isPrime = false;
                factors.push(i);
                break;
            }
        }

        // n can only be prime when we've iterated up to sqrt(n)
        // and did not find a factor.
        if (isPrime) {
            // If n is prime, add it as a factor.
            factors.push(n);
            break;
        }
    }
    return factors;
}

function incrementX() {
    let inc = x + 1;
    let incArray = primeFactorize(inc);
    let extraFactorFlag = false;
    let extraFactor = 0;
    let incMap = populateIncMap(incArray);
    let xMap = populateXMap(xFactors);

    for (let [key, value] of incMap.entries()) {

        // If the key (factor) doesn't exist in xMap or its quantity
        // exceeds xMap, that is the extra factor so update our
        // global variables and terminate the loop
        for (let [key, value] of incMap.entries()) {
            if (xMap.get(key) === undefined) {
                extraFactorFlag = true;
                extraFactor = key;
            }
            if (xMap.get(key) !== undefined) {
                if (value > xMap.get(key)) {
                    extraFactorFlag = true;
                    extraFactor = key;
                }
            }
        }
    }
    if (extraFactorFlag) {
        lcmOfX *= extraFactor;
        x = inc;
        xFactors.push(extraFactor);
    } else {
        x = inc;
    }
}

function populateIncMap(incArray) {

    let incMap = new Map();

    for (let i = 0; i < incArray.length; i++) {

        // If the factor doesn't exist, make a new one in incMap...
        if (incMap.get(incArray[i]) === undefined) {
            incMap.set(incArray[i], 1)
        } else { // If the factor exists, increment that factor by 1...
            incMap.set(incArray[i], incMap.get(incArray[i]) + 1);
        }
    }
    return incMap;
}

function populateXMap(xFactors) {

    let xMap = new Map();

    for (let i = 0; i < xFactors.length; i++) {

        // If the factor doesn't exist, make a new one in incMap...
        if (xMap.get(xFactors[i]) === undefined) {
            xMap.set(xFactors[i], 1)
        } else { // If the factor exists, increment that factor by 1...
            xMap.set(xFactors[i], xMap.get(xFactors[i]) + 1);
        }
    }
    return xMap;
}