import React from "react";
import { Link } from "react-router-dom";
import './landingBannerCard.scss';

interface InputProps {
  cardTitle: string;
  cardDescription: string;
  imageLink: string;
  navigationLink: string;
  navigationText: string;
}

const LandingBannerCard: React.FC<InputProps> = ({
  cardTitle = "",
  cardDescription = "",
  imageLink = "",
  navigationLink = "",
  navigationText = ""
}) => {
  return (
    <div className="lbc-container">
      <div className="lbc-content">
        <div className="left-section justify-center">
          <div className="lbc-text-area">
            <h1 className="max-w-[550px]">{cardTitle}</h1>
            <p>{cardDescription}</p>
          </div>
          <div className="btn-container">
            <Link to={navigationLink}>{navigationText}</Link>
          </div>
        </div>
        <div className="right-section">
          <div className="image-container">
            <img src={imageLink} alt="Doctor" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingBannerCard;
