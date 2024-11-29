// CheckmateTest.test.js

import ChessboardClass from './ChessboardClass';

// Scholar's mate
const board1 = new ChessboardClass();
board1.setActiveColor("b");
board1.setBoard([
    ["r", "n", "b", "q", "k", "", "", "r"],
    ["p", "p", "p", "p", "", "Q", "p", "p"],
    ["", "", "", "", "", "n", "", ""],
    ["", "", "b", "", "p", "", "", ""],
    ["", "", "B", "", "P", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["P", "P", "P", "P", "", "P", "P", "P"],
    ["R", "N", "B", "", "K", "", "N", "R"]
]);

// Black can escape checkmate with a rook capture
const board2 = new ChessboardClass();
board2.setActiveColor("b");
board2.setBoard([
    ["r", "n", "b", "q", "k", "r", "", ""],
    ["p", "p", "p", "p", "", "Q", "p", "p"],
    ["", "", "", "", "", "n", "", ""],
    ["", "", "b", "", "p", "", "", ""],
    ["", "", "B", "", "P", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["P", "P", "P", "P", "", "P", "P", "P"],
    ["R", "N", "B", "", "K", "", "N", "R"]
]);

// Black can escape checkmate with a knight capture
const board3 = new ChessboardClass();
board3.setActiveColor("b");
board3.setBoard([
    ["r", "n", "b", "q", "k", "", "", "r"],
    ["p", "p", "p", "p", "", "Q", "p", "p"],
    ["", "", "", "", "", "", "", "n"],
    ["", "", "b", "", "p", "", "", ""],
    ["", "", "B", "", "P", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["P", "P", "P", "P", "", "P", "P", "P"],
    ["R", "N", "B", "", "K", "", "N", "R"]
]);

// Black can escape checkmate with a bishop capture
const board4 = new ChessboardClass();
board4.setActiveColor("b");
board4.setBoard([
    ["r", "n", "b", "q", "k", "", "b", "r"],
    ["p", "p", "p", "p", "", "Q", "p", "p"],
    ["", "", "", "", "", "n", "", ""],
    ["", "", "b", "", "p", "", "", ""],
    ["", "", "B", "", "P", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["P", "P", "P", "P", "", "P", "P", "P"],
    ["R", "N", "B", "", "K", "", "N", "R"]
]);

// Black can escape checkmate with a queen capture
const board5 = new ChessboardClass();
board5.setActiveColor("b");
board5.setBoard([
    ["r", "n", "b", "q", "k", "", "q", "r"],
    ["p", "p", "p", "p", "", "Q", "p", "p"],
    ["", "", "", "", "", "n", "", ""],
    ["", "", "b", "", "p", "", "", ""],
    ["", "", "B", "", "P", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["P", "P", "P", "P", "", "P", "P", "P"],
    ["R", "N", "B", "", "K", "", "N", "R"]
]);

// Black can escape checkmate with a king capture
const board6 = new ChessboardClass();
board6.setActiveColor("b");
board6.setBoard([
    ["r", "n", "b", "q", "k", "", "", "r"],
    ["p", "p", "p", "p", "", "Q", "p", "p"],
    ["", "", "", "", "", "n", "", ""],
    ["", "", "b", "", "p", "", "", ""],
    ["", "", "", "", "P", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["P", "P", "P", "P", "", "P", "P", "P"],
    ["R", "N", "B", "", "K", "", "N", "R"]
]);

// Black can escape checkmate with a pawn capture
const board7 = new ChessboardClass();
board7.setActiveColor("b");
board7.setBoard([
    ["r", "n", "b", "q", "", "", "", "r"],
    ["", "p", "p", "p", "", "", "p", "p"],
    ["p", "", "", "", "", "n", "", ""],
    ["k", "Q", "b", "", "p", "", "", ""],
    ["", "", "B", "", "P", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["P", "P", "P", "P", "", "P", "P", "P"],
    ["R", "N", "B", "", "K", "", "N", "R"]
]);

// Black can escape checkmate by moving the king
// out of the way
const board8 = new ChessboardClass();
board8.setActiveColor("b");
board8.setBoard([
    ["r", "n", "b", "", "k", "", "", "r"],
    ["p", "p", "p", "p", "", "Q", "p", "p"],
    ["", "", "", "", "", "n", "", ""],
    ["", "", "b", "", "p", "", "", ""],
    ["", "", "B", "", "P", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["P", "P", "P", "P", "", "P", "P", "P"],
    ["R", "N", "B", "", "K", "", "N", "R"]
]);

// Black delivers back rank mate
const board9 = new ChessboardClass();
board9.setBoard([
    ["", "", "", "", "", "", "", "k"],
    ["", "", "", "", "", "", "p", "p"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "P", "P", "P"],
    ["q", "", "", "", "", "", "K", ""]
]);

// White can escape checkmate by blocking with a rook
const board10 = new ChessboardClass();
board10.setBoard([
    ["", "", "", "", "", "", "", "k"],
    ["", "", "", "", "", "", "p", "p"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "R", "P", "P", "P"],
    ["q", "", "", "", "", "", "K", ""]
]);

// White can escape checkmate by blocking with a knight
const board11 = new ChessboardClass();
board11.setBoard([
    ["", "", "", "", "", "", "", "k"],
    ["", "", "", "", "", "", "p", "p"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "N", "", ""],
    ["", "", "", "", "", "P", "P", "P"],
    ["q", "", "", "", "", "", "K", ""]
]);

// White can escape checkmate by blocking with a bishop
const board12 = new ChessboardClass();
board12.setBoard([
    ["", "", "", "", "", "", "", "k"],
    ["", "", "", "", "", "", "p", "p"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["B", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "P", "P", "P"],
    ["q", "", "", "", "", "", "K", ""]
]);

// White can escape checkmate by blocking with a queen
const board13 = new ChessboardClass();
board13.setBoard([
    ["", "", "", "", "", "", "", "k"],
    ["", "", "", "", "", "", "p", "p"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "Q", "", "", "", "", "", ""],
    ["", "", "", "", "", "P", "P", "P"],
    ["q", "", "", "", "", "", "K", ""]
]);

// White can escape checkmate by capturing the queen
const board14 = new ChessboardClass();
board14.setBoard([
    ["", "", "", "", "", "", "", "k"],
    ["R", "", "", "", "", "", "p", "p"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "P", "P", "P"],
    ["q", "", "", "", "", "", "K", ""]
]);

// White can escape checkmate by moving his king out of danger
const board15 = new ChessboardClass();
board15.setBoard([
    ["", "", "", "", "", "", "", "k"],
    ["", "", "", "", "", "", "p", "p"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "P", "P", ""],
    ["q", "", "", "", "", "", "K", ""]
]);

// Black is stalemated
const board16 = new ChessboardClass();
board1.setActiveColor("b");
board16.setBoard([
    ["", "", "", "", "", "", "", "k"],
    ["", "", "", "", "", "Q", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "K", ""]
]);

// Black is stalemated, and black has some extra pieces
// that cant move
const board17 = new ChessboardClass();
board17.setActiveColor("b");
board17.setBoard([
    ["n", "", "", "", "", "", "", "k"],
    ["", "", "p", "", "", "Q", "", ""],
    ["", "p", "P", "", "", "", "", ""],
    ["", "P", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "K", ""]
]);



test('Scholars mate is checkmate', () => {
    expect(board1.isMate().toBe("checkmate"));
});