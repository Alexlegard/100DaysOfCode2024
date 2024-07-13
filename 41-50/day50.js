/*
    * @param originalFile - Letter representing the original square's file.
    * @param originalRank - Number representing the original square's rank (starting from 1)
    * @param destinationFile - Letter representing the destination square's file
    * @param destinationRank - Number representing the destination square's rank (starting from 1)
    * @param piece - Letter representing the piece. A capital letter is a white piece while a
    *   lowercase letter is a black piece.
    * 
    * The logic for capturing an enemy piece, in theory should be the same as moving to an empty square.
    */
captureEnemyPiece(originalFile, originalRank, destinationFile, destinationRank, piece) {
    // Convert letter into a numeric value
    const originalFileIndex = originalFile.toLowerCase().charCodeAt(0) - 97;
    const destinationFileIndex = destinationFile.toLowerCase().charCodeAt(0) - 97;

    // Correctly calculate the index for the ranks as well
    const originalRankIndex = 8 - originalRank;
    const destinationRankIndex = 8 - destinationRank;

    // Whenever we move a piece, we turn the square it occupied into an empty square.
    this.board[originalRankIndex][originalFileIndex] = "";

    // Then we have to change the destination square to "piece"
    this.board[destinationRankIndex][destinationFileIndex] = piece;

    // Whenever we move a piece, we also need to make sure we're performing a halfmove.
    this.nextHalfmove();

    this.constructFenString();
    return;
}