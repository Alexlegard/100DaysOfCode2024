// Project Euler #11: Summation of Primes

// Problem: Find the sum of all primes from 1 to n.

// First, I made the isPrime function which I've already made
// for other prime number related problems in Project Euler.

// Then I tested every number from 1 to n to see if it's prime.

// Prime numbers are a mystery in math. There is no prime number
// formula, so the best way really is to just test every number
// with my isPrime function.

primeSummation(2000000);

function primeSummation(n) {

    let total = 0;

    for (let i = 2; i < n; i++) {
        if (isPrime(i)) {
            total += i;
        }
    }

    return total;
}

function isPrime(n) {

    let flag = true;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            // It's not prime if a factor is found.
            return false;
        }
    }
    return true;
}