for(let square of candidateSquares) {
    const convertedOriginalSquare = [8 - knightPosition[0], indexToLetter(knightPosition[1])];
    // Before I was using a convertedDestinationSquare variable that I did not need to use
    if(validateMoveSafety(this.board.map(row => [...row]), convertedOriginalSquare, square, knightLetter, this.activeColor)) {
        return true;
    }
}