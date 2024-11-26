import React from "react";
import { Link } from "react-router-dom";
import aiBooth from '../../Assets/images/aiBooth/ai-booth.png';
import './aiBoothIntro.scss';

const AiBoothIntro = (()=>{
    return(
        <div className="ai-booth-intro-container">
            <div className="ai-booth-intro-conatiner-wrapper">
               <div className="ai-booth-into-content-wrapper">
                <div className="left-section">
                <div className="text-section">
                        <h1 className="ai-dotor-text">
                            Visit Our <br /> 
                            <span className="grad-text">AI Booth</span>
                        </h1>
                        <p className="description-text">
                        AI-powered telemedicine booths are self-contained units offering comprehensive, user-friendly healthcare services that guide patients through their consultations.                        </p>
                       
                    </div>
                </div>
                <div className="right-section">
                    <div className="ai-booth-img-wrapper">
                     <img src={aiBooth} alt="Ai-booth" className="max-w-[100%]"/>
                     </div>
                </div>
               </div>
            </div>
        </div>
    )
});

export default AiBoothIntro;