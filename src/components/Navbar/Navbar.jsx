import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className="flex justify-around py-4 bg-base-100 shadow-sm">
            <div className="flex">
                <NavLink to='/' className="btn bg-sky-200 text-xl">
                    Authentication </NavLink>
            </div>
            <div className='flex gap-4'>
                <NavLink to='/' className="btn ">Home</NavLink>
                <NavLink to='/about' className="btn">About</NavLink>
            </div>
            <div className="flex gap-4">
                <NavLink to='/signIn' ><button className="btn btn-ghost bg-green-600 text-white">SignIn</button></NavLink>
                <NavLink to='/signUp' ><button className="btn  btn-ghost bg-indigo-400 text-white">SignUp</button></NavLink>
            </div>
        </div>
    );
};

export default Navbar;