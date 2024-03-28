// Today I made an entire Jest test file for my Chessboard
// class and debugged the entire class!

// Declare the class
const Chessboard = require('./chessboard.js');

// Declare the instance of the class
const board = new Chessboard();

describe("Chessboard", () => {

    test('isSquareEmpty method', () => {
    
        expect(board.isSquareEmpty(1,1))
            .toBe(false);
        expect(board.isSquareEmpty(3,3))
            .toBe(true);
        expect(board.isSquareEmpty(5,8))
            .toBe(false);
    });

    test("setBoard method", () => {

        const board2Arr = [
            ["r", "n", "b", "q", "k", "b", "n", "r"],
            ["p", "p", "p", "p", "p", "p", "p", "p"],
            ["", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", ""],
            ["", "", "", "", "P", "", "", ""],
            ["", "", "", "", "", "", "", ""],
            ["P", "P", "P", "P", "", "P", "P", "P"],
            ["R", "N", "B", "Q", "K", "B", "N", "R"]
        ];

        const board2 = new Chessboard();
        board2.setBoard(board2Arr);
        
        expect(board2.getBoard())
            .toEqual(board2Arr);

        expect(board2.getFen())
            .toEqual("rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 1");
    });

    test("setActiveColor method", () => {

        const board3 = new Chessboard();
        board3.setActiveColor("b");

        expect(board3.getActiveColor())
            .toEqual("b");

        expect(board3.getFen())
            .toEqual("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR b KQkq - 0 1");
    });

    test("Castling rights methods", () => {

        const board4 = new Chessboard();

        board4.setWhiteCanCastleKingside(false);
        expect(board4.getFen())
            .toEqual("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w Qkq - 0 1");

        board4.setWhiteCanCastleQueenside(false);
        expect(board4.getFen())
            .toEqual("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w kq - 0 1");

        board4.setBlackCanCastleKingside(false);
        expect(board4.getFen())
            .toEqual("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w q - 0 1");

        board4.setBlackCanCastleQueenside(false);
        expect(board4.getFen())
            .toEqual("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w - - 0 1");
    });

    test("setEnPassantTarget method", () => {

        const board5 = new Chessboard();

        board5.setEnPassantTarget(5, 3);
        expect(board5.getEnPassantTarget())
            .toEqual([5, 3]);
        expect(board5.getEnPassantTargetReadable())
            .toEqual("e3");
        expect(board5.getFen())
            .toEqual("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq e3 0 1");
    });

    test("setHalfmoveClock method", ()=> {
        
        const board6 = new Chessboard();

        board6.setHalfmoveClock(1);
        expect(board6.getFen())
            .toEqual("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 1 1");
    });

    test("setFullmoveNumber method", ()=> {
        
        const board7 = new Chessboard();

        board7.setFullmoveNumber(2);
        expect(board7.getFen())
            .toEqual("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 2");
    });
});

