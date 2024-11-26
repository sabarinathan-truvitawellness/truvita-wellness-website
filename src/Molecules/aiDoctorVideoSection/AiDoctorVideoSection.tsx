import React from "react";
import './aiDoctorVideoSection.scss';

const AiDoctorVideoSection = (() => {
    return (
        <div className="ai-video-container">
            <div className="ai-video-wrapper max-w-[1500px] m-auto">
                <div className="video-parent bg-slate-500">
                    <video
                        src="https://truvitawellness.com/-e023-422f-a4d0-b4c55449519c.mp4"
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

export default AiDoctorVideoSection;
