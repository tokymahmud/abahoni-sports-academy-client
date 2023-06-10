import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Swal from 'sweetalert2';

const AllUsers = () => {
    const{data:users=[],refetch}=useQuery(['users'], async()=>{
        const res =await fetch('http://localhost:5000/users')
        return res.json();
    })
    const handleMakeAdmin=user=>{
        fetch(`http://localhost:5000/users/admin/${user._id}`,{
            method:'PATCH'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is now Admin`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
        
    }
    const handleMakeInstructor=user=>{
        fetch(`http://localhost:5000/users/instructor/${user._id}`,{
            method:'PATCH'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is now Instructor`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })

    }
    return (
        <div>
            <h1>Total Users:{users.length}</h1>
            <div>
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
      </tr>
    </thead>
    <tbody>
      {
      users.map((user,index)=>
      <tr key={user._id}>
        <th>{index+1}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.role==='admin'?'admin':<button onClick={()=>handleMakeAdmin(user)} className="btn btn-xs">Make Admin</button>}
</td>
        <td>{user.role==='instructor'?'instructor':<button onClick={()=>handleMakeInstructor(user)}  className="btn btn-xs">Make Instructor</button>}
</td>
      </tr>
      )
      }
      
      
    </tbody>
  </table>
</div>
            </div>
        </div>
    );
};

export default AllUsers;