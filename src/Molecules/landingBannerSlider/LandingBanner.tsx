import React from "react";
import landingBannerImgOne from '../../Assets/images/home/landing-banner-doctor.png';
import landingBannerImgTwo from '../../Assets/images/home/landing-banner-ai-doctor.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LandingBannerCard from "../../Atom/landingBannerCard/LandingBannerCard";
import './LandingBanner.scss';

const LandingBanner = () => {
  const sliderData = [
    {
      cardTitle: "Access Quality Healthcare Anytime, Anywhere",
      cardDescription: "Consult with Top Doctors from any location worldwide.",
      imageLink: landingBannerImgOne,
      navigationLink: "/",
      navigationText: "Get Started"
    },
    {
      cardTitle: "Need a Doctor Now? Consult Our AI Doctor in Minutes!",
      cardDescription: "Quick Answers for Your Health Concerns – Talk to our AI Doctor Today!",
      imageLink: landingBannerImgTwo,
      navigationLink: "/",
      navigationText: "Learn More"
    }
  ];

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="slider-container max-w-[1500px] m-auto">
      <Slider {...settings}>
        {sliderData.map((slide, index) => (
          <LandingBannerCard
            key={index}
            cardTitle={slide.cardTitle}
            cardDescription={slide.cardDescription}
            imageLink={slide.imageLink}
            navigationLink={slide.navigationLink}
            navigationText={slide.navigationText}
          />
        ))}
      </Slider>
    </div>
  );
};

export default LandingBanner;
