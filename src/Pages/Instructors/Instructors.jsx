import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';

const Instructors = () => {
    const [instructors,setinstructors] =useState([]);
    useEffect(()=>{
        fetch('instructors.json')
        .then(res=>res.json())
        .then(data=>{
            setinstructors(data)})
    })
    return (
        <div>
             <SectionTitle 
            heading="Instructors"
            ></SectionTitle>
              <div  className='grid grid-cols-1 md:grid-cols-3 '>
            {instructors.map((instructor) => (
    <div className="card w-96 bg-base-100 shadow-xl" key={instructor._id}>
      <figure><img src={instructor.image} alt={instructor.name} /></figure>
      <h3>Name:{instructor.name}</h3>
      <h3>Email:{instructor.email}</h3>
      <h3>Total Classes:{instructor.numberOfClasses}</h3>
      <h3>Total Student:{instructor.studentsInClasses}</h3>
      
      <p>Students in Classes: {instructor.studentsInClasses}</p>
    </div>
  ))}
            </div>
        </div>
    );
};

export default Instructors;