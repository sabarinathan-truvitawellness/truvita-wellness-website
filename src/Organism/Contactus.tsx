import React from "react";
import Header from "../Molecules/header/Header";
import Footer from "../Molecules/footer/Footer";
import ContactUsComponent from "../Molecules/contactUs/ContactUs";
import ContactFormSection from "../Molecules/contactFormSection/ContactFormSection";
import FAQPage from "../Molecules/faq/FaQ";

const ContactUs = (()=>{
    return(
        <div>
        {/* <Header/> */}
        <div className="mt-[100px]">
        <ContactUsComponent/>
        <ContactFormSection/>
        <FAQPage/>
        </div>
        {/* <Footer/> */}
        </div>
    )
});

export default ContactUs;