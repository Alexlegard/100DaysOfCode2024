// Day 35

// I managed to display the pieces on the chessboard.

import React from 'react';

function Square(props) {

    const {rank, file, piece} = props;

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

    let piecePath;
    switch(piece) {
        case "p":
            piecePath = "/assets/images/pawn_b.png";
            break;
        case "r":
            piecePath = "/assets/images/rook_b.png";
            break;
        case "n":
            piecePath = "/assets/images/knight_b.png";
            break;
        case "b":
            piecePath = "/assets/images/bishop_b.png";
            break;
        case "q":
            piecePath = "/assets/images/queen_b.png";
            break;
        case "k":
            piecePath = "/assets/images/king_b.png";
            break;
        case "P":
            piecePath = "/assets/images/pawn_w.png";
            break;
        case "R":
            piecePath = "/assets/images/rook_w.png";
            break;
        case "N":
            piecePath = "/assets/images/knight_w.png";
            break;
        case "B":
            piecePath = "/assets/images/bishop_w.png";
            break;
        case "Q":
            piecePath = "/assets/images/queen_w.png";
            break;
        case "K":
            piecePath = "/assets/images/king_w.png";
            break;
        case "":
            piecePath = undefined;
            break;
    }

    return (
        <div className={color}>
            {piecePath ? <img src={piecePath} width="70" height="70" /> : null}
        </div>
    );
}

export default Square;