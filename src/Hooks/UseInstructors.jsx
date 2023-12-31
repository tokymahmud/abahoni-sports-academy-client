import React, { useEffect, useState } from 'react';

const UseInstructors = () => {
    const [instructors,setinstructors] =useState([]);
    const [loading,setloading] =useState([true]);

    useEffect(()=>{
        fetch('https://abahoni-sports-academy-server.vercel.app/instructors')
        .then(res=>res.json())
        .then(data=>{
            setinstructors(data);
            setloading(false)})
    },[])
    
    return[instructors, loading]
    
};

export default UseInstructors;