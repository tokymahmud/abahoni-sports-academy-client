import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">

         <Outlet></Outlet>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
          <a className="btn btn-ghost normal-case text-xl">ABAHONI SPORTS<br></br><span className='text-red-500	'>ACADEMY</span></a>

            <li><Link to='/'>My Selected Classes:</Link></li>
            <li><Link to='/'>My Enrolled Classes:</Link></li>
            <li><Link to='/'>Payment history</Link></li>
            <li><Link to='/'></Link></li>
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;