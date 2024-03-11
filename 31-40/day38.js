// Working on a starting chessboard class.

class Chessboard {
    constructor() {
        this.startingBoard = [
            ["r", "n", "b", "q", "k", "b", "n", "r"],
            ["p", "p", "p", "p", "p", "p", "p", "p"],
            ["", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", ""],
            ["P", "P", "P", "P", "P", "P", "P", "P"],
            ["R", "N", "B", "Q", "K", "B", "N", "R"]
        ];
        this.startingFen = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
        
        this.board = this.startingBoard;
        this.fen = this.startingFen;

        // Important FEN properties
        this.activeColor = "w";
        this.whiteCanCastleKingside = true;
        this.whiteCanCastleQueenside = true;
        this.blackCanCastleKingside = true;
        this.blackCanCastleQueenside = true;
        this.enPassantTarget = "";
        this.halfmoveClock = 0;
        this.fullmoveNumber = 0;
    }

    getBoard() {
        return this.board;
    }

    setBoard(newBoard) {
        this.board = newBoard;
    }

    getFen() {
        return this.fen;
    }

    setFen(newFen) {
        this.fen = newFen;
    }

    getActiveColor() {
        return this.activeColor;
    }

    setActiveColor(newColor) {
        this.activeColor = newColor;
    }

    getWhiteCanCastleKingside() {
        return this.whiteCanCastleKingside;
    }

    setWhiteCanCastleKingside(value) {
        this.whiteCanCastleKingside = value;
    }

    getWhiteCanCastleQueenside() {
        return this.whiteCanCastleQueenside;
    }

    setWhiteCanCastleQueenside(value) {
        this.whiteCanCastleQueenside = value;
    }

    getBlackCanCastleKingside() {
        return this.blackCanCastleKingside;
    }

    setBlackCanCastleKingside(value) {
        this.blackCanCastleKingside = value;
    }

    getBlackCanCastleQueenside() {
        return this.blackCanCastleQueenside;
    }

    setBlackCanCastleQueenside(value) {
        this.blackCanCastleQueenside = value;
    }

    isSquareEmpty(rank, file) {
        const piece = this.board[rank][file];
        return piece === "";
    }

    getEnPassantTarget() {
        return this.enPassantTarget;
    }

    setEnPassantTarget(value) {
        this.enPassantTarget = value;
    }

    getHalfmoveClock() {
        return this.halfmoveClock;
    }

    setHalfmoveClock(value) {
        this.halfmoveClock = value;
    }

    getFullmoveNumber() {
        return this.fullmoveNumber;
    }

    setFullmoveNumber(value) {
        this.fullmoveNumber = value;
    }

    // Update the class's fen string using the current class state
    constructFenString() {
        // The fen string consists of six smaller strings: Piece placement, active color,
        // castling rights, en passant target, halfmove clock, and fullmove number.
        let piecePlacement = constructPiecePlacement();
        let activeColor = this.activeColor;
        let castlingRights = constructCastlingRights();
        let enPassantTarget = this.enPassantTarget;
        let halfmoveClock = this.halfmoveClock;
        let fullmoveNumber = this.fullmoveNumber;

        return `${piecePlacement} ${activeColor} ${castlingRights} ${enPassantTarget} ${halfmoveClock} ${fullmoveNumber}`;
    }

    constructCastlingRights() {
        let str = "";
        if(this.whiteCanCastleKingside) {
            str += "K";
        }
        if(this.whiteCanCastleQueenside) {
            str += "Q";
        }
        if(this.blackCanCastleKingside) {
            str += "k";
        }
        if(this.blackCanCastleQueenside) {
            str += "q";
        }
        if(str === "") {
            str = "-";
        }
        return str;
    }

    constructPiecePlacement() {
        let fenPiecePlacement = "";

        for(let i = 0; i < this.board.length; i++) {
            let emptyCount = 0;

            for(let j = 0; j < this.board[i].length; j++) {
                const piece = this.board[i][j];

                if(piece === "") {
                    emptyCount++;
                } else {
                    if(emptyCount >= 0) {
                        fenPiecePlacement += emptyCount;
                        emptyCount = 0;
                    }
                    fenPiecePlacement += piece;
                }
            }

            // If there is an empty piece at the end of the row add that as well
            if (emptyCount > 0) {
                fenPiecePlacement += emptyCount;
            }

            // Add a slash to properly create fen notation
            if (i < this.board.length - 1) {
                fenPiecePlacement += "/";
            }
        }
        return fenPiecePlacement;
    }
}

//TODO: Testing the Chessboard class.