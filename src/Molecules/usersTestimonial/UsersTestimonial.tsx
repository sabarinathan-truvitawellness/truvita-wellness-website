import React from "react";
import Testimonial from "../testimonial/Testimonial";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonialImg from '../../Assets/images/home/testimonialimg.png';
import './userTestimonial.scss';

const UserTestimonial: React.FC = () => {
  const testimonialData = [
    {
      image: testimonialImg,
      ctmrName: "John Doe",
      ctmrSubContent: "CEO of Company",
      description: "I had a great experience with TruVita Wellness. The process was smooth, and the doctor was very attentive.",
    },
    {
      image: testimonialImg,
      ctmrName: "Jane Smith",
      ctmrSubContent: "Product Manager",
      description: "Fantastic experience with the platform. The customer service was very helpful and fast.",
    },
    {
      image: testimonialImg,
      ctmrName: "Alice Johnson",
      ctmrSubContent: "Marketing Specialist",
      description: "The team was very helpful throughout the process, and I felt very comfortable during my consultation.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="testimonial-slider pt-[60px] pb-[60px]">
      <div className="testimonial-slider-title">
        <p className="testimonial-slider-title-content text-center mb-40px">What Our Users Say</p>
      </div>
      <Slider {...settings} arrows={false}>
        {testimonialData.map((testimonial, index) => (
          <div key={index} className="testimonial-slide">
            <Testimonial
              image={testimonial.image}
              ctmrName={testimonial.ctmrName}
              ctmrSubContent={testimonial.ctmrSubContent}
              description={testimonial.description}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default UserTestimonial;
