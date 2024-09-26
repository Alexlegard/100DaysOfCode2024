/*
    * Returns "not mate" if there is no mate,
    * "checkmate" if active player won by checkmate,
    * or "stalemate" if active player stalemated their opponent.
    * If there is a mate, modify this.victor to log the victor
    */
isMate() {
    alert("calling isMate function");

    let isThereAValidMove = this.findAValidMove();

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
findAValidMove() {
    return true;
}

/*
* Returns true if active player's king is under attack.
*/
isPlayerChecked() {
    return true;
}