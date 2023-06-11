import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const UseClasses = () => {
    // const [classes,setclasses] =useState([]);
    // const [loading,setloading] =useState([true]);
    // useEffect(()=>{
    //     fetch('http://localhost:5000/classes')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setclasses(data);
    //     setloading(false)})
    // },[])
      
    const {data: classes = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['classes'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/classes');
            return res.json();
        }
    })


    return[classes, loading,refetch]
};

export default UseClasses;