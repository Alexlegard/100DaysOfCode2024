/*
    * Returns true of a queen on the given square has a valid move.
    *
    * @param queenPosition - coordinates of the queen. eg. [3, 7] is d1.
    */
findAValidQueenMove(queenPosition) {
    // candidateSquares should hold potential squares in the format [5, "c"]
    let candidateSquares = [];
    let rank = queenPosition[0];
    let file = queenPosition[1];
    let queenLetter;
    if(this.activeColor === "w") {
        queenLetter = "Q";
    } else if(this.activeColor === "b") {
        queenLetter = "q";
    }

    // Directional vectors for the bishop
    const directions = [
        [1, 1], // Down-right
        [1, 0], // Down
        [1, -1], // Down-left
        [0, -1], // Left
        [-1, -1], // Up-left
        [-1, 0], // Up
        [-1, 1], // Up-right
        [0, 1] // Right
    ];

    // Iterate through each direction
    directions.forEach(([dx, dy]) => {
        let i = 1;
        while(true) {
            let newRank = rank + (i * dx);
            let newFile = file + (i * dy);
            // First check the square is in bounds
            if(!isInBounds(newRank, newFile)) {
                break;
            }
            // Second break if the piece moved onto a friendly piece
            let pieceOnDest = this.board[newRank][newFile];
            if(pieceOnDest !== "") {
                if(sameCase(queenLetter, pieceOnDest)) {
                    break;
                }
            }
            // Third, push to candidateSquares
            candidateSquares.push([8 - newRank, indexToLetter(newFile)]);

            // Fourth, break if the bishop moved onto ANY piece
            if(pieceOnDest !== "") {
                break;
            }
            i++;
        }
    });

    for(let square of candidateSquares) {
        const convertedOriginalSquare = [8 - queenPosition[0], indexToLetter(queenPosition[1])];

        if(validateMoveSafety(this.board.map(row => [...row]), convertedOriginalSquare, square, queenLetter, this.activeColor)) {
            return true;
        }
    }
    
    return false;
}