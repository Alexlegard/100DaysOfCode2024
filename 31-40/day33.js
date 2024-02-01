// Project Euler #12

// This is a cool algorithm that calculates the first number that has
// more than n factors. It uses cool math logic to efficiently
// calculate the prime factorization and from there, creates an array
// of prime powers. Add 1 to each of the prime powers and multiply
// them all together.

// I'm sorry if that doesn't make much sense but I'm too tired to
// write a math thesis.

function divisibleTriangleNumber(n) {

    let i = 1;
    let inc = 2;
    while (true) {
        if (countFactors(i) > n) {
            return i;
        }

        i += inc;
        inc += 1;
    }
}

// Returns the number of factors of n, including 1 and n
function countFactors(n) {

    let primeFactors = primeFactorize(n);
    let powers = getPrimePowers(primeFactors);
    let result = 1;

    for (let i = 0; i < powers.length; i++) {
        result *= (powers[i] + 1)
    }
    return result;
}

// Returns the powers of prime factors of a number
function getPrimePowers(primeFactors) {
    let results = [];

    while (primeFactors.length > 0) {
        // Store the first variable of the array since it's already sorted
        let currentFactor = primeFactors[0];
        // Get the length of the subarray containing all occurrences of
        // the prime factor
        let count = primeFactors.filter(factor => factor === currentFactor).length;
        results.push(count);
        // Update the array
        primeFactors = primeFactors.filter(factor => factor !== currentFactor);
    }

    return results;
}

// Returns an array of prime factors
function primeFactorize(n) {

    let results = [];

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            results.push(i);
            n /= i;
            i = 1;
        }
    }
    results.push(n);
    return results;
}

let n = 100;
console.log("The first triangle number with over " + n + " factors is " + divisibleTriangleNumber(n));