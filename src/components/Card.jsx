import React from 'react';

const Card = ({ color, type, card }) => {

    return (
        <div className='card-block'>
            <div className="card-img"
                style={{
                    backgroundColor: type === 'circle' ? `var(--${color})` : null,
                    border: type === 'circle' ? null : `2px solid var(--${color})`,
                }}>
                {card.img}
            </div>
            <h2>{card.title}</h2>
            <p
                style={{
                    borderTop: `3px solid var(--${color})`,
                }}>{card.text}</p>
        </div>
    )
}

export default Card;