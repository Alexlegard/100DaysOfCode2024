/*
    * Returns "not mate" if there is no mate,
    * "checkmate" if active player won by checkmate,
    * or "stalemate" if active player stalemated their opponent.
    * If there is a mate, modify this.victor to log the victor
    */
isMate() {
    alert("calling isMate function");

    let isThereAValidMove = this.findAValidMove(kingPosition);

    if(!isThereAValidMove && this.isPlayerChecked()) {
        if(this.activePlayer === "w") {
            this.result = "b won by checkmate";
        } else {
            this.result = "w won by checkmate";
        }
        return "checkmate";
    }
    if(!isThereAValidMove && !this.isPlayerChecked()) {
        this.result = "stalemate";
        return "stalemate";
    }
    return "not mate";
}

/*
* Returns true if there is a legal move for active player.
*/
findAValidMove(kingPosition) {
    return true;
}

/*
* Returns true if active player's king is under attack.
*/
isPlayerChecked() {

    let kingPosition;
    if(this.activeColor === "w") {
        kingPosition = this.findWhiteKing();
        return this.isWhitePlayerChecked(kingPosition);
    } else if(this.activeColor === "b") {
        kingPosition = this.findBlackKing();
        return this.isBlackPlayerChecked(kingPosition);
    }
}

/*
* Returns true if the white player's king is under attack.
*/
isWhitePlayerChecked(kingPosition) {
    return canAnyBlackPieceAttackSquare(this.board, kingPosition);
}

/*
* Returns true if the black player's king is under attack.
*/
isBlackPlayerChecked(kingPosition) {
    return canAnyWhitePieceAttackSquare(this.board, kingPosition);
}

/*
* Returns an array containing indices of the white king's location
*/
findWhiteKing() {
    for(let i = 0; i < 8; i++) {
        for(let j = 0; j < 8; j++) {
            if(this.board[i][j] === "K") {
                return [i, j];
            }
        }
    }
    throw new Error("White King was not found.");
}

/*
* Returns an array containing indices of the black king's location
*/
findBlackKing() {
    for(let i = 0; i < 8; i++) {
        for(let j = 0; j < 8; j++) {
            if(this.board[i][j] === "k") {
                return [i, j];
            }
        }
    }
    throw new Error("Black King was not found.");
}