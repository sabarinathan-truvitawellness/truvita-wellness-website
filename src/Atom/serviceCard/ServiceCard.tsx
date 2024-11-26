import React from "react";
import './serviceCard.scss';
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  image: string;
  btnUrl:string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, image,btnUrl }) => {
  return (
    <div className="service-card">
      <div className="service-title">
        <h3>{title}</h3>
      </div>
      <div className="service-wrapper">
        <div className="service-link-wrapper">
      <div className="service-link">
        <Link to={btnUrl}>
        <a className="arrow-link">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 30 30" fill="none">
<path d="M8.16735 23.1798L8.16745 23.1799L8.17369 23.1737L21.5469 9.80043V19.6875C21.5469 19.9403 21.6473 20.1827 21.8261 20.3615C22.0048 20.5402 22.2473 20.6406 22.5 20.6406C22.7528 20.6406 22.9953 20.5402 23.174 20.3615C23.3527 20.1827 23.4532 19.9403 23.4532 19.6875V7.5C23.4532 7.24722 23.3527 7.00478 23.174 6.82604V6.82604C22.9953 6.64729 22.7528 6.54688 22.5 6.54688H10.3125C10.0598 6.54688 9.81732 6.64729 9.63858 6.82604C9.45983 7.00478 9.35941 7.24722 9.35941 7.5C9.35941 7.75279 9.45983 7.99522 9.63858 8.17396C9.81732 8.35271 10.0598 8.45312 10.3125 8.45312H20.1996L6.82639 21.8263L6.82628 21.8262L6.82026 21.8327C6.6519 22.0134 6.56024 22.2524 6.5646 22.4993C6.56896 22.7462 6.66899 22.9818 6.84362 23.1564C7.01825 23.331 7.25384 23.4311 7.50076 23.4354C7.74769 23.4398 7.98666 23.3481 8.16735 23.1798Z" fill="white" stroke="white" stroke-width="0.5"/>
</svg>
        </a>
        </Link>
      </div>
      </div>
      <div className="service-image">
        <img src={image} alt={title} />
      </div>
    
      </div>
    </div>
  );
};

export default ServiceCard;
