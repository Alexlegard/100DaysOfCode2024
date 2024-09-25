//TODO: Implement checkmate detection and end the game
//TODO: 1) Create the isCheckmateOrStalemate function
//TODO: 2) isCheckmateOrStalemate calls findAValidMove to make sure there's at least
//TODO: one valid move for the current player.
//TODO: 3) This function tries every square until it finds a piece belonging to
//TODO: that player. Then it calls the function getAllPossibleMovesForPiece.
//TODO: 4) Depending on which piece it is passed, getAllPossibleMovesForPiece calls
//TODO: the piece-specific function getAllPossiblePawnMoves, getAllPossibleRookMoves,
//TODO: and so forth.
//TODO: 5) I'll think about the specific details of these piece-specific functions later.