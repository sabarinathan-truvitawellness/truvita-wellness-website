import React from "react";
import './TeamGrid.scss';
import LeadMember from "../leadMember/LeadMember";
import teamMemberOne from '../../Assets/images/aboutus/team-member-1.png'
import teamMemberTwo from '../../Assets/images/aboutus/team-member-2.png'
import teamMemberThree from '../../Assets/images/aboutus/Jorge-Pinedo-cmo.png'
import teamMemberFour from '../../Assets/images/aboutus/Fernando-Gumucio-consultant.jpg'
import humanAvatar from '../../Assets/images/aboutus/avatar-dummy-2.jpg'

const teamMembers = [
  { name: "Jorge-Pinedo", title: "Board Member", image: teamMemberThree },
  { name: "Fernando Gumucio", title: "Consultant", image:  teamMemberFour },
  { name: "Coming Soon", title: "Co-Founder & CMO", image:  humanAvatar },
  { name: "Coming Soon", title: "Medical Doctor", image: humanAvatar},
 
];

const TeamGrid = () => {
  return (
    <div className="team-grid-section">
      <h2 className="team-title">Meet the Team</h2>
      <div className="">
      <LeadMember></LeadMember>
      </div>
      <div className="team-grid pt-[60px] pb-[60px]">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member-card">
            <div className="member-photo relative">
              <img src={member.image} alt={member.name} className="team-photo"/>
              <div className="member-info">
              <h3 className="member-name ">{member.name}</h3>
              <p className="member-title text-white">{member.title}</p>
            </div>
            </div>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamGrid;
