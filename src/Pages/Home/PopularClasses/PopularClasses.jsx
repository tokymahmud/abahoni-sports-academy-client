import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const PopularClasses = () => {
    const [classes,setclasses] =useState([]);
    useEffect(()=>{
        fetch('classes.json')
        .then(res=>res.json())
        .then(data=>{
            const popularclasses =data.sort((a, b) => b.studentsEnrolled - a.studentsEnrolled).slice(0, 6)
            setclasses(popularclasses)})
    })
    return (
        <section>
            <SectionTitle 
            heading="Popular sports classes"
            ></SectionTitle>
        <div className='grid grid-cols-1 md:grid-cols-3 '>
        {classes.map((classItem) => (
          <div  className="card w-96 bg-base-100 shadow-xl" key={classItem._id}>
            <figure> <img src={classItem.image} alt={classItem.name} /></figure>
            <h3>{classItem.name}</h3>
            <p>Instructor: {classItem.instructor}</p>
            <p>Students Enrolled: {classItem.studentsEnrolled}</p>
            <p>Price: {classItem.price}</p>
          </div>
        ))}
        </div>
        </section>
    );
};

export default PopularClasses;