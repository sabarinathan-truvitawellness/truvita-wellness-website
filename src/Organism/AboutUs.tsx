import React from "react";
import Header from '../Molecules/header/Header'
import Footer from "../Molecules/footer/Footer";
import AboutUsComponent from "../Molecules/aboutus/Aboutus";
import OurJourney from "../Molecules/ourJourney/OurJourney"
import HeaderQuote from "../Molecules/empowerinQuotes/EmpowerinQuotes";
import CoreValues from "../Molecules/coreValue/CoreValue";
import TeamGrid from "../Molecules/teamMemebers/TeamMembers";

const AboutUs = (()=>{
    return(
        <div>
            {/* <Header/> */}
            <div className="about-us-wrapper">
            <AboutUsComponent/>
            <OurJourney/>
            <HeaderQuote/>
            <CoreValues/>
            <TeamGrid/>
            </div>
            {/* <Footer/> */}
        </div>
    )
});

export default AboutUs;