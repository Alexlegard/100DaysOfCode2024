/*
    * Capture an enemy piece with a pawn en passant.
    *
    * @param originalSquare    - The pawn's original square ex. [5, "b"]
    * @param destinationSquare - The pawn's destination ex. [6, "c"]
    */
captureEnPassant(originalSquare, destinationSquare) {

    // Remove the pawn behind the capturing pawn from the board.
    let rank;
    let file = destinationSquare[1].toLowerCase().charCodeAt(0) - 97;
    if(this.activeColor === "w") {
        rank = 3;
    } else {
        rank = 4;
    }
    this.board[rank][file] = "";

    // Move the capturing pawn to the correct square.
    if(this.activeColor === "w") {
        this.movePieceToEmptySquare(originalSquare[1], originalSquare[0], destinationSquare[1], destinationSquare[0], "P");
    }
    else {
        this.movePieceToEmptySquare(originalSquare[1], originalSquare[0], destinationSquare[1], destinationSquare[0], "p");
    }
    this.enPassantTarget = "-";
    this.enPassantTargetReadable = "-";
}