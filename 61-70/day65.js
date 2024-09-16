/*
* Returns true if a "\" shaped diagonal is empty.
*
* @param board- 2d array representing the board.
* @param bottomRightSquare - Array representing the bottom right square. eg. [7, 6]
* @param topLeftSquare - Array representing the top left square. eg. [3, 2]
*/
function isBottomRightToTopLeftDiagonalEmpty(board, lowSquare, highSquare) {
    debugger;
    alert(`${board} ${lowSquare} ${highSquare}`);

    for( let rank = highSquare[0] + 1, file = highSquare[1] + 1; rank < lowSquare[0]; rank++, file++ ) {

        let square = board[rank][file];

        // Check if the square is empty
        if (square !== "") {
            return false;
        }
    }

    return true;
}

/*
* Returns true if a "/" shaped diagonal is empty.
*
* @param board- 2d array representing the board.
* @param bottomLeftSquare - Array representing the bottom left square. eg. [7, 2]
* @param topRightSquare - Array representing the top right square. eg. [3, 6]
*/
function isBottomLeftToTopRightDiagonalEmpty(board, lowSquare, highSquare) {
    debugger;
    alert(`${board} ${lowSquare} ${highSquare}`);

    for(let rank = highSquare[0] + 1, file = highSquare[1] - 1; rank < lowSquare[0]; rank++, file--) {

        let square = board[rank][file];

        if(square !== "") {
            return false;
        }
    }

    return true;
}