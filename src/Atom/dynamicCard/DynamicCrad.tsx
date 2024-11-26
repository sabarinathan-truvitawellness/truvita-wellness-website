import React from "react";
import './dynamic.scss'; // Ensure SCSS file is created

type CoreValue = {
  title: string;
  description: string;
  icon: any;
};


type DynamicCardProps = {
  values: CoreValue[];
  isneedHeader:boolean;
};

const DynamicCard: React.FC<DynamicCardProps> = ({ values,isneedHeader }) => {

  return (
    <div className="dynamic-card-container">
      <div className="core-values-section">
        { isneedHeader ?  <h2 className="section-title">Our Core Values</h2> : "" }
       
        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-card">
              <div className="icon">{value.icon}</div>
              <h3 className="title">{value.title}</h3>
              <p className="description">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DynamicCard;
