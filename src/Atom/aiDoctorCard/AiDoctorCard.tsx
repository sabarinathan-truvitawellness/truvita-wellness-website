import React from "react";
import './aiDoctorCard.scss';

interface InputProps {
    cardTitle:string;
    cardSubHeadingOne:string;
    cardSubHeadingTwo:string;
    paragraphOne:string;
    paragraphTwo:string;
}

const AiDoctorCard:React.FC<InputProps> = (({
    cardTitle = "",
    cardSubHeadingOne="",
    cardSubHeadingTwo = "",
    paragraphOne ="",
    paragraphTwo =""
})=>{
  return(
    <div className="ai-doc-card">
        <div className="ai-doc-wrapper">
            <div className="ai-doc-content">
            <h3 className="card-title">{cardTitle}</h3>
                <div className="row-1">
                <p className="ai-doc-paragraph"><span className="ai-doc-cardSubHeading">{cardSubHeadingOne}</span>{paragraphOne}</p>
                </div> 
                <div className="row-2">
                <p className="ai-doc-paragraph"><span className="ai-doc-cardSubHeading">{cardSubHeadingTwo}</span>{paragraphTwo}</p>
                </div>
            </div>
        </div>
    </div>
  )
});

export default AiDoctorCard;