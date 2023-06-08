import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { app } from '../../firebase/firebase.config';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';

const auth =getAuth(app);


const Registration = () => {
    
  const [error, setError] =useState('');

  const { createUser} = useContext(AuthContext);
  console.log(createUser);

  const aa= (email,password)=>{
      createUserWithEmailAndPassword(auth,email,password)
      .then(result =>{
          const loggedUser =result.user;
          console.log(loggedUser);
          setError('')
      })
      .catch(error=>{
          console.log(error.message)
          setError(error.message)
      })

  }

  const handleRegister =async(event)=>{
      event.preventDefault();

      const form = event.target;
      const name = form.name.value;
      const email = form.email.value;
      const img = form.img.value;
      const password = form.password.value;
      console.log(email,password,name,img);

      
      aa (email,password)
    

  }
    return (
        <div>
           
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col md:flex-row-reverse">
    <div className="text-center md:text-left">
      <h1 className="text-5xl font-bold"> Please Register!</h1>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
        </div>
      
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          {/* /(?=.*[a-z])(?=.*[A-Z])/.test(password)
 */}
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
         
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image URL</span>
          </label>
          <input type="text" name='img' placeholder="Image URL" className="input input-bordered" required />
        </div>
        <button type='submit' className="btn btn-primary">Register</button>

         
      </form>
          <label className="label">
            <Link to='/login' className="label-text-alt link link-hover">Already have an account?</Link>
          </label>
          <p className='text-red-600	' >{error}</p>
        
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default Registration;