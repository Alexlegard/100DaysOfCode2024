//ROSETTA CODE #1: 100 Doors

// There are 100 doors and all of the doors are initially
// closed. The first time you pass through the doors, pass
// through every door. When you pass through a door, you
// toggle the door, opening it if it's closed or closing it
// if it's open. The second time you pass the doors, pass
// through every second door. The third time you pass the
// doors pass through every third door. Follow this pattern
// until the last pass when you pass through every n doors
// which is the total number of doors.

// The number of toggles for each door is equal to its
// number of factors. If there's an even number of factors,
// the door should be closed but if there's an odd number
// of factors, it should be open. With just this simple
// observation, I found the solution to be extremely
// intuitive. Funny enough, I think I remember this problem
// from middle school...

let doors = getFinalOpenedDoors(100);
console.log(doors);

// Function that returns an array of all of the opened doors.
// Start with an empty array. Loop from one to numDoors.
// For each doors, call the numFactors function. If it has
// an odd number of factors, the door is open. If it has
// an even number of factors, the door is closed.
function getFinalOpenedDoors(numDoors) {

    let results = [];
    let factors = 0;

    for (let i = 1; i <= numDoors; i++) {
        factors = numFactors(i);
        if (factors % 2 !== 0) {
            // Door is open, so push it into the array
            results.push(i);
        }
    }

    return results;
}

// Function that returns the number of factors in a number
function numFactors(n) {

    if (n === 1) {
        return 1;
    }

    // Start at 1 to account for the number itself which is
    // always a factor of itself.
    let count = 1;

    for (let i = 1; i <= n / 2; i++) {
        if (n % i === 0) {
            //console.log("Counting " + i + "!");
            count++;
        }
    }

    //console.log("Counting " + n + "!");
    return count;
}