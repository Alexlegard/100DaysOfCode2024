function makePawnNonFirstMove(
    originalSquare: any[],
    destinationSquare: any[],
    board: ChessboardClass,
    onPromotionNeeded: (originalSquare: any[], destinationSquare: any[], color: string) => void
) {
    debugger;
    // Check if the move matches the pattern of a forward pawn move
    if(matchesPawnNonFirstMovePattern(originalSquare, destinationSquare, board)) {
        debugger;

        // Return if the square in front of the pawn is not empty
        if(!board.isSquareEmpty(destinationSquare[1], destinationSquare[0])) {
            return;
        }

        // Return if the move will put the player's king in danger
        if(!validateMoveSafety(board.board.map(row => [...row]), [originalSquare[0], originalSquare[1]],
            [destinationSquare[0], destinationSquare[1]], originalSquare[2], board.activeColor)) {
            return;
        }
        
        // Check if the pawn is moving to the promotion square. The board already knows whose turn it is.
        if(board.isPawnPromoting(destinationSquare[0])) {
            debugger;
            onPromotionNeeded(originalSquare, destinationSquare, board.activeColor);
            
        } else {
            debugger;
            board.movePieceToEmptySquare(originalSquare[1], originalSquare[0], destinationSquare[1], destinationSquare[0], originalSquare[2]);
            board.deselectEnPassantTarget();
            
        }
        
    }
    // Check if the move is one square forward diagonally and the destination is occupied by an enemy piece.
    else if(matchesPawnCapturePattern(originalSquare, destinationSquare, board)) {
        debugger;
        if(!validateMoveSafety(board.board.map(row => [...row]), [originalSquare[0], originalSquare[1]],
            [destinationSquare[0], destinationSquare[1]], originalSquare[2], board.activeColor)) {
            return;
        }
        if(board.isPawnPromoting(destinationSquare[0])) {
            debugger;
            onPromotionNeeded(originalSquare, destinationSquare, board.activeColor);
        }
        
        else {
            debugger;
            board.captureEnemyPiece(originalSquare[1], originalSquare[0], destinationSquare[1], destinationSquare[0], originalSquare[2]);
            board.deselectEnPassantTarget();
        }
    }
    // Check if we can make an en passant capture.
    else if(matchesEnPassantPattern(originalSquare, destinationSquare, board)) {
        if(!validateMoveSafety(board.board.map(row => [...row]), [originalSquare[0], originalSquare[1]],
            [destinationSquare[0], destinationSquare[1]], originalSquare[2], board.activeColor)) {
            return;
        }
        debugger;
        board.captureEnPassant(originalSquare, destinationSquare);
    }
}