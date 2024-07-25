/*
* If the passed square is on the 8th rank for white, or the 1st rank for black, the pawn
* is promoting, so return true.
* 
* @param destinationRank - Number representing the square's rank
*/
isPawnPromoting(destinationRank) {

    debugger;

    if(this.activeColor === "w") {
        if(destinationRank === "8") {
            return true;
        }
        return false;
    }
    // Active color must be black
    else {
        if(destinationRank === "1") {
            return true;
        }
        return false;
    }
}