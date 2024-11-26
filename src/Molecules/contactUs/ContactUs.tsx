import React from "react";
import contactUsImageOne from '../../Assets/images/contactus/contact-us-img-1.png';
import './contactUs.scss';  // Import the new SCSS file

const ContactUsComponent = () => {
    return (
       <div className="contactus-container">
        <div className="contactus-wrapper">
            <div className="content-section">
                <div className="left-section">
                    <div className="left-section-wrapper">
                        <div className="content-row-1"> 
                            <h1 className="contact-content-1">Contact Us</h1>
                        </div>
                        <div className="content-row-2">
                            <p className="contact-content-2">
                                Truvita Wellness for your Assistance
                            </p>
                        </div>
                        <div className="content-row-3">
                            <p className="contact-content-3">
                                Have questions or need assistance? Reach out to our support team anytime for prompt and personalized help.
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className="right-section">
                    <div className="right-section-wrapper">
                        <div className="image-container">
                            <img src={contactUsImageOne} alt="Contact Us" className="image"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </div>
    );
};

export default ContactUsComponent;
