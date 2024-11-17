import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='min-h-20 bg-purple-700 flex items-center justify-between px-12 text-white'>
            <div>
                <h1 className='text-xl font-extrabold'>TEETH WIZARD</h1>
            </div>
            <div className='space-x-4'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/allTreatments">All Treatments</NavLink>
                <NavLink to="/myAppoinments">My appoiments</NavLink>
                <NavLink to="/profile">Profile</NavLink>
            </div>
            <div>
                <button className='badge-outline btn'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;