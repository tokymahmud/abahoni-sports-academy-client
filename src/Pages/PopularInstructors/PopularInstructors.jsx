import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import UseInstructors from '../../Hooks/UseInstructors';

const PopularInstructors = () => {
    const [instructors]=UseInstructors();
    const popularinstructors =instructors.sort((a, b) => b.studentsInClasses  - a.studentsInClasses ).slice(0, 6)

  
    return (
        <section>
            <SectionTitle 
            heading="Top Instructors"
            ></SectionTitle>
            <div  className='grid grid-cols-1 md:grid-cols-3 '>
            {popularinstructors.map((instructor) => (
    <div className="card w-96 bg-base-100 shadow-xl" key={instructor._id}>
      <figure><img src={instructor.image} alt={instructor.name} /></figure>
      <h3>{instructor.name}</h3>
      
      <p>Students in Classes: {instructor.studentsInClasses}</p>
    </div>
  ))}
            </div>

            
        </section>
    );
};

export default PopularInstructors;