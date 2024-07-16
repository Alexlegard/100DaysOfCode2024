//TODO: The makePawnNonFirstMove function is called.
//TODO: Check if the move matches the pattern of a forward non first pawn move (one square forward)
//TODO: If it does: Check if the pawn reaches the promotions square: 8th rank for white, 1st rank for black.
//TODO: (Similar logic should be used if the pawn captures a piece to land on the 8th or 1st rank)
//TODO: If it does reach the promotion square:
//TODO:  -Set the promotion state saying that promotion is pending
//TODO:  -Set the state for the pending move (original square, destination square, and the letter p or P)
//TODO: Bring up the promotion UI. The user can click on a queen, rook, knight, bishop, or X (cancel).
//TODO: Once the user confirms the promotion, the relevant chessboardClass function is called. I should write
//TODO: a new function called board.promotePawn()