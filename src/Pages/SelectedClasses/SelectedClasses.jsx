import React from 'react';
import UseSclasses from '../../Hooks/UseSclasses';
import Swal from 'sweetalert2';

const SelectedClasses = () => {
    const [cart,refetch] =UseSclasses();
    console.log(cart);
    const total = cart.reduce((sum,item)=>item.price+sum,0)
    const handleDelete=item=>{
        Swal.fire({
            title: 'Are you sure?',
           
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              fetch (`http://localhost:5000/sclasses/${item._id}`,{
                method:'DELETE'
              })
              .then(res=>res.json())
              .then(data=>{
               if(data.deletedCount>0){
                if (result.isConfirmed) {
                    refetch();
                    Swal.fire(
                      'Deleted!',
                      'Your class has been deleted.',
                      'success'
                    )
                  }
               }
                
              })
            }
          })

    }
    return (
        <div className='w-full '>
            <div className='uppercase font-bold flex justify-evenly'>
            <h1>Total Selected classes:{cart.length}</h1>
            <h1>Total Payable:${total}</h1>
            <button className="btn btn-sm bg-orange-800 text-white">Pay</button>



            </div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
         #
        </th>
        <th>Image</th>
        <th>Name</th>
        <th>Instructor</th>
        <th>Price</th>
        <th>action</th>
      </tr>
    </thead>
    <tbody>
      {
      cart.map((item,index)=>  <tr
      key={item._id}
      >
        <td>
         {index+1}
        </td>
        <td>
         
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={item.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
           
        
        </td>
        <td>
          {item.name}
        </td>
        <td>{item.instructor}</td>
        <td>${item.price}</td>
        <td>
          <button onClick={()=>handleDelete(item)} className="btn btn-danger btn-xs bg-red-800 text-white">delete</button>
        </td>
      </tr>)
      }
    
     
    </tbody>
    
    
  </table>
</div>
        </div>
    );
};

export default SelectedClasses;