import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const MianLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='w-[80%] mx-auto max-w-7xl'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MianLayout;