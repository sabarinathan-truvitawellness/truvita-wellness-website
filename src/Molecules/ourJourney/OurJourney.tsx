// import React from "react";
// import ourJourneyOne from '../../Assets/images/aboutus/our-journey-1.png';
// import ourJourneyTwo from '../../Assets/images/aboutus/our-journey-2.png';

// const OurJourney = (()=>{
//       return(
//         <div className="container aboutus-container"> 
//       <div className="container-wrapper max-w-[1200px] m-auto pt-[90px] pb-[60px]">
//         <div className="content-section flex justify-between align-middle">
         
          
//           <div className="right-section max-w-1/2">
//             <div className="right-section-wrapper flex gap-4 ">
//               <div className="sub-section-left flex ">
//                 <div className="sub-section-wr-top mb-4">
//                   <img src={ourJourneyOne} alt="About Us" className="w-[100%]" />
//                 </div>
//                 <div className="sub-section-wr-bottom relative right-[25%] top-[25%]">
//                   <img src={ourJourneyTwo} alt="More Info" className="w-[100%]" />
//                 </div>
//               </div>
//             </div>
//           </div> 

//           <div className="left-section max-w-1/2 flex justify-between align-middle items-center">
//             <div className="left-section-wrapper ">
//               <div className="content-row-1"> 
//                 <h1 className="our-journey-content-1 mb-[12px]">Our Journey</h1>
//               </div>
//               <div className="content-row-2 max-w-[600px]">
//                 <p className="about-content-2 mb-[40px]">
//                 TruVita Wellness was founded in 2024 with a bold vision: to change the way healthcare is delivered through innovation and technology. Right from our inception, we introduced our AI Avatar, a unique and groundbreaking feature that sets us apart in the healthcare industry. This digital assistant provides users with personalized, interactive consultations, making healthcare more accessible and user-friendly.
//                 </p>
//               </div>
//             </div>
//           </div>
          
//         </div>
//       </div>
//     </div>
//       )
// });

// export default OurJourney;



// @import '../../Style/mixins'; // Adjust the path if necessary
// @import '../../Style/variables';

// .our-journey-container {
//   padding-top: 90px;
//   padding-bottom: 60px;

//   .container-wrapper {
//     max-width: 1200px;
//     margin: auto;

//     .content-section {
//       display: flex;
//       justify-content: space-between;
//       align-items: center;
//       padding:0 20px;

//       @include respond-to('mobile') {
//         flex-direction: column-reverse;
//       }
//       @include respond-to('tablet') {
//         flex-direction: column-reverse;
//       }

//       .left-section {
//         max-width: 50%;
//         display: flex;
//         align-items: center;

//         .left-section-wrapper {
//           .content-row-1 {
//             h1.our-journey-content-1 {
//               font-size: 36px;
//               font-weight: 700;
//               margin-bottom: 12px;
//             }
//           }

//           .content-row-2 {
//             .about-content-2 {
//               font-size: 18px;
//               font-weight: 400;
//               line-height: 1.5;
//               max-width: 600px;
//               margin-bottom: 40px;
//             }
//           }
//         }

//         @include respond-to('mobile') {
//           max-width: 100%;
//           text-align: left;

//           .left-section-wrapper {
//             .content-row-1 {
//               h1.our-journey-content-1 {
//                 font-size: 28px;
//               }
//             }

//             .content-row-2 {
//               .about-content-2 {
//                 font-size: 16px;
//                 // margin-bottom: 20px;
//               }
//             }
//           }
//         }
//         @include respond-to('tablet') {
//             max-width: 100%;
//             text-align: left;
  
//             .left-section-wrapper {
//               .content-row-1 {
//                 h1.our-journey-content-1 {
//                   font-size: 28px;
//                 }
//               }
  
//               .content-row-2 {
//                 .about-content-2 {
//                   font-size: 16px;
//                   margin-bottom: 40px;
//                 }
//               }
//             }
//           }
//       }

//       .right-section {
//         width: 50%;

//         .right-section-wrapper {
//           display: flex;
//           gap: 16px;

//           .sub-section-left {
//             display: flex;
//             flex-direction: column;

//             .sub-section-wr-top {
//               margin-bottom: 16px;
//             //   max-width: ;
//               @include respond-to('mobile'){
//                 max-width:75% ;
//               }
//               @include respond-to('tablet'){
//                 max-width:75% ;
//               }

//               img {
//                 width: 100%;
              
//               }
//             }

//             .sub-section-wr-bottom {
//               position: relative;
//               right: -25%;
//                 top: -22%;

//               img {
//                 width: 100%;
//               }
//             }
//           }
//         }

//         @include respond-to('mobile') {
//           max-width: 100%;
//           margin-bottom: 20px;

//           .right-section-wrapper {
//             .sub-section-left {
//               .sub-section-wr-bottom {
//                 width: 75%;
//                 position: relative;
//                 right: -25%;
//                 top: -22%;
//                 img {
//                     width: 100%;
//                   }
//               }
//             }
//           }
//         }

//         @include respond-to('tablet'){
//             max-width: 100%;
//           margin-bottom: 20px;

//           .right-section-wrapper {
//             .sub-section-left {
//               .sub-section-wr-bottom {
//                 width: 75%;
//                 position: relative;
//                 right: -25%;
//                 top: -22%;
//                 img {
//                     width: 100%;
//                   }
//               }
//             }
//           }
//         }
//       }
//     }
//   }

//   @include respond-to('mobile') {
//     padding-top: 40px;
//     padding-bottom: 0px;
//   }
// }



import React from "react";
import ourJourneyOne from '../../Assets/images/aboutus/our-journey-1.png';
import ourJourneyTwo from '../../Assets/images/aboutus/our-journey-2.png';
import './ourJourney.scss';

const OurJourney = () => {
  return (
    <div className="our-journey-container"> 
      <div className="container-wrapper">
        <div className="content-section">
          
          <div className="right-section">
            <div className="right-section-wrapper">
              <div className="sub-section-left">
                <div className="sub-section-wr-top">
                  <img src={ourJourneyOne} alt="Our Journey 1" />
                </div>
                <div className="sub-section-wr-bottom">
                  <img src={ourJourneyTwo} alt="Our Journey 2" />
                </div>
              </div>
            </div>
          </div> 

          <div className="left-section">
            <div className="left-section-wrapper">
              <div className="content-row-1"> 
                <h2 className="our-journey-content-1">Our Journey</h2>
              </div>
              <div className="content-row-2">
                <p className="about-content-2">
                  TruVita Wellness was founded in 2024 with a bold vision: to change the way healthcare is delivered through innovation and technology. Right from our inception, we introduced our AI Avatar, a unique and groundbreaking feature that sets us apart in the healthcare industry. This digital assistant provides users with personalized, interactive consultations, making healthcare more accessible and user-friendly.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default OurJourney;
