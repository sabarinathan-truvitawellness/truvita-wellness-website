import React from "react";
import './aiBoothVideoCard.scss';

const AiBoothVideoCard = (()=>{
    return(
        <div className="ai-booth-video-container">
        <div className="ai-booth-video-wrapper max-w-[1500px] m-auto">
            <div className="ai-booth-video-parent">
                <video
                    src="https://truvitawellness.com/TruVita%20Wellness%20AI%20Booth%20Demo.mp4"
                    className="video-element"
                    autoPlay
                    playsInline
                >
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    </div>
    )
});

export default AiBoothVideoCard;