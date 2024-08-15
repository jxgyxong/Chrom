import React from "react";
import "./comCard.css";

type Card = {
    id: string;
    src: string;
};

interface ComCardProps {
    card: Card;
}

const ComCard: React.FC<ComCardProps> = ({ card }) => {
    return (
        <div>
            <div>
                <img className='front' src={card.src} alt='cart front' />
                <img className='back' src='/img/back.png' alt='card back' />
            </div>
        </div>
    );
};

export default ComCard;
