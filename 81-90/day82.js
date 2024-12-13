findAValidKingMove(kingPosition) {
        
    // candidateSquares should hold potential squares in the format [5, "c"]
    let candidateSquares = [];
    let rank = kingPosition[0];
    let file = kingPosition[1];
    let kingLetter;
    if(this.activeColor === "w") {
        kingLetter = "K";
    } else if(this.activeColor === "b") {
        kingLetter = "k";
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

    for (let [dx, dy] of directions) {
        let newRank = rank + dx;
        let newFile = file + dy;
    
        // Skip this direction if the square is out of bounds
        if (!isInBounds(newRank, newFile)) {
            continue;
        }
    
        let pieceOnDest = this.board[newRank][newFile];
        // Skip this direction if the square contains a friendly piece
        if (pieceOnDest !== "" && sameCase(kingLetter, pieceOnDest)) {
            continue;
        }
    
        // Add to candidateSquares if the square is valid
        candidateSquares.push([8 - newRank, indexToLetter(newFile)]);
    }

    for(let square of candidateSquares) {
        const convertedOriginalSquare = [8 - kingPosition[0], indexToLetter(kingPosition[1])];

        if(validateMoveSafety(this.board.map(row => [...row]), convertedOriginalSquare, square, kingLetter, this.activeColor)) {
            return true;
        }
    }
    
    return false;
}