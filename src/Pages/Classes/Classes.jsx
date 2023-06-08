import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import UseClasses from '../../Hooks/UseClasses';

const Classes = () => {
  const [classes]=UseClasses();

   

    const handleSelectClass = (classItem) => {
        // Logic for handling class selection
        // You can implement the desired behavior here
        // For now, let's log the selected class to the console
        console.log('Selected Class:', classItem.name);
      };
    
      const isLoggedIn = true; // Update this value based on user login status
      const isAdminOrInstructor = true; // U

    return (
        <section className='p-20 mt-11'>
        <SectionTitle 
        heading="Classes"
        ></SectionTitle>
    <div className='grid grid-cols-1 md:grid-cols-3 '>
    {classes.map((classItem) => (
      <div className={`card w-96 bg-base-100 shadow-xl ${classItem.seats - classItem.studentsEnrolled === 0 ? 'bg-red-500' : ''}`} key={classItem._id}>
        <figure> <img src={classItem.image} alt={classItem.name} /></figure>
        <h3>Name:{classItem.name}</h3>
        <p>Instructor: {classItem.instructor}</p>
        <p>Available Seats: {classItem.seats-classItem.studentsEnrolled}</p>
        <p>Price: {classItem.price}</p>
        <button
              disabled={classItem.seats - classItem.studentsEnrolled === 0 || !isLoggedIn || isAdminOrInstructor}
              onClick={() => handleSelectClass(classItem)}
            >
              Select
            </button>
            {!isLoggedIn && <p>Please log in before selecting the course.</p>}
      </div>
    ))}
    </div>
    </section>
    );
};

export default Classes;