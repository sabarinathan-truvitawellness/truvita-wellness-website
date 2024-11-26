import React from "react";
import aboutImages1 from '../../Assets/images/aboutus/about-us-img-1.png';
import aboutImages2 from '../../Assets/images/aboutus/about-us-img-2.png';
import aboutImages3 from '../../Assets/images/aboutus/about-us-img-3.png';
import aboutImages4 from '../../Assets/images/aboutus/about-us-img-4.png';
import './aboutus.scss'; // Import the updated SCSS file

const AboutUsComponent = () => {
  return (
    <div className="aboutus-container"> 
      <div className="aboutus-wrapper">
        <div className="content-section">
          <div className="left-section">
            <div className="left-section-wrapper">
              <div className="content-row-1"> 
                <h1 className="about-content-1">About Us</h1>
              </div>
              <div className="content-row-2">
                <p className="about-content-2">
                  Personalized, comprehensive healthcare combining <span className="span-spl-text">expert physicians and AI</span>, available anytime, anywhere.
                </p>
              </div>
              <div className="content-row-3">
                <p className="about-content-3">
                  At TruVita Wellness, we’re revolutionizing healthcare access with the AI Booth, the first AI-powered clinical teleconsultation booth. Here’s how you can make the most of this innovative healthcare solution.
                </p>
              </div>
            </div>
          </div>
          
          <div className="right-section">
            <div className="right-section-wrapper">
              <div className="sub-section-left">
                <div className="sub-section-wr-top">
                  <img src={aboutImages1} alt="About Us" />
                </div>
                <div className="sub-section-wr-bottom">
                  <img src={aboutImages2} alt="More Info" />
                </div>
              </div>
              
              <div className="sub-section-right">
                <div className="sub-section-wr-bottom">
                  <img src={aboutImages3} alt="Details" />
                </div>
                <div className="sub-section-wr-top">
                  <img src={aboutImages4} alt="Information" />
                </div>
              </div>
            </div>
          </div> 
          
        </div>
      </div>
    </div>
  );
};

export default AboutUsComponent;
