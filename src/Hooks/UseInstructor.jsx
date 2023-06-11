import React, { useEffect, useState } from 'react';
import UseAxiosecure from './UseAxiossecure';
import UseAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const UseInstructor = () => {
    
    
        const {user, loading} = UseAuth();
    const [axiosSecure] = UseAxiosecure();
    // use axios secure with react query
    const {data: isInstructor, isLoading: isInstructorLoading} = useQuery({
        queryKey: ['isInstructor', user?.email],
        enabled: !loading ,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
            return res.data.instructor;
        }
    })
    return [isInstructor, isInstructorLoading]


        
    
};

export default UseInstructor;