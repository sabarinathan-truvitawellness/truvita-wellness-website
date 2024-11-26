import React from "react";
import ServiceCard from "../../Atom/serviceCard/ServiceCard";
import './services.scss'; // Import the updated stylesheet
import aiBooth from '../../Assets/images/home/ai-booth.png';
import aiDoctor from '../../Assets/images/home/service-ai-doctor.png';
import doctor from '../../Assets/images/home/service-doctor.png'

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "Doctors",
      image: doctor,
      btnUrl:"/"
    },
    {
      title: "AI Doctor",
      image: aiDoctor,
      btnUrl:"/AiDoctor"
    },
    {
      title: "AI Booth",
      image: aiBooth,
      btnUrl:"/AiBooth"
    },
  ];

  return (
    <div className="container">
    <div className="services-section">
      <div className="services-title">
        <h2>
          For your <span>medical needs</span> and assistance
        </h2>
      </div>
      <div className="services-cards">
        {services.map((service, index) => (
          <ServiceCard key={index} title={service.title} image={service.image} btnUrl={service.btnUrl} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default ServicesSection;
