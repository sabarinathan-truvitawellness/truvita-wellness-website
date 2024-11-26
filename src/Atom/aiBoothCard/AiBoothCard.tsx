import React from "react";
import './aiBoothCard.scss';


interface InputProps {
    imageUrl: string,
    title: string,
    description: string
}

const AiBoothCard: React.FC<InputProps> = (({
    imageUrl = "",
    title = "",
    description = ""
}) => {
    return (
        <div className="ai-booth-card-container">
            <div className="ai-booth-card-wrapper">
                <div className="card-img-container">
                    <img src={imageUrl} alt="card" className="max-w-[100%]" />
                </div>
                <div className="card-description-container">
                    <div className="description-wrapper">
                        <h3>
                            {title}
                        </h3>
                        <p>
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
});

export default AiBoothCard;