// Problem is problem 4 on Project Euler
// I started by making the isPalindrome function because I knew that would be useful.
// I loop through all the pairs of x and y in an optimised way from greatest to least
// It's not actually a true greatest to least sequence, so I do actually have to loop
// through all of the pairs.




console.log(largestPalindromeProduct(3));
largestPalindromeProduct(2);

function largestPalindromeProduct(n) {

    let max = Math.pow(10, n) - 1;
    let highestPalindrome = 0;

    for (let x = max; x > 0; x--) {
        for (let y = max; y >= x; y--) {
            //console.log("X: " + x + ". Y: " + y + ". Product: " + x*y);
            let product = x * y;
            if (isPalindrome(product)) {
                if (product > highestPalindrome) {
                    highestPalindrome = product;
                }
            }
        }
    }

    return highestPalindrome;
}

function isPalindrome(n) {

    let nStr = n.toString();
    let reverse = n.toString()
        .split('')
        .reverse()
        .join('');

    if (nStr === reverse) {
        return true;
    }
    return false;
}