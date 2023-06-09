import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const UseSclasses = () => {
    const{user}=useContext(AuthContext);

    const {isLoading,refetch,isError,data:cart=[],error}=useQuery({
        queryKey:['sclasses',user?.email],
        queryFn: async()=>{
            const response =await fetch(`http://localhost:5000/sclasses?email=${user.email}`)
            return response.json();

        },
    })
    return[cart,refetch,isLoading];
};

export default UseSclasses;