// The sum of squares is 1^2 + 2^2 + ... + n^2.
// The square of sum is (1 + 2 + ... + n)^2.
// Find the difference between these two numbers.

console.log(sumSquareDifference(100));


function sumSquareDifference(n) {
    let sumSquareDiff = squareOfSum(n) - sumOfSquares(n);
    return sumSquareDiff;
}

// 1^2 + 2^2 + ... + n^2.
function sumOfSquares(n) {
    // Plug in the formula: 1/3n^3 + 1/2n^2 + 1/6n
    let x = Math.pow(n, 3) / 3 +
        Math.pow(n, 2) / 2 +
        n / 6;

    return Math.round(x);
}

// (1 + 2 + ... + n)^2
function squareOfSum(n) {
    // Plug in the formula: n = (x(x+1)/2)^2
    let x = Math.pow((n * (n + 1) / 2), 2);

    return x;
}