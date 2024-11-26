import React from 'react';
import wcuImgOne from '../../Assets/images/home/pill-img-1.png';
import wcuImgTwo from '../../Assets/images/home/pill-img-2.png';
import wcuImgThree from '../../Assets/images/home/pill-img-3.png';
import wcuImgFour from '../../Assets/images/home/pill-img-4.png';
import wcuImgFive from '../../Assets/images/home/pill-img-5.png';
import doctorsImages from '../../Assets/images/home/wcu-doctors.png'
import healthCare from '../../Assets/images/home/wcu-healthcare.png';
import dataDriven from '../../Assets/images/home/wcu-data-driven.png';
import comprehensive from '../../Assets/images/home/wcu-comprehensive.png';
import './WhyChooseUs.scss';

function WhyChooseUs() {
    const services = [
        { title: 'Tech-Enabled Primary Care', image: healthCare },
        { title: '24/7 Access', image: healthCare },
        { title: 'Comprehensive Services', image: comprehensive},
        { title: 'Personalized Health Care', image: healthCare },
        { title: 'Data Driven Insights', image:dataDriven},
        { title: 'Enhanced Privacy & Security', image:dataDriven}
    ];

    return (
        <div className='wcu-conatiner'>
            <div className='wcu-parent-wrapper'>
            <div className='wcu-container-wrapper max-w-[1200px] m-auto'>

                <div className='wcu-row-1 '>
                    <div className='row-1-left'>
                        <h2 className='row-1-title'>Why Choose Us?</h2>
                        <p className='row-1-paragraph'>At Truvita Wellness, we redefine healthcare by merging human expertise with cutting-edge AI technology.</p>
                    </div>

                    <div className='row-1-right'>
                        <div className='row-1-right-wrapper'>
                        <img src={doctorsImages} alt='doctores' className='max-w-[100%]'/>
                        
</div>
                    </div>

                </div>
                <div className='wcu-row-2'>
                    {
                        services.map((res)=>{
                            return(
                                <div className='pill-card-container'>
                                <div className='pill-card-img-container'>
                                    <img src={res.image} alt='description-logo' className=''/>
                                </div>
                                <div className='pill-card-description'>
                                    <p>
                                    {res.title}
                                    </p>
                                </div>
                            </div>
                            )
                        })
                    }
                   
                </div>
            </div>
            </div>
        </div>
    );
}

export default WhyChooseUs;

