import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { app } from '../../firebase/firebase.config';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const auth = getAuth(app);

const Registration = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  console.log(watch("example"));

  const [error, setError] = useState('');

  const { createUser } = useContext(AuthContext);
  console.log(createUser);

  const handleRegister = async (data) => {
    const { name, email, img, password, confirmPassword } = data;

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      const loggedUser = result.user;
      console.log(loggedUser);
      setError('');
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col md:flex-row-reverse">
          <div className="text-center md:text-left">
            <h1 className="text-5xl font-bold"> Please Register!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(handleRegister)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="Name" className="input input-bordered" required {...register('name')} />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required {...register('email')} />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required {...register('password')} />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input type="password" name="confirmPassword" placeholder="confirm password" className="input input-bordered" required {...register('confirmPassword')} />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image URL</span>
                </label>
                <input type="text" name="img" placeholder="Image URL" className="input input-bordered" required {...register('img')} />
              </div>
              <button type="submit" className="btn btn-primary">Register</button>
            </form>
            <label className="label">
              <Link to="/login" className="label-text-alt link link-hover">Already have an account?</Link>
            </label>
            <p className="text-red-600">{error}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
