import React from 'react';
import { useForm } from 'react-hook-form';
import UseAuth from '../Hooks/useAuth';
import UseAxiosecure from '../Hooks/UseAxiossecure';
import Swal from 'sweetalert2';

const AddClass = () => {
  const { register, handleSubmit,reset } = useForm();
  const {user} = UseAuth();
  const [axiosSecure]=UseAxiosecure();



  const onSubmit = (data) => {
    // Handle form submission and create a new class in the database
    console.log(data);
    // You can make an API call here to create the class with the form data
    // const { image, name, parseFloat(price) , seats } = data;

    const newItem = {
      ...data,
      instructor: user.name,
      instructorEmail: user.email,
      price: parseFloat(data.price)

    };
    axiosSecure
      .post('/classes', newItem)
      .then((data) => {
        console.log('after posting new classes', data.data);
        if(data.data.insertedId){
            reset();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'class added  succesfully. Wait for admin aproval!!',
                showConfirmButton: false,
                timer: 1500
              })
        }
      })
      .catch((error) => {
        console.error('Error creating class:', error);
      });
    // const { image, name, price , seats,instructor,instructorEmail } = newItem;

  };

  return (
    <div style={{ width: '100%', padding: '20px' }}>
      <h1>Add a Class</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="className">Class Name</label>
          <input type="text" id="className" {...register('name', { required: true })} />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="classImage">Class Image</label>
          <input type="text" id="classImage" {...register('image', { required: true })} />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="instructorName">Instructor Name(Will automatically inserted from logged in user)
          <br></br></label>
          <input type="text" id="instructorName" value={user.name}  />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="instructorEmail">Instructor Email(Will automatically inserted from logged in user) <br></br></label>
          <input type="text" id="instructorEmail" value={user.email}  />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="availableSeats">Available Seats</label>
          <input type="number" id="availableSeats" {...register('seats', { required: true })} />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="price">Price</label>
          <input type="number" id="price" {...register('price', { required: true })} />
        </div>
        <div>
          <button type="submit" style={{ backgroundColor: '#4caf50', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Add Class</button>
        </div>
      </form>
    </div>
  );
};

export default AddClass;
