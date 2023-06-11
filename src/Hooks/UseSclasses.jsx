import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import UseAxiossecure from './UseAxiossecure';
import UseAuth from './useAuth';

const UseSclasses = () => { const { user, loading } = UseAuth();
// const token = localStorage.getItem('access-token');
const [axiosSecure] = UseAxiossecure();
const { refetch, data: cart = [] } = useQuery({
    queryKey: ['sclasses', user?.email],
    enabled: !loading,
    queryFn: async () => {
        const res = await axiosSecure(`/sclasses?email=${user?.email}`)
        console.log('res from axios', res)
        return res.data;
    },
})

return [cart, refetch]
};

export default UseSclasses;