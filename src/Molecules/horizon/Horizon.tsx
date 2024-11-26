import React from "react";
import homeHorizonImgOne from '../../Assets/images/home/horizon-img-1.png';
import homeHorizonImgTwo from '../../Assets/images/home/horizon-img-2.png';
import './horizon.scss';

const Horizon = (()=>{
    return(
      <div className="container">
      <div className="container-wrapper max-w-[1200px] m-auto">
        <div className="horizon-container">
        <div className="left-section">
          <div className="left-section-wrapper">
            <div className="image-area">
              <div className="img-1">
                <img src={homeHorizonImgOne} alt="" />
              </div>
              <div className="img-2">
                <img src={homeHorizonImgTwo} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="right-section">
          <div className="right-section-wrapper">
            <div className="content-row-1">
              <h2 className="horizon-title">Expanding your HealthCare Horizons</h2>
            </div>
            <div className="content-row-2">
              <p className="horizon-sub-content">
                Consult top doctors from any location worldwide! Experience exceptional healthcare services from the comfort of your home. Enjoy the advantages of telehealth and telemedicine with our specialized remote healthcare solutions.
              </p>
            </div>
            <div className="content-row-3">
              {/* Add more content here */}
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    )
});

export default Horizon;



