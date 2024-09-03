// Today I've been using mixins to clean up the ChessboardClass file
// which was getting kinda long.

// propertyManagerMixin.js

let propertyManagerMixin = {
    getBoard() {
        return this.board;
    },

    setBoard(newBoard) {
        this.board = newBoard;
        this.constructFenString();
    },

    getFen() {
        return this.fen;
    },

    getActiveColor() {
        return this.activeColor;
    },

    setActiveColor(newColor) {
        this.activeColor = newColor;
        this.constructFenString();
    },

    getHalfmoveClock() {
        return this.halfmoveClock;
    },

    setHalfmoveClock(value) {
        this.halfmoveClock = value;
        this.constructFenString();
    },

    getFullmoveNumber() {
        return this.fullmoveNumber;
    },

    setFullmoveNumber(value) {
        this.fullmoveNumber = value;
        this.constructFenString();
    }
}

module.exports = propertyManagerMixin;