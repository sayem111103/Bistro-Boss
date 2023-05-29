import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const Main = () => {
    const location = useLocation();
    const path = location.pathname === '/login';
    return (
        <>
            <div className='bg-opacity-50 fixed z-20 w-full text-white bg-black'>
                {path || <Navbar></Navbar>}
            </div>
            <Outlet></Outlet>
            {path || <Footer></Footer>}
        </>
    );
};

export default Main;