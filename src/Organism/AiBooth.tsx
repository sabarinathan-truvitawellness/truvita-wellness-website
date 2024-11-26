import React from "react";
import Header from "../Molecules/header/Header";
import Footer from "../Molecules/footer/Footer";
import AiBoothIntro from "../Molecules/aiBoothIntro/AiBoothIntro";
import AiBoothAboutCards from "../Molecules/aiBoothAboutCards/AiBoothAboutCards";
import AiBoothFeatures from '../Molecules/aiBoothfeatures/AiBoothFeatures'
import AiBoothWorkingStpes from "../Molecules/aiBoothWorkingSteps/AiBoothWorkingSteps";
import AiBoothVideoCard from "../Molecules/aiBoothVideoCard/AiBoothVideoCard";

const AiBooth = (()=>{
    return(
        <div className="ai-booth-page">
            {/* <Header/> */}
            <AiBoothIntro/>
            <AiBoothVideoCard/>
            <AiBoothAboutCards/>
            <AiBoothFeatures/>
            <AiBoothWorkingStpes/>
            {/* <Footer/> */}
        </div>
    )
});

export default AiBooth;
