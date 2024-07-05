import ChessboardClass from "../../ChessboardClass";
/*
 * @param {Array} originalSquare - Array containing the rank and file of the knight's home square,
 *   and the letter n or N
 * @param {Array} destinationSquare - Array containing the rank, file, and piece occupying the destination square
 * @param {Chessboard} board - Chessboard instance representing the current board state
 * @returns {Void}
 * 
 */
export const moveKing = (originalSquare: any[], destinationSquare: any[], board: ChessboardClass): void => {

    debugger;

    // Calculate the rank and file difference. If rankDiff + fileDiff = 1, the king can move (horizontally)
    // If rankDiff and fileDiff are 1, the king can move (diagonally)
    const rankDiff = Math.abs(originalSquare[0] - destinationSquare[0]);
    const asciiOfOriginalFile = originalSquare[1].charCodeAt(0);
    const asciiOfDestinationFile = destinationSquare[1].charCodeAt(0);
    const fileDiff = Math.abs(asciiOfOriginalFile - asciiOfDestinationFile);

    const canMoveHorizontally = (rankDiff + fileDiff === 1);
    const canMoveDiagonally = (rankDiff === 1 && fileDiff === 1);

    if( canMoveHorizontally || canMoveDiagonally ) {
        // Check if the destination square is empty
        if(board.isSquareEmpty(destinationSquare[1], destinationSquare[0])) {
            board.movePieceToEmptySquare(originalSquare[1], originalSquare[0], destinationSquare[1], destinationSquare[0], originalSquare[2]);
        }
    }
}