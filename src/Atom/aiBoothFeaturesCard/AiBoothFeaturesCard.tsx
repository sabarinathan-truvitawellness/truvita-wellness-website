import React from "react";
import './aiBoothFeaturesCard.scss';

interface InputProps{
    imageUrl:string,
    title:string,
    description:string
}

const AiBoothFeaturesCard:React.FC <InputProps> = (({imageUrl,title,description}) => {
    return (
        <div className="features-card-container">
            <div className="features-card-container-wrapper">
                <div className="features-card-img-container">
                    <img src={imageUrl} alt="consultation" />
                </div>
                <div className="features-card-description-container">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    
    )
});

export default AiBoothFeaturesCard;