import React from "react";
import PlanCard from "../../Atom/pricingCard/PricingCard";
import './Pricing.scss'

const PricingPlans: React.FC = () => {
  const freePlanFeatures = [
    "Limited access to general consultations",
    "AI Doctor",
    "Limited health record access",
  ];

  const premiumPlanFeatures = [
    "Unlimited Consultation",
    "AI Doctor access",
    "24/7 Video Consultation",
    "Health Monitoring",
    "Diet & Wellness Plan",
  ];
// 49.99$
  return (
    <div className="container">
    <div className="pricing-container-wrapper max-w-[1200px] m-auto">
      <h2 className="pricing-title">Our Plans</h2>
      <div className="pricing-plan-card gap-6">
     
      <PlanCard
        title="Free Plan"
        features={freePlanFeatures}
        isPremium={false}
        buttonText={"Join Now"}

      />
      

      <PlanCard
        title="Premium Plan"
        price="$19.99"
        features={premiumPlanFeatures}
        isPremium={true}
        buttonText={"Subscribe Now"}
        offerPrice = "$49.99"
      />
      </div>
    </div>
    </div>
  );
};

export default PricingPlans;
