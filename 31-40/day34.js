// I managed to render a chessboard in my new React app!
//Example code of a chess square component.

import React from 'react';

function Chessboardsquare(props) {

    const {rank, file} = props;

    function letterToNumber(letter) {
        // Get the ASCII value of 'a'
        const asciiOfA = 'a'.charCodeAt(0);
        // Get the ASCII value of the input letter
        const asciiOfLetter = letter.charCodeAt(0);
        // Calculate the numeric value starting from 1
        const numericValue = asciiOfLetter - asciiOfA + 1;
        return numericValue;
    }
    let color;
    let sum = parseInt(rank) + letterToNumber(file);
    if(sum % 2 === 0) {
        color = "dark-square";
    } else {
        color = "light-square";
    }

    return (
        <div className={color}>
            
        </div>
    );
}

export default Chessboardsquare;