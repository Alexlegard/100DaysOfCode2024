/*
    * Returns true if a white pawn on the given square has a valid move.
    *
    * @param pawnPosition - coordinates of the pawn. eg. [0, 6] is a2.
    */
findAValidWhitePawnMove(pawnPosition) {
    let candidateSquares = [];
    
    if(pawnPosition[1] === 6) {
        // The white pawn is on the second rank, meaning it can move two squares
        candidateSquares.push([pawnPosition[0], 5]);
        candidateSquares.push([pawnPosition[0], 4]);
    }
    else {
        // The white pawn is on another rank, meaning it can only move one square.
        candidateSquares.push([pawnPosition[0], pawnPosition[1]-1]);
    }
    for(let square of candidateSquares) {
        if(validateMoveSafety(this.board, pawnPosition, [...square], "P", this.activeColor)) {
            return true;
        }
    }
    return false;
}

/*
* Returns true if a black pawn on the given square has a valid move.
*
* @param pawnPosition - coordinates of the pawn. eg. [0, 6] is a2.
*/
findAValidBlackPawnMove(pawnPosition) {
    let candidateSquares = [];

    if(pawnPosition[1] === 1) {
        // The black pawn is on the seventh rank, meaning it can move two squares
        candidateSquares.push([pawnPosition[0], 2]);
        candidateSquares.push([pawnPosition[0], 3]);
    }
    else {
        // The black pawn is on another rank, meaning it can only move one square.
        candidateSquares.push([pawnPosition[0], 2]);
    }
    for(let square of candidateSquares) {
        if(validateMoveSafety(this.board, pawnPosition, [...square], "p", this.activeColor)) {
            return true;
        }
    }
    return false;
}