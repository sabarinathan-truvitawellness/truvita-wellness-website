import React from 'react';
// import aiRobot from '../../Assets/images/home/ai-robot.png';
import aiRobot from '../../Assets/images/home/ai-section-img.png';
import aiDoctorImgOne from '../../Assets/images/home/ai-doctor-img-1.png';
import aiDoctorImgTwo from '../../Assets/images/home/ai-doctor-img-2.png';
import aiDoctorImgThree from '../../Assets/images/home/ai-doctor-img-3.png';
import bgstarts from '../../Assets/images/home/ai-robot-bg-starts.png';
import './aiDoctor.scss';
import { Link } from 'react-router-dom';

const AiDoctor = () => {
  return (
    <section className="ai-doctor-section">
      <div className="container px-[20px]">
        {/* Hero Section */}
        <div className="hero-section">
          {/* Text Section */}
          <div className="text-section">
            <h1 className="ai-doctor-title">
              Meet Our <br /> <span className="gradient-text">AI Doctor</span>
            </h1>
            <p className="ai-doctor-description">
              Experience healthcare like never before with our AI Doctor, offering instant, personalized medical advice through an interactive avatar.
            </p>
            <div className='learn-more-button'>
            <Link className="" to="/AiDoctor">
              Learn More
            </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="image-section">
            <div className="ai-robot-image ">
              <img src={aiRobot} alt="ai-robot-image" />
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="features-section">
          {/* Feature 1 */}
          <div className="feature-card">
            <img src={aiDoctorImgOne} alt="Real-Time Responses" className="feature-image" />
            <h3 className="feature-title">Real-Time Responses:</h3>
            <p className="feature-description">
              Immediate Feedback: Offers instant responses to patient inquiries and symptom assessments.
            </p>
            <p className="feature-description">
              Dynamic Questioning: Adjusts questions based on patient answers to gather more accurate information.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="feature-card">
            <img src={aiDoctorImgTwo} alt="Personalized Experience" className="feature-image" />
            <h3 className="feature-title">Personalized Experience:</h3>
            <p className="feature-description">
              Patient Profile Integration: Accesses and updates patient records during interactions for tailored advice.
            </p>
            <p className="feature-description">
              Learning and Adaptation: Learns from previous interactions to improve future consultations and build rapport.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="feature-card">
            <img src={aiDoctorImgThree} alt="Integration with Healthcare Systems" className="feature-image" />
            <h3 className="feature-title">Integration with Healthcare Systems:</h3>
            <p className="feature-description">
              EHR Synchronization: Syncs with electronic health records for seamless updates and information retrieval.
            </p>
            <p className="feature-description">
              Collaboration with Healthcare Providers: Facilitates communication and data sharing with human healthcare providers for comprehensive care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiDoctor;
