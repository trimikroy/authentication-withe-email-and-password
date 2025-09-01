import React from 'react';
import Home from '../components/Home/Home';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';


const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;