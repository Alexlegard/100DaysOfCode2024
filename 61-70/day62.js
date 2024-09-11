// I might need to remake the following functions from my pathing mixin.

// isSquareEmpty(file, rank)
// isSquareOccupiedByEnemyPiece(originalFile, originalRank, destinationFile, destinationRank, piece)
// isPathEmpty(originalSquare, destinationSquare)
// isFilePathEmpty(originalSquare, destinationSquare) {
// isRankPathEmpty(originalSquare, destinationSquare) {
// isDiagonalPathEmpty(originalSquare, destinationSquare) {
// isBottomRightToTopLeftDiagonalEmpty(lowSquare, highSquare) {
// isBottomLeftToTopRightDiagonalEmpty(lowSquare, highSquare) {
// movePieceToEmptySquare(originalFile, originalRank, destinationFile, destinationRank, piece) {
// captureEnemyPiece(originalFile, originalRank, destinationFile, destinationRank, piece) {


/*
* Determine if 2 squares on the same diagonal have an empty path between them.
*
* @param board- 2d array representing the board.
* @param originalSquare- Array representing the original square.       eg. [1, "f"]
* @param destinationSquare- Array representing the destination square. eg. [4, "c"]
*/
function isDiagonalPathEmpty(board, originalSquare, destinationSquare) {
    let distance = Math.abs(originalSquare[0] - destinationSquare[0]);

    if(distance < 2) {
        return true;
    }

    let lowSquare, highSquare;

    // If originalSquare[0] is greater, that means the bishop's starting square is
    // nearer to the first rank, since originalSquare[0] = 0 starts at the top of
    // the board and moves down.
    if(originalSquare[0] > destinationSquare[0]) {
        lowSquare = originalSquare;
        highSquare = destinationSquare;
    } else {
        lowSquare = destinationSquare;
        highSquare = originalSquare;
    }

    // Call a different function for each direction of diagonal
    if(lowSquare[1] > highSquare[1]) {
        return this.isBottomRightToTopLeftDiagonalEmpty(board, lowSquare, highSquare);
    } else {
        return this.isBottomLeftToTopRightDiagonalEmpty(board, lowSquare, highSquare);
    }
}

/*
* Returns true if a "\" shaped diagonal is empty.
*
* @param board- 2d array representing the board.
* @param bottomRightSquare - Array representing the bottom right square. eg. [1, "f"]
* @param topLeftSquare - Array representing the top left square. eg. [4, "c"]
*/
function isBottomRightToTopLeftDiagonalEmpty(board, lowSquare, highSquare) {

    const lowFileIndex = lowSquare[1].toLowerCase().charCodeAt(0) - 97;
    const lowRankIndex = 8 - lowSquare[0];
    const highFileIndex = highSquare[1].toLowerCase().charCodeAt(0) - 97;
    const highRankIndex = 8 - highSquare[0];

    for( let rank = highRankIndex + 1, file = highFileIndex + 1; rank < lowRankIndex; rank++, file++ ) {

        let square = board[rank][file];

        // Check if the square is empty
        if (square !== "") {
            return false;
        }
    }

    return true;
}

/*
* Returns true if a "/" shaped diagonal is empty.
*
* @param board- 2d array representing the board.
* @param bottomLeftSquare - Array representing the bottom left square. eg. [1, "c"]
* @param topRightSquare - Array representing the top right square. eg. [4, "f"]
*/
function isBottomLeftToTopRightDiagonalEmpty(board, lowSquare, highSquare) {
    
    const lowFileIndex = lowSquare[1].toLowerCase().charCodeAt(0) - 97;
    const lowRankIndex = 8 - lowSquare[0];
    const highFileIndex = highSquare[1].toLowerCase().charCodeAt(0) - 97;
    const highRankIndex = 8 - highSquare[0];

    for(let rank = highRankIndex + 1, file = highFileIndex - 1; rank < lowRankIndex; rank++, file--) {

        let square = this.board[rank][file];

        if(square !== "") {
            return false;
        }
    }

    return true;
}

/*
* Returns true if the path between two squares on the same file is clear.
*
* @param board- 2d array representing the board.
* @param originalSquare- array representing the rook's original square. eg. [1, "a"]
* @param destinationSquare- array representing the rook's destination. eg. [8, "a"]
*/
function isFilePathEmpty(board, originalSquare, destinationSquare) {
    let distance = Math.abs(originalSquare[0] - destinationSquare[0]);
    
    //Return true if distance between the 2 squares is 1 or 0
    if(distance < 2) {
        return true;
    }

    // Determine lowSquare and highSquare
    let lowSquare, highSquare;
    if (originalSquare[0] > destinationSquare[0]) {
        lowSquare = originalSquare;
        highSquare = destinationSquare;
    } else {
        lowSquare = destinationSquare;
        highSquare = originalSquare;
    }

    
    //Loop through the squares on the file (column)
    for (let i = highSquare[0] + 1; i < lowSquare[0]; i++) {
        if (board[i][originalSquare[1]] !== "") {
            return false;
        }
    }
    return true;
}

/*
* Returns true if the path between two squares on the same rank is clear.
*
* @param board- 2d array representing the board.
* @param originalSquare- array representing the rook's original square. eg. [1, "a"]
* @param destinationSquare- array representing the rook's destination. eg. [1, "c"]
*/
function isRankPathEmpty(board, originalSquare, destinationSquare) {
    return true;
}