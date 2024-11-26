import React from "react";
import './LeadMember.scss';
import teamLead from '../../Assets/images/aboutus/hemnath-ceo.jpg'

const LeadMember = () => {
  return (
    <div className="max-w-[1200px] m-auto ">
    <div className="lead-member-section">
      <div className="lead-member-section-wrapper">
      <div className="lead-member-photo">
        <img src={teamLead} alt="Ryan Howard" className="lead-photo"/>
      </div>
      <div className="lead-member-content">
        <h2 className="title">Hemanathan Ravi</h2>
        <h3 className="position">Founder & CEO</h3>
        <p className="description">
        He is a visionary leader revolutionizing primary care with AI-driven technology. With a focus on patient engagement and personalized healthcare, he is at the forefront of developing innovative solutions that make healthcare more accessible and efficient. His commitment to leveraging advanced technology is shaping the future of healthcare for a more connected and data-driven world.
        </p>
        <button className="read-blog-btn">
          Read Blog <span className="arrow">→</span>
        </button>
      </div>
      </div>
    </div>
    </div>
  );
};

export default LeadMember;
