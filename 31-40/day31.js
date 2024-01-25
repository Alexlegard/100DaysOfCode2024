// More Project Euler, trying to calculate the first triangle number
// that has more than n factors. Still an incomplete solution because
// I'm tired. It's technically correct but it's taking too long for
// the computer to calculate. A more efficient solution would have
// an efficient prime factorization function, then I would derive
// the number of factors from different combinations of the prime
// factors.


/* Program that calculates the first triangle number that has more
than n divisors. */

let n = 374;
console.log("The first triangle number with over " + n + " factors is " + divisibleTriangleNumber(n));

function divisibleTriangleNumber(n) {

    let i = 1;
    let inc = 2;
    while (true) {
        console.log("Calling countFactors(" + i + ")");
        // Do some work
        if (countFactors(i) > n) {
            return i;
        }

        i += inc;
        inc += 1;
    }
}

// Returns the number of factors of n, including 1 and n
function countFactors(n) {
    let numFactors = 1; // Start at 1 to include n itself as a factor
    for (let i = 1; i <= n / 2; i++) {
        if (n % i === 0) {
            numFactors++;
        }
    }
    return numFactors;
}