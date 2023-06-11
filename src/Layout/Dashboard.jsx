import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import UseAdmin from '../Hooks/UseAdmin';
import UseInstructor from '../Hooks/UseInstructor';

const Dashboard = () => {



  const [isAdmin] =UseAdmin();
  const [isInstructor] =UseInstructor();
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
          <a className="btn btn-ghost normal-case text-xl"><Link to='/'>ABAHONI SPORTS<br></br><span className='text-red-500	'>ACADEMY</span></Link>
</a>
{isAdmin ? (
  <>
    <li><Link to='manageclasses'>Manage Classes</Link></li>
    <li><Link to='allusers'>Manage Users</Link></li>
  </>
) : isInstructor ? (
  <>
    <li><Link to='addaclass'>Add a Class:</Link></li>
    <li><Link to='myclasses'>My Classes(Instructor):</Link></li>
  </>
) : 
<>
    <li><Link to='selectedclasses'>Selected Classes:</Link></li>
    <li><Link to='/'>My Enrolled Classes:</Link></li>
    <li><Link to='/'>Payment history</Link></li>
  </>
}

          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;