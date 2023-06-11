import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/NavBar/navbar';
import UseAdmin from '../Hooks/UseAdmin';

const Main = () => {
    const isAdmin =UseAdmin();

    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;