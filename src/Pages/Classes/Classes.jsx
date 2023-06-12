import React, { useContext, useEffect, useState } from 'react';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import UseClasses from '../../Hooks/UseClasses';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import UseSclasses from '../../Hooks/UseSclasses';
import UseAdmin from '../../Hooks/UseAdmin';
import UseInstructor from '../../Hooks/UseInstructor';

const Classes = () => {
  const [classes]=UseClasses();
  const{user}=useContext(AuthContext);
  const [ ,refetch]=UseSclasses();
  const navigate=useNavigate();
   

    const handleSelectClass = (classItem) => {
      const {name, image,_id,seats,price,studentsEnrolled,instructor}=classItem;

        console.log('Selected Class:', classItem);
        if(user && user.email){
          const orderclass={classid: _id,name, image,seats,price,studentsEnrolled,instructor, email:user.email}
          fetch('https://abahoni-sports-academy-server.vercel.app/sclasses',{
            method:'POST',
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify(orderclass)
          })
          .then(res=>res.json())
          .then(data=>{
            if(data.insertedID){
              refetch();
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `selected`,
                showConfirmButton: false,
                timer: 1500
              })
            }

          })
        }
        else{
          Swal.fire({
            title: 'Please login for selecting classes',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Login Now'
          }).then((result) => {
            if (result.isConfirmed) {
              navigate('/login')
            }
          })

        }
      };
    
      const [isAdmin] =UseAdmin();
      const [isInstructor] =UseInstructor();


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
              disabled={classItem.seats - classItem.studentsEnrolled === 0 || isAdmin || isInstructor}
              onClick={() => handleSelectClass(classItem)}
            >
              Select
            </button>
            {/* {!isLoggedIn && <p>Please log in before selecting the course.</p>} */}
      </div>
    ))}
    </div>
    </section>
    );
};

export default Classes;