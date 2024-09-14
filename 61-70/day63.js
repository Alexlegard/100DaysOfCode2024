/*
* Returns true if the proposed en passant is safe and doesn't put the player's king in danger.
*
* @param originalSquare- the pawn's starting square
* @param destinationSquare- The pawn's destination
*/
function validateEnPassantSafety(board, originalSquare, destinationSquare, activePlayer) {
    let originalRankIndex = 8 - originalSquare[0];
    let originalFileIndex = originalSquare[1].charCodeAt(0) - 97;
    let destinationRankIndex = 8 - destinationSquare[0];
    let destinationFileIndex = destinationSquare[1].charCodeAt(0) - 97;

    // Clear the original square
    board[originalRankIndex][originalFileIndex] = "";
    // Place a pawn on the destination square
    if(activePlayer === "w") {
        board[destinationRankIndex][destinationFileIndex] = "P";
    } else if(activePlayer === "b") {
        board[destinationRankIndex][destinationFileIndex] = "p";
    }
    // Derive the location of the pawn being captured, and clear that square
    board[originalRankIndex][destinationFileIndex] = "";

    return true;
}