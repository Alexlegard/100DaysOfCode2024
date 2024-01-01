// Project Euler #9: Pythagorean Triplets

// A Pythagorean triplet is three whole numbers a, b, and c such that
// a < b < c and a^2 + b^2 = c^2. For a given value n, find a Pythagorean
// triplet if one exists and return the product a * b * c.

// I simply used the outer loop to test values of a and the inner loop to
// test values of b. Then I derived the value of c using the Pythagorean
// theorem and tested if a + b + c = n.

console.log(specialPythagoreanTriplet(1000));

function specialPythagoreanTriplet(n) {
    // Pythagorean theorem: a^2 + b^2 = c^2, a < b < c.

    const maxA = Math.floor(n / 3);

    // Outer loop is to test values of a.
    for (let a = 1; a < maxA; a++) {

        // Calculate maximum value of b.
        const diff = n - a;
        const maxB = Math.floor((diff / 2) + 1);

        for (let b = a + 1; b < maxB; b++) {
            let c = Math.sqrt(a * a + b * b);

            // Test if c is an integer
            // Then test if a + b + c = n
            if (Number.isInteger(c)) {
                if (a + b + c === n) {
                    return a * b * c;
                }
            }
        }
    }


    return true;
}