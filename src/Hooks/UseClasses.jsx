import { useEffect, useState } from "react";

const UseClasses = () => {
    const [classes,setclasses] =useState([]);
    const [loading,setloading] =useState([true]);
    useEffect(()=>{
        fetch('http://localhost:5000/classes')
        .then(res=>res.json())
        .then(data=>{
            setclasses(data);
        setloading(false)})
    },[])
    return[classes, loading]
};

export default UseClasses;