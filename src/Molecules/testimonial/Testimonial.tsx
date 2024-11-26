import React from "react";
import './testimonial.scss';

interface TestimonialProps {
  image: string;
  ctmrName: string;
  ctmrSubContent: string;
  description: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ image, ctmrName, ctmrSubContent, description }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-header">
        <img src={image} alt={ctmrName} className="testimonial-image" />
        <div>
          <h3 className="testimonial-name">{ctmrName}</h3>
          <p className="testimonial-subcontent">{ctmrSubContent}</p>
        </div>
      </div>
      <p className="testimonial-description">{description}</p>
    </div>
  );
};

export default Testimonial;
