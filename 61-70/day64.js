// Individually check for each of the four forms of castling.
if(originalSquareReadable === "e1" && destinationSquareReadable === "g1" &&
    board.isSquareEmpty("f", 1) && board.isSquareEmpty("g", 1) && board.whiteCanCastleKingside &&
    !canAnyBlackPieceAttackSquare(board.board.map(row => [...row]), [7, 4]) &&
    !canAnyBlackPieceAttackSquare(board.board.map(row => [...row]), [7, 5]) &&
    !canAnyBlackPieceAttackSquare(board.board.map(row => [...row]), [7, 6])
) {
    alert("Successfully checked if any black pieces can attack e1, f1, or g1.");
    board.castleWhiteKingside();
}
if(originalSquareReadable === "e1" && destinationSquareReadable === "c1" &&
    board.isSquareEmpty("c", 1) && board.isSquareEmpty("d", 1) && board.whiteCanCastleQueenside &&
    !canAnyBlackPieceAttackSquare(board.board.map(row => [...row]), [7, 4]) &&
    !canAnyBlackPieceAttackSquare(board.board.map(row => [...row]), [7, 3]) &&
    !canAnyBlackPieceAttackSquare(board.board.map(row => [...row]), [7, 2])
) {
    board.castleWhiteQueenside();
}
if(originalSquareReadable === "e8" && destinationSquareReadable === "g8" &&
    board.isSquareEmpty("f", 8) && board.isSquareEmpty("g", 8) && board.blackCanCastleKingside &&
    !canAnyWhitePieceAttackSquare(board.board.map(row => [...row]), [0, 4]) &&
    !canAnyWhitePieceAttackSquare(board.board.map(row => [...row]), [0, 5]) &&
    !canAnyWhitePieceAttackSquare(board.board.map(row => [...row]), [0, 6])
) {
    board.castleBlackKingside();
}
if(originalSquareReadable === "e8" && destinationSquareReadable === "c8" &&
    board.isSquareEmpty("c", 8) && board.isSquareEmpty("d", 8) && board.blackCanCastleQueenside &&
    !canAnyWhitePieceAttackSquare(board.board.map(row => [...row]), [0, 4]) &&
    !canAnyWhitePieceAttackSquare(board.board.map(row => [...row]), [0, 3]) &&
    !canAnyWhitePieceAttackSquare(board.board.map(row => [...row]), [0, 2])
) {
    board.castleBlackQueenside();
}
}
//TODO: Fix my castling bug
//TODO: -The first two tests, [7,4] and [7,5], seem to work fine, but it can't hurt to make sure
//TODO: I'm actually passing the right parameters.
//TODO: The third test, [7,6], crashes the app.