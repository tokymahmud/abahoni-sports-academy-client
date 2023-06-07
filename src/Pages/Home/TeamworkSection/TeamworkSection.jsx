import React from 'react';
import img3 from "../../../../public/img3.jpg";
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const TeamworkSection = () => {
    return (
       <section>
        <SectionTitle 
        heading={"Join Regular Team "}></SectionTitle>
         <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={img3} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">
Teamwork Makes the Dream Work</h1>
      <p className="py-6">Teamwork is the collaborative effort of a group to achieve a common goal or to complete a task in the most effective and efficient way. This concept is seen within the greater framework of a team, which is a group of interdependent individuals who work together towards a common goal.</p>
      <button className="btn btn-primary">Join Team</button>
    </div>
  </div>
</div>
        </div>
       </section>
    );
};

export default TeamworkSection;