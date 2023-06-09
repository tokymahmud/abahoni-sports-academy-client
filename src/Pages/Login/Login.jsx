import React, { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';


const Login = () => {
    const {singIn, singinWithGoogle} =useContext(AuthContext);
    const [passwordVisible, setPasswordVisible] = useState(false);

    const navigate =useNavigate();
    const location =useLocation();

    const from= location.state?.from?.pathname || '/';

    const handleTogglePassword = () => {
        setPasswordVisible(!passwordVisible);
      };
  
  
      const handleLogin =event =>{
          event.preventDefault();
          const form =event.target;
          const email = form.email.value;
          const password = form.password.value;
          console.log(email,password);
  
          singIn(email,password)
          .then(result=>{
            const loggedUser=result.user;
            console.log(loggedUser)
            navigate(from,{replace:true});
          })
          .catch(error=>{
            console.log(error)
          })
  
  
      }
     const  handleGoogleSingin =()=>{
      singinWithGoogle()
      .then (result=>{
        const loggedUser =result.user;
        console.log(loggedUser);
      })
      .catch(error=>{
        console.log(error)
      }) }
     
    return (
        <div>
        <div className="hero min-h-screen bg-base-200">
<div className="hero-content flex-col md:flex-row-reverse">
<div className="text-center md:text-left">
  <h1 className="text-5xl font-bold"> Please Login now!</h1>
</div>
<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
  <form onSubmit={handleLogin} className="card-body">
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
      <input
                  type={passwordVisible ? 'text' : 'password'}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
      <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={handleTogglePassword}
                >
                  <span
                    className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                    onClick={handleTogglePassword}
                  >
                    {passwordVisible ? 'Hide' : 'Unhide'}
                  </span>
                </button>
      <label className="label">
        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
      </label>
    </div>
    <div className="form-control mt-6">
      <button className="btn btn-primary">Login</button>
    </div>
    <div className='flex space-x-4 '>
    <button onClick={handleGoogleSingin} className="btn btn-primary gap-4 ">Google</button>


    </div>
  </form>
  <Link to='/registration'>
  <button className="btn btn-link">Dont have account?</button>

  </Link>

  
</div>
</div>
</div>
    </div>
    );
};

export default Login;