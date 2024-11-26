import React from 'react';
import './aiBoothWorkingSteps.scss'; // Assuming your SCSS file is named cardStyles.scss
import AiBoothWorkingCard from '../../Atom/aiBoothWorkingCard/AiBoothWorkingCard';
import image from '../../Assets/images/aiBooth/ai-booth-abt-img-1.png'

// Dummy Data for the cards
const cardData = [
  {
    id: 1,
    title: 'We Come To You',
    description: 'SCR catalyst inspection is essential in planning an effective catalyst management program as each SCR outage represents an opportunity to learn more about operating conditions, resulting in improved performance and reliability.',
    imageUrl: image, // Replace with your image URLs
    number: '01',
    subtitle: 'Inspection & Audit'
  },
  {
    id: 2,
    title: 'Catalyst Management',
    description: 'SCR catalyst inspection is essential in planning an effective catalyst management program as each SCR outage represents an opportunity to learn more about operating conditions, resulting in improved performance and reliability.',
    imageUrl: image,
    number: '02',
    subtitle: 'Management & Services'
  },
  {
    id: 3,
    title: 'Efficiency Maximization',
    description: 'SCR catalyst inspection is essential in planning an effective catalyst management program as each SCR outage represents an opportunity to learn more about operating conditions, resulting in improved performance and reliability.',
    imageUrl: image,
    number: '03',
    subtitle: 'Optimization'
  }
];

const AiBoothWorkingStpes = () => {
  return (
    <div className='ai-Booth-Working-container'>
      <h3 className='ai-booth-working-title'>How it Works</h3>
      <div className='ai-booth-working-container-wrapper'>
      {cardData.map((card) => (
        <AiBoothWorkingCard
          key={card.id}
          number={card.number}
          subtitle={card.subtitle}
          title={card.title}
          description={card.description}
          imageUrl={card.imageUrl}
        />
      ))}
      </div>
    </div>
  );
};

export default AiBoothWorkingStpes;
