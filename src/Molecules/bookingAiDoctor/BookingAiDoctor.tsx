// import React from "react";
// import './bookingAiDoctor.scss';
// import { Link } from "react-router-dom";
// import aiRobotImage from '../../Assets/images/aiDoctor/ai-robot-booking-img.png';

// const BookingAiDoctor = (()=>{
//     return(
//         <section className="ai-doctor-booking-container text-white pt-[100px] pb-[60px] ">
//       <div className="max-w-[1300px] m-auto">
//         {/* Hero Section */}
//         <div className="flex flex-col lg:flex-row items-center rounded-3xl px-8 py-2 h-[400px]">
//           {/* Text Section */}
//           <div className="lg:w-1/2 space-y-4 ">
//             <h1 className="ai-dotor-text text-white">
//               Meet Our <br></br> <span className="grad-text">AI Doctor</span>
//             </h1>
//             <p className="text-lg text-gray-300">
//               Experience healthcare like never before with our AI Doctor, offering instant, personalized medical advice through an interactive avatar.
//             </p>
//             <div className="pt-[80px]">
//             <Link className="bg-cyan-500 text-white px-6 py-3 rounded-full hover:bg-cyan-600 transition" to={"#"}>
//               Learn More
//             </Link>
//             </div>
//           </div>

//           {/* Image Section */}
//           <div className=" lg:w-1/2 mt-8 lg:mt-0 flex justify-end">
//           <div className='booking-aidoc-img-container max-w-[450px] h-[100%] relative top-[40px]'>
//             <img
//               src={aiRobotImage}
//               alt="AI Doctor"
//               className="rounded-xl"
//             />
//             </div>
           
//           </div>

        
//         </div>
//       </div>
//     </section>
//     )
// });

// export default BookingAiDoctor;


import React from "react";
import './bookingAiDoctor.scss';
import { Link } from "react-router-dom";
import aiRobotImage from '../../Assets/images/aiDoctor/ai-robot-booking-img.png';

const BookingAiDoctor = (() => {
    return (
        <section className="ai-doctor-booking-container">
            <div className="ai-doctor-content-wrapper">
                {/* Hero Section */}
                <div className="hero-section">
                    {/* Text Section */}
                    <div className="text-section">
                        <h1 className="ai-dotor-text">
                            Meet Our <br /> 
                            <span className="grad-text">AI Doctor</span>
                        </h1>
                        <p className="description-text">
                            Experience healthcare like never before with our AI Doctor, offering instant, personalized medical advice through an interactive avatar.
                        </p>
                        <div className="learn-more-button-container">
                            <Link className="learn-more-button" to="#">
                                Learn More
                            </Link>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="image-section">
                        <div className="booking-aidoc-img-container">
                            <img src={aiRobotImage} alt="AI Doctor" className="ai-doctor-image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default BookingAiDoctor;
