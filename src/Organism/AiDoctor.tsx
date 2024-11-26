import React from "react";
import BookingAiDoctor from "../Molecules/bookingAiDoctor/BookingAiDoctor";
import Header from "../Molecules/header/Header";
import Footer from "../Molecules/footer/Footer";
import AiDoctorVideoSection from "../Molecules/aiDoctorVideoSection/AiDoctorVideoSection";
import AiDocDetailsCard from "../Molecules/aiDocDetailsCard/AiDocDetailsCard";
import './pageStyling.scss';
import FAQPage from "../Molecules/faq/FaQ";

const AiDoctor = (()=>{
    return(
        <div>
            {/* <Header/> */}
            <div className="ai-doctor-container pt-[80px]">
           <BookingAiDoctor/>
           <AiDoctorVideoSection/>
           <AiDocDetailsCard/>
           </div>
           <FAQPage/>
           {/* <Footer/> */}
        </div>
    )
});

export default AiDoctor;