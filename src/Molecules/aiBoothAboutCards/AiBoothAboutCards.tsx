import React from "react";
import aiBoothAbtImgOne from '../../Assets/images/aiBooth/ai-booth-abt-img-1.png'
import aiBoothAbtImgTwo from '../../Assets/images/aiBooth/ai-booth-abt-img-2.png'
import aiBoothAbtImgThree from '../../Assets/images/aiBooth/ai-booth-abt-img-3.png'
import { Description } from "@mui/icons-material";
import AiBoothCard from "../../Atom/aiBoothCard/AiBoothCard";
import './aiBoothAboutCards.scss';

const AiBoothAboutCards = (() => {

    const cardData = [
        {
            imageUrl: aiBoothAbtImgOne,
            title: "AI Guided Welcome and Data Collection",
            description: "Upon entering the booth, patients are greeted by an AI avatar, which assists them in collecting vital signs, medical history, and symptoms, ensuring a thorough initial assessment."
        },
        {
            imageUrl: aiBoothAbtImgTwo,
            title: "Seamless Data Transfer and Physician Review",
            description: "Once the AI collects the information, it forwards the data to a licensed physician, who reviews it and prepares for a teleconsultation to provide accurate, personalized care.F"
        },
        {
            imageUrl: aiBoothAbtImgThree,
            title: "Continuous AI Support during Teleconsultation",
            description: "The AI avatar actively guides patients through medical equipment usage, providing clear instructions to ensure their comfort and informed participation throughout the teleconsultation process."
        }
    ]
    return (
        <div className="ai-booth-card-grid-container">
            {cardData.map((card, index) => (
                <AiBoothCard
                    key={index}
                    imageUrl={card.imageUrl}
                    title={card.title}
                    description={card.description}
                />
            ))}
        </div>
    )
});


export default AiBoothAboutCards;