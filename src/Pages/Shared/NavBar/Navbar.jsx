import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navOptions =<>
      <Link to='/'><button className="btn btn-active btn-neutral">Home</button>
</Link>
      <Link to='/instructors'><button className="btn btn-active btn-neutral">Instructors</button></Link>
      <Link to='/classes'><button className="btn btn-active btn-neutral">Classes</button></Link>
      <Link to='/dashboard'><button className="btn btn-active btn-neutral">Dashboard</button></Link>
      <Link to='/login'><button className="btn btn-active btn-neutral">Log In</button></Link>
    
      

    </>
    return (
        <div>
            <div className="navbar fixed z-10 bg-black text-white max-w-screen-xl mx-auto ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      {navOptions}

      </ul>
    </div>
    <img className='rounded' src='https://ibb.co/qWH6t8q'></img>
    <a className="btn btn-ghost normal-case text-xl">Abahoni <span className='text-red-500	'>Sports</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navOptions}
    </ul>
  </div>

</div>
        </div>
    );
};

export default Navbar;