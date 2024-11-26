import React from "react";
import aiBoothFeatureimgOne from '../../Assets/images/aiBooth/features-img-1.png'
import aiBoothFeatureimgTwo from '../../Assets/images/aiBooth/features-img-2.png'
import aiBoothFeatureimgThree from '../../Assets/images/aiBooth/features-img-3.png'
import aiBoothFeatureimgFour from '../../Assets/images/aiBooth/features-img-4.png'
import aiBoothFeatureimgFive from '../../Assets/images/aiBooth/features-img-5.png'
import './aiBoothFeatures.scss';
import AiBoothFeaturesCard from "../../Atom/aiBoothFeaturesCard/AiBoothFeaturesCard";

const AiBoothFeatures = (() => {
    const cardData = [
        {
            title: "AI Powered Consultations",
            description: 'Interact with our AI Doctor avatar for real-time assessments, medical advice, and follow-up care. ',
            imageUrl: aiBoothFeatureimgOne
        },
        {
            title: "Seamless Wearable Integration",
            description: "The AI Booth integrates with wearable devices, enabling real-time tracking of health metrics such as heart rate, blood pressure, and glucose levels. ",
            imageUrl: aiBoothFeatureimgTwo
        },
        {
            title: "On-Site Testing",
            description: "Conduct essential tests like temperature checks, blood pressure monitoring, and glucose testing directly within the booth, enabling quick, data-driven consultations.",
            imageUrl: aiBoothFeatureimgThree
        },
        {
            title: "Symptoms Checker & Diagnosis",
            description: "Engage in a simple conversation with the AI Doctor to log symptoms and health concerns. ",
            imageUrl: aiBoothFeatureimgFour
        },
        {
            title: "Interactive Consultations",
            description: "After the AI Doctor's consultation, you can book a live consultation with a human doctor who will analyze your test results and offer further prescriptions or advice.",
            imageUrl: aiBoothFeatureimgFive
        }
    ]

    return (
        <div className="container">
            <div className="aib-features-wrapper">
            <h3 className="aib-features-card-title">Key Features of <span>AI Booth</span></h3>
            <div className="aib-features-cards">
                {
                    cardData.map((res) => {
                        return (
                            <AiBoothFeaturesCard imageUrl={res.imageUrl} title={res.title} description={res.description} />
                        )
                    })
                }
            </div>
            </div>
        </div>
    )
});


export default AiBoothFeatures;