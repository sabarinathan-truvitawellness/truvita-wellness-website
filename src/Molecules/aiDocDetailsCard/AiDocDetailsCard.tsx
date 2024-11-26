import React from "react";
import AiDoctorCard from "../../Atom/aiDoctorCard/AiDoctorCard";
import './aiDocDetailsCard.scss'

const AiDocDetailsCard = (() => {
    const cardData = [
        {
            cardTitle: "Education and Counselling",
            cardSubHeadingOne: "Health Education:",
            paragraphOne: "Our AI Doctor provides comprehensive information on various health conditions, treatments, and preventive care. The information is presented in an easy-to-understand format, ensuring that patients can make informed decisions about their health.",
            cardSubHeadingTwo: "Mental Health Support:",
            paragraphTwo: "Through empathetic interactions, the AI Doctor offers basic counseling and mental health support, helping patients manage stress and anxiety effectively.",
        },
        {
            cardTitle: "Remote Monitoring Integration",
            cardSubHeadingOne: "Wearable Device Data:",
            paragraphOne: "The AI Doctor integrates seamlessly with wearable devices to monitor health metrics such as heart rate, sleep patterns, and physical activity. This real-time data allows the AI Doctor to provide timely advice and recommendations.",
            cardSubHeadingTwo: "Alerts and Reminders:",
            paragraphTwo: "To ensure medication adherence and timely appointments, the AI Doctor sends alerts and reminders through its avatar interface, helping patients stay on track with their health plans.",
        },
        {
            cardTitle: "Decision Support",
            cardSubHeadingOne: "Treatment Options:",
            paragraphOne: "The AI Doctor presents and explains various treatment options to patients, aiding them in making informed decisions about their care. This feature is particularly useful for understanding complex medical information. ",
            cardSubHeadingTwo: "Follow-Up Plans:",
            paragraphTwo: "The AI Doctor creates and explains follow-up care plans and schedules, ensuring continuity of care and optimal health outcomes",
        },
        {
            cardTitle: "Interactive Consultation",
            cardSubHeadingOne: "Virtual Consultations:",
            paragraphOne: "Experience real-time, face-to-face interactions with our AI Doctor through a digital avatar. This feature provides the convenience of accessing healthcare services from the comfort of your home. ",
            cardSubHeadingTwo: "Symptom Checker:",
            paragraphTwo: "The AI Doctor engages patients in a conversational manner to gather symptoms and medical history, making the diagnostic process more thorough and personalized.",
        }
    ];

    return (
        <div className="ai-doc-detail-card-container pt-[60px] pb-[100px]">
             <p className="ai-doc-detail-card-title text-center mb-[20px]">What Does AI Doctor Do?</p>
            <div className="ai-doc-detail-card-wrapper max-w-[1200px] m-auto">
           
                {
                    cardData.map((res, idx) => {
                        return (
                            <AiDoctorCard 
                                key={idx}
                                cardTitle={res.cardTitle}
                                cardSubHeadingOne={res.cardSubHeadingOne}
                                paragraphOne={res.paragraphOne}
                                cardSubHeadingTwo={res.cardSubHeadingTwo}
                                paragraphTwo={res.paragraphTwo}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
});

export default AiDocDetailsCard;
