/*
* Returns true if the path between two squares on the same rank is clear.
*
* @param board- 2d array representing the board.
* @param originalSquare- array representing the rook's original square. eg. [7, 0]
* @param destinationSquare- array representing the rook's destination. eg. [7, 2]
*/
export function isRankPathEmpty(board, originalSquare, destinationSquare) {
    debugger;
    let distance = Math.abs(originalSquare[0] - destinationSquare[0]);

    //Return true if distance between the 2 squares is 1 or 0
    if(distance < 2) {
        return true;
    }

    // Determine leftSquare and rightSquare
    let leftSquare, rightSquare;
    if(originalSquare[0] < destinationSquare[0]) {
        leftSquare = originalSquare;
        rightSquare = destinationSquare;
    } else {
        leftSquare = destinationSquare;
        rightSquare = originalSquare;
    }

    // Loop through the squares on the rank
    for( let i = leftSquare[1] + 1; i < rightSquare[1]; i++ ) {

        let leftSquareLetter = leftSquare[1];
        if (!board[leftSquareLetter][i] === "") {
            return false;
        }
    }
    return true;
}