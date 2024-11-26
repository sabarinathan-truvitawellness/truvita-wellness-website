import React from "react";
import DynamicCard from "../../Atom/dynamicCard/DynamicCrad";

const coreValuesData = [
  { title: "Innovation", description: "We are at the forefront of healthcare technology, continuously developing new ways to improve and personalize patient care.", icon: "🌟" },
  { title: "Accessibility", description: "Our goal is to make healthcare available to everyone, regardless of location or financial means, through our innovative AI Avatar and telemedicine services.", icon: "🤖" },
  { title: "Compassion", description: "We believe in providing care that is not only effective but also empathetic and understanding, ensuring our users feel supported.", icon: "💙" },
  { title: "Integrity", description: "We are committed to maintaining the highest standards of ethics, transparency, and trust in all our interactions and services.", icon: "🛡️" },
  { title: "Excellence", description: "Our focus is on delivering top-quality healthcare, leveraging technology to provide the best possible outcomes for our users.", icon: "🏆" },
];

const CoreValues = () => {
  return (
    <div className="max-w-[1200px] m-auto pt-[30px] pb-[60px]">
      <DynamicCard values={coreValuesData} isneedHeader={true} />
    </div>
  );
};

export default CoreValues;
