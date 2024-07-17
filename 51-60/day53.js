// React component for the overlay when promotion you move a pawn to
// the promotion rank and promotion is pending. (In progress)

import React from 'react';
import './PromotionPopup.css';
import whiteQueen from '../../../public/assets/queen_w.png';
import blackQueen from '../../../public/assets/queen_b.png';
import whiteRook from '../../../public/assets/rook_w.png';
import blackRook from '../../../public/assets/rook_b.png';
import whiteKnight from '../../../public/assets/knight_w.png';
import blackKnight from '../../../public/assets/knight_b.png';
import whiteBishop from '../../../public/assets/bishop_w.png';
import blackBishop from '../../../public/assets/bishop_b.png';
import xIcon from '../../../public/assets/X_Icon.png';

const PromotionPopup = () => {
    const isWhite = pawnColor === "w";
    
    return (
        <div className = "promotion-popup-shadow">
            <div className = "promotion-popup-card">
                <img src={isWhite ? whiteQueen : blackQueen} alt="Queen" onClick={() => onPromote('queen')} />
                <img src={isWhite ? whiteRook : blackRook} alt="Rook" onClick={() => onPromote('rook')} />
                <img src={isWhite ? whiteKnight : blackKnight} alt="Knight" onClick={() => onPromote('knight')} />
                <img src={isWhite ? whiteBishop : blackBishop} alt="Bishop" onClick={() => onPromote('bishop')} />
                <img src={xIcon} alt="cancel" onClick={onCancel} />
            </div>
        </div>
    );
}
    


export default PromotionPopup;