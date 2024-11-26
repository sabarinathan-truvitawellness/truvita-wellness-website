import React from 'react';
import Accordion from '../../Atom/accordian/Accordian';
import './faq.scss';

const FAQData = [
  {
    question: 'Aliquam porta nisl dolor, molestie pellentesque elit molestie in?',
    answer: 'Aliquam porta nisl dolor. Morbi metus neque, elementum ullamcorper libero nec, tristique vehicula velit.',
  },
  {
    question: 'Aliquam pulvinar vestibulum blandit. Donec sed nisl libero?',
    answer: 'Fusce dignissim luctus sem eu dapibus. Proin eget quam tincidunt, facilisis mauris ac, consequat lacus.',
  },
  {
    question: 'Donec sed erat ut magna suscipit mattis?',
    answer: 'Aliquam erat volutpat. Morbi in orci risus. Donec pretium felis sit amet est condimentum, vel facilisis orci posuere.',
  },
  {
    question: 'Aliquam erat volutpat. Morbi in orci risus?',
    answer: 'Donec pretium felis sit amet est condimentum, vel facilisis orci posuere. Nam tincidunt vehicula sapien.',
  },
  {
    question: 'Aliquam porta nisl dolor, molestie pellentesque?',
    answer: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
  },
];

const FAQPage = () => {
  return (
    <div className="container">
      <div className='faq-container-wrapper'>
      <Accordion items={FAQData} />
      </div>
    </div>
  );
};

export default FAQPage;
