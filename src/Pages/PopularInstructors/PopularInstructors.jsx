import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';

const PopularInstructors = () => {
    const [instructors,setinstructors] =useState([]);
    useEffect(()=>{
        fetch('instructors.json')
        .then(res=>res.json())
        .then(data=>{
            const popularinstructors =data.sort((a, b) => b.studentsInClasses  - a.studentsInClasses ).slice(0, 6)
            setinstructors(popularinstructors)})
    })
    return (
        <section>
            <SectionTitle 
            heading="Top Instructors"
            ></SectionTitle>
            <div  className='grid grid-cols-1 md:grid-cols-3 '>
            {instructors.map((instructor) => (
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