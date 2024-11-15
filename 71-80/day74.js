/*
    * Returns true if a black pawn on the given square has a valid move.
    *
    * @param pawnPosition - coordinates of the pawn. eg. [0, 6] is a2.
    */
findAValidBlackPawnMove(pawnPosition) {
    let candidateSquares = [];

    if(pawnPosition[0] === 1) {
        // The black pawn is on the seventh rank, meaning it can move two squares
        candidateSquares.push([6, String.fromCharCode(97 + pawnPosition[1])]);
        candidateSquares.push([5, String.fromCharCode(97 + pawnPosition[1])]);
    }
    else {
        // The black pawn is on another rank, meaning it can only move one square.
        candidateSquares.push([6, pawnPosition[0]]);
    }
    let modPawnPosition = [
        8 - pawnPosition[0],
        String.fromCharCode(97 + pawnPosition[1])
    ];

    for(let square of candidateSquares) {
        if(validateMoveSafety(this.board, modPawnPosition, [...square], "p", this.activeColor)) {
            return true;
        }
    }
    return false;
}