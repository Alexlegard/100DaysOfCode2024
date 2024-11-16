/*
    * Returns true if a knight on the given square has a valid move.
    *
    * @param knightPosition - coordinates of the knight. eg. [1, 7] is b1.
    */
findAValidKnightMove(knightPosition) {
    let candidateSquares = [];

    // Helper function to determine if the coordinates are in bounds
    const isInBounds = (x, y) => x >= 0 && x <= 7 && y >= 0 && y <= 7;

    let knightLetter;
    if(this.activeColor === "w") {
        knightLetter = "N";
    } else if(this.activeColor === "b") {
        knightLetter = "n";
    }
    let whiteKnight = knightLetter === "N";
    let blackKnight = knightLetter === "n";

    let potentialMoves = [
        [knightPosition[0] + 2, knightPosition[1] + 1],
        [knightPosition[0] + 2, knightPosition[1] - 1],
        [knightPosition[0] + 1, knightPosition[1] + 2],
        [knightPosition[0] + 1, knightPosition[1] - 2],
        [knightPosition[0] - 1, knightPosition[1] + 2],
        [knightPosition[0] - 1, knightPosition[1] - 2],
        [knightPosition[0] - 2, knightPosition[1] + 1],
        [knightPosition[0] - 2, knightPosition[1] - 1]
    ];

    for(let move of potentialMoves) {
        if(isInBounds(move[0], move[1])) {
            let thisSq = this.board[move[0]][move[1]];
            let isEmpty = move === "";
            let isUpperCase = thisSq === thisSq.toUpperCase();
            let isLowerCase = thisSq === thisSq.toLowerCase();
            
            if(whiteKnight && (isEmpty || isLowerCase)) {
                candidateSquares.push([8 - move[0], indexToLetter(move[1])]);
            }
            
            else if(blackKnight && (isEmpty || isUpperCase)) {
                candidateSquares.push([8 - move[0], indexToLetter(move[1])]);
            }
        }
    }

    for(let square of candidateSquares) {
        const convertedOriginalSquare = [8 - knightPosition[0], indexToLetter(knightPosition[1])];
        const convertedDestinationSquare = [square[0], indexToLetter(square[1])];
        if(validateMoveSafety(this.board.map(row => [...row]), convertedOriginalSquare, convertedDestinationSquare, knightLetter, this.activeColor)) {
            return true;
        }
    }
    return false;
}