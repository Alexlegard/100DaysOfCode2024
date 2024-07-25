import React from 'react';
import './PromotionPopup.css';

const PromotionPopup = (onPromote, onCancel, color) => {
    
    /* Promotion popup for white */
    if(color === "w") {
        return (
            <div className = "promotion-popup-shadow">
                <div className = "promotion-popup-card">
                    <img src='../../assets/images/queen_w.png' alt="Queen" onClick={() => onPromote('queen')} />
                    <img src='../../../public/assets/images/rook_w.png' alt="Rook" onClick={() => onPromote('rook')} />
                    <img src='../../../public/assets/images/knight_w.png' alt="Knight" onClick={() => onPromote('knight')} />
                    <img src='../../../public/assets/images/bishop_w.png' alt="Bishop" onClick={() => onPromote('bishop')} />
                    <img src='../../../public/assets/images/X_Icon.png' alt="cancel" onClick={onCancel} />
                </div>
            </div>
        );
    }

    /* Promotion popup for black */
    else {
        return (
            <div className = "promotion-popup-shadow">
                <div className = "promotion-popup-card">
                    <img src='../../assets/images/queen_b.png' alt="Queen" onClick={() => onPromote('queen')} />
                    <img src='../../../public/assets/images/rook_b.png' alt="Rook" onClick={() => onPromote('rook')} />
                    <img src='../../../public/assets/images/knight_b.png' alt="Knight" onClick={() => onPromote('knight')} />
                    <img src='../../../public/assets/images/bishop_b.png' alt="Bishop" onClick={() => onPromote('bishop')} />
                    <img src='../../../public/assets/images/X_Icon.png' alt="cancel" onClick={onCancel} />
                </div>
            </div>
        );
    }
    
}
    


export default PromotionPopup;