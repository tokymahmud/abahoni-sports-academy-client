import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import UseAdmin from '../Hooks/UseAdmin';

const Dashboard = () => {



  const [isAdmin] =UseAdmin();
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
           {
            isAdmin?<>
              <li><Link to='selectedclasses'>Manage Classes</Link></li>
            <li><Link to='addclasses'>Add Class</Link></li>
            <li><Link to='allusers'>Manage Users</Link></li>
         
            </>:<>
            <li><Link to='selectedclasses'>My Selected Classes:</Link></li>
            <li><Link to='myclasses'>My Enrolled Classes:</Link></li>
            <li><Link to='/'>Payment history</Link></li>
            </>
           }
              

          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;