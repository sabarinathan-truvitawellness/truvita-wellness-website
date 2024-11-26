import React from "react";
import './aiBoothWorkingCard.scss';

interface InputProps {
    number: string,
    subtitle: string,
    title: string,
    description: string,
    imageUrl: string
}

const AiBoothWorkingCard: React.FC<InputProps> = (({ number, subtitle, title, description, imageUrl }) => {
    return (
        <div className="card-container">



            <div className="wc-text-section">
                <p className="card-para">{subtitle}</p>
                <div className="text-spreder">
                    <h2>{number}</h2>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
            <div className="image-section">
                <img src={imageUrl} alt={title} />
            </div>
        </div>
    )
});

export default AiBoothWorkingCard;