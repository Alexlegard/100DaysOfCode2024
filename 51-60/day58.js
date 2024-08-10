const handlePromotion = (piece) => {
    switch(piece) {
        case "q":
            setIsPromotionPending(false);
            chessboard.promotePawn(promotionData[0][1], promotionData[0][0], promotionData[1][1], promotionData[1][0], "q");
            setPromotionData(null);
            return;
        case "r":
            setIsPromotionPending(false);
            chessboard.promotePawn(promotionData[0][1], promotionData[0][0], promotionData[1][1], promotionData[1][0], "r");
            setPromotionData(null);
            return;
        case "n":
            setIsPromotionPending(false);
            chessboard.promotePawn(promotionData[0][1], promotionData[0][0], promotionData[1][1], promotionData[1][0], "n");
            setPromotionData(null);
            return;
        case "b":
            setIsPromotionPending(false);
            chessboard.promotePawn(promotionData[0][1], promotionData[0][0], promotionData[1][1], promotionData[1][0], "b");
            setPromotionData(null);
            return;
    }
}