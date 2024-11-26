import React from "react";
import Header from "../Molecules/header/Header";
import Footer from "../Molecules/footer/Footer";
import AiDoctor from "../Molecules/aiDoctor/AiDoctor";
import Horizon from "../Molecules/horizon/Horizon";
import WhyChooseUs from "../Molecules/whyChooseUs/WhyChooseUs";
import UserTestimonial from "../Molecules/usersTestimonial/UsersTestimonial";
import PricingPlans from "../Molecules/pricing/Pricing";
import ServicesSection from "../Molecules/services/Services";
import LandingBanner from "../Molecules/landingBannerSlider/LandingBanner";

const Home = (()=>{
    return(
        <div>
        {/* <Header/> */}
        <div className="home-wrapper">
        <LandingBanner/>
        <ServicesSection></ServicesSection>
        <Horizon/>
        <WhyChooseUs/>
        <AiDoctor/>
        <UserTestimonial></UserTestimonial>
        <PricingPlans></PricingPlans>
        </div>
        {/* <Footer/> */}
        </div>
    )
});

export default Home;