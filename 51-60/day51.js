import ChessboardClass from "../../ChessboardClass";
/*
 * @param {Array} originalSquare - Array containing the rank, then file of the pawn's home square,
 *   and the letter p or P
 * @param {Array} destinationSquare - Array containing the rank, file, and piece occupying the destination square
 * @param {Chessboard} board - Chessboard instance representing the current board state
 * @returns {Void}
 * 
 */
export const movePawn = (originalSquare: any[], destinationSquare: any[], board: ChessboardClass): void => {
    debugger;
    // Determine if it's the pawn's first move.
    let pawnCanMoveTwoSquares = false;
    const whitePawnOnSecondRank = originalSquare[0] === '2' && board.activeColor === "w";
    const blackPawnOnSeventhRank = originalSquare[0] === '7' && board.activeColor === "b";

    if(whitePawnOnSecondRank || blackPawnOnSeventhRank) {
        pawnCanMoveTwoSquares = true;
    }

    if(pawnCanMoveTwoSquares) {
        debugger;
        makePawnFirstMove(originalSquare, destinationSquare, board);
    }
    else {
        debugger;
        makePawnNonFirstMove(originalSquare, destinationSquare, board);
    }
}

function makePawnFirstMove(originalSquare, destinationSquare, board) {
    debugger;
    // Check if the move matches the pattern of a forward pawn move.
    if(matchesPawnFirstMovePattern(originalSquare, destinationSquare, board)) {
        debugger;
        // Check if the two squares in front of the pawn are empty
        if(board.isSquareEmpty(destinationSquare[1], destinationSquare[0]) && board.isPathEmpty(originalSquare, destinationSquare)) {
            debugger;
            board.movePieceToEmptySquare(originalSquare[1], originalSquare[0], destinationSquare[1], destinationSquare[0], originalSquare[2]);
        }
    }
    else if(matchesPawnCapturePattern(originalSquare, destinationSquare, board)) {
        debugger;
        board.captureEnemyPiece(originalSquare[1], originalSquare[0], destinationSquare[1], destinationSquare[0], originalSquare[2]);
    }
}

function makePawnNonFirstMove(originalSquare, destinationSquare, board) {
    debugger;
    // Check if the move matches the pattern of a forward pawn move
    if(matchesPawnNonFirstMovePattern(originalSquare, destinationSquare, board)) {
        
        // check if the square in front of the pawn is empty.
        if(board.isSquareEmpty(destinationSquare[1], destinationSquare[0])) {
            board.movePieceToEmptySquare(originalSquare[1], originalSquare[0], destinationSquare[1], destinationSquare[0], originalSquare[2]);
        }
    }
    else if(matchesPawnCapturePattern(originalSquare, destinationSquare, board)) {
        debugger;
        board.captureEnemyPiece(originalSquare[1], originalSquare[0], destinationSquare[1], destinationSquare[0], originalSquare[2]);
    }
}

function matchesPawnFirstMovePattern(originalSquare, destinationSquare, board) {
    debugger;
    return (originalSquare[1] === destinationSquare[1] && 
        (board.activeColor === "w" && (destinationSquare[0] - originalSquare[0] === 1 || destinationSquare[0] - originalSquare[0] === 2) ||
        board.activeColor === "b" && (destinationSquare[0] - originalSquare[0] === -1 || destinationSquare[0] - originalSquare[0] === -2)));
}

function matchesPawnNonFirstMovePattern(originalSquare, destinationSquare, board) {
    debugger;

    const fileMatches = (originalSquare[1] === destinationSquare[1]);
    const whitePawnForwardOneSquare = board.activeColor === "w" && (destinationSquare[0] - originalSquare[0] === 1);
    const blackPawnDownOneSquare = board.activeColor === "b" && (destinationSquare[0] - originalSquare[0] === -1);
    
    return (fileMatches && ( whitePawnForwardOneSquare || blackPawnDownOneSquare ));
}

function matchesPawnCapturePattern(originalSquare, destinationSquare, board) {
    debugger;

    // Return false if destination square does not have a capturable piece
    if(!board.isSquareOccupiedByEnemyPiece(originalSquare[1], originalSquare[0], destinationSquare[1], destinationSquare[0], originalSquare[2])) {
        return false;
    }

    // Convert files (letters) into numeric values which are the correct index
    const originalFileIndex = originalSquare[1].toLowerCase().charCodeAt(0) - 97;
    const destinationFileIndex = destinationSquare[1].toLowerCase().charCodeAt(0) - 97;

    const whitePawnForwardOneSquare = (destinationSquare[0] - originalSquare[0] === 1) && board.activeColor === "w";
    const blackPawnForwardOneSquare = (destinationSquare[0] - originalSquare[0] === -1) && board.activeColor === "b";
    const horizontalOneSquare = (Math.abs(destinationFileIndex - originalFileIndex) === 1);

    if(board.activeColor === "w" && whitePawnForwardOneSquare && horizontalOneSquare) {
        return true;
    }
    if(board.activeColor === "b" && blackPawnForwardOneSquare && horizontalOneSquare) {
        return true;
    }
}
















