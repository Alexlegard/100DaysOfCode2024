/*
    * Returns true if a bishop on the given square has a valid move.
    *
    * @param bishopPosition - coordinates of the bishop. eg. [2, 7] is c1.
    */
findAValidBishopMove(bishopPosition) {
    // candidateSquares should hold potential squares in the format [5, "c"]
    let candidateSquares = [];

    // Helper function to check if the square is in the bounds of the chessboard
    const isInBounds = (x, y) => x >= 0 && x <= 7 && y >= 0 && y <= 7;

    let rank = bishopPosition[0];
    let file = bishopPosition[1];

    let bishopLetter;
    if(this.activeColor === "w") {
        bishopLetter = "B";
    } else if(this.activeColor === "b") {
        bishopLetter = "b";
    }

    // Down-right bishop moves
    for(let i = 1; isInBounds(rank + i, file + i); i++) {
        candidateSquares.push([8 - (rank + i), indexToLetter(file + i)]);
    }

    // Down-left bishop moves
    for(let i = 1; isInBounds(rank + i, file - i); i++) {
        candidateSquares.push([8 - (rank + i), indexToLetter(file - i)]);
    }

    // Up-right bishop moves
    for(let i = 1; isInBounds(rank - i, file + i); i++) {
        candidateSquares.push([8 - (rank - i), indexToLetter(file + i)]);
    }

    // Up-left bishop moves
    for(let i = 1; isInBounds(rank - i, file - i); i++) {
        candidateSquares.push([8 - (rank - i), indexToLetter(file - i)]);
    }

    for(let square of candidateSquares) {
        const convertedOriginalSquare = [8 - bishopPosition[0], indexToLetter(bishopPosition[1])];

        // convertedOriginalSquare needs to be: 5, "c"
        // convertedDestinationSquare, there's a little too many to list
        if(validateMoveSafety(this.board.map(row => [...row]), convertedOriginalSquare, square, bishopLetter, this.activeColor)) {
            return true;
        }
    }
    return false;
}