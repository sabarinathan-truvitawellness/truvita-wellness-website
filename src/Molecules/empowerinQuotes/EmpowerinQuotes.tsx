import React from "react";
import './HeaderQuote.scss'; // Create a separate SCSS file for styling

const HeaderQuote = () => {
  return (
    <div className="container">
      <div className="container-wrapper px-[20px]">
    <div className="header-quote-section pt-[60px] pb-[60px]">
      <div className="box-dirty">
      <div className="background-image">
        
      </div>
      </div>
      <div className="quote-wrapper">
          <p className="quote-text">
            “Empowering healthcare through <span className="highlight">technology</span>, <span className="highlight">TruVita Wellness</span> is the future of personalized care.”
          </p>
        </div>
    </div>
    </div>
    </div>
  );
};

export default HeaderQuote;
