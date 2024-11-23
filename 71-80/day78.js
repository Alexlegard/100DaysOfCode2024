/*
    * Returns true if a bishop on the given square has a valid move.
    *
    * @param bishopPosition - coordinates of the bishop. eg. [2, 7] is c1.
    */
findAValidBishopMove(bishopPosition) {
    // candidateSquares should hold potential squares in the format [5, "c"]
    let candidateSquares = [];
    let rank = bishopPosition[0];
    let file = bishopPosition[1];
    let bishopLetter;
    if(this.activeColor === "w") {
        bishopLetter = "B";
    } else if(this.activeColor === "b") {
        bishopLetter = "b";
    }
    // Helper function to check if the square is in the bounds of the chessboard
    const isInBounds = (x, y) => x >= 0 && x <= 7 && y >= 0 && y <= 7;

    // Directional vectors for the bishop
    const directions = [
        [1, 1], // Down-right
        [1, -1], // Down-left
        [-1, 1], // Up-right
        [-1, -1] // Up-left
    ];

    // Iterate through each direction
    directions.forEach(([dx, dy]) => {
        let i = 1;
        while(true) {
            let newRank = rank + (i * dx);
            let newFile = file + (i * dy);
            // First check the square is on bounds
            if(!isInBounds(newRank, newFile)) {
                break;
            }
            // Second break if the bishop moves onto a friendly piece
            let pieceOnDest = this.board[newRank][newFile];
            if(pieceOnDest !== "") {
                if(sameCase(bishopLetter, pieceOnDest)) {
                    break;
                }
            }
            // Third, push to candidateSquares
            candidateSquares.push(8 - newRank, indexToLetter(newFile));

            // Fourth, break if the bishop moves onto ANY piece
            if(pieceOnDest !== "") {
                break;
            }
        }
    });

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